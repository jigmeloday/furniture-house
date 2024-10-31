CREATE OR REPLACE FUNCTION fetch_top_sold()
    RETURNS TABLE(
                     id UUID,                     -- Assuming id is UUID; adjust as necessary
                     item_id UUID,               -- Assuming item_id is UUID; adjust as necessary
                     uid UUID,                   -- Assuming uid is UUID; adjust as necessary
                     name TEXT,                  -- Item name
                     sid UUID,                   -- Assuming sid is UUID; adjust as necessary
                     price DOUBLE PRECISION,     -- Assuming price is DOUBLE PRECISION
                     discount BIGINT,            -- Assuming discount is BIGINT
                     discount_percentage BIGINT,  -- Assuming discount_percentage is BIGINT
                     store_name TEXT,            -- Store name from the store table
                     is_favorite BOOLEAN          -- Whether the item is a favorite for the user
                 ) AS $$
BEGIN
    RETURN QUERY
        SELECT
            o.id,
            o.item_id,
            o.uid,
            i.name,
            i.sid,
            i.price,
            i.discount,
            i.discount_percentage,
            s.name AS store_name,
            CASE
                WHEN f.item_id IS NOT NULL THEN TRUE
                ELSE FALSE
                END AS is_favorite  -- Check if the item is in the favorite table for the user
        FROM
            "order" o
                JOIN
            item i ON o.item_id = i.id  -- Join with item table on item_id
                JOIN
            store s ON i.sid = s.id      -- Join with store table on sid
                LEFT JOIN
            favorite f ON i.id = f.item_id AND o.uid = f.uid  -- Check favorite for the current user
        WHERE
                o.status = 'completed'
        GROUP BY
            o.id, o.item_id, o.uid, i.name, i.sid, i.price, i.discount, i.discount_percentage, s.name, f.item_id
        ORDER BY
            COUNT(*) DESC
        LIMIT 6;
END;
$$ LANGUAGE plpgsql;
