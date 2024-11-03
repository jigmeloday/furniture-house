CREATE OR REPLACE FUNCTION fetch_top_sold()
    RETURNS TABLE(
                     id UUID,
                     item_id UUID,
                     uid UUID,
                     name TEXT,
                     sid UUID,
                     price DOUBLE PRECISION,
                     discount BIGINT,
                     discount_percentage BIGINT,
                     store_name TEXT,
                     is_favorite BOOLEAN,
                     favorite_id BIGINT
                 ) AS $$
BEGIN
    RETURN QUERY
        SELECT
            result.id,
            result.item_id,
            result.uid,
            result.name,
            result.sid,
            result.price,
            result.discount,
            result.discount_percentage,
            result.store_name,
            result.is_favorite,
            result.favorite_id
        FROM (
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
                         END AS is_favorite,
                     f.id AS favorite_id,
                     COUNT(o.id) OVER(PARTITION BY o.item_id) AS sale_count
                 FROM
                     "order" o
                         JOIN
                     item i ON o.item_id = i.id
                         JOIN
                     store s ON i.sid = s.id
                         LEFT JOIN
                     favorite f ON i.id = f.item_id AND f.uid = auth.uid()  -- Use auth.uid() here
                 WHERE
                         o.status = 'completed'        -- Filter orders by auth.uid()
             ) AS result
        ORDER BY
            result.sale_count DESC,
            result.id
        LIMIT 6;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
