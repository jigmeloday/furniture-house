CREATE OR REPLACE FUNCTION fetch_items(
    page INT,
    page_size INT,
    item_category TEXT DEFAULT NULL,
    discount_filter TEXT DEFAULT NULL,
    store_filter TEXT DEFAULT NULL,
    price_filter TEXT DEFAULT NULL,
    sort_order TEXT DEFAULT NULL,
    search_query TEXT DEFAULT NULL
)
RETURNS TABLE (
    item_id UUID,
    item_name TEXT,
    is_favorite BOOLEAN,
    price DOUBLE PRECISION,
    discount BIGINT,
    discount_percentage BIGINT,
    store_id UUID,
    store_name TEXT
) AS $$
BEGIN
RETURN QUERY
    WITH filtered_items AS (
        SELECT
            i.id AS item_id,
            i.name AS item_name,
            i.price,
            i.discount,
            i.discount_percentage,
            s.id AS store_id,
            s.name AS store_name,
            CASE
                WHEN f.id IS NOT NULL THEN TRUE
                ELSE FALSE
            END AS is_favorite,
            i.created_at  -- Include created_at for ordering
        FROM item i
        LEFT JOIN favorite f ON i.id = f.item_id AND f.uid = auth.uid()
        LEFT JOIN store s ON i.sid = s.id
        WHERE (item_category IS NULL OR i.category = item_category)
          AND (search_query IS NULL OR
               i.name ILIKE '%' || search_query || '%' OR
               i.id::TEXT ILIKE '%' || search_query || '%')
          AND (
               discount_filter IS NULL OR
               (discount_filter = 'discount' AND i.discount > 0) OR
               (discount_filter = 'non-discount' AND (i.discount IS NULL OR i.discount = 0))
          )
          AND (store_filter IS NULL OR s.name ILIKE '%' || store_filter || '%')
          AND (
               price_filter IS NULL OR
               (price_filter = 'low' AND i.price < 1000) OR
               (price_filter = 'medium' AND i.price >= 1000 AND i.price <= 5000) OR
               (price_filter = 'high' AND i.price > 5000 AND i.price <= 10000) OR
               (price_filter = 'premium' AND i.price > 10000)
          )
    )
SELECT
    fi.item_id,
    fi.item_name,
    fi.is_favorite,
    fi.price,
    fi.discount,
    fi.discount_percentage,
    fi.store_id,
    fi.store_name
FROM filtered_items fi
ORDER BY
    CASE
        WHEN sort_order = 'newest' THEN fi.created_at
        END DESC,  -- Sort descending for newest
    CASE
        WHEN sort_order = 'oldest' THEN fi.created_at
        END ASC,   -- Sort ascending for oldest
    CASE
        WHEN sort_order = 'price-asc' THEN fi.price
        END ASC,   -- Sort ascending for price-asc
    CASE
        WHEN sort_order = 'price-desc' THEN fi.price
        END DESC,  -- Sort descending for price-desc
    fi.created_at DESC NULLS LAST  -- Fallback sorting by created_at DESC
    LIMIT page_size
OFFSET (page - 1) * page_size;
END;
$$ LANGUAGE plpgsql;
