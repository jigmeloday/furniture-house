CREATE OR REPLACE FUNCTION fetch_item_with_store_name(product_id UUID)
RETURNS TABLE (
    item_id UUID,
    item_name TEXT,
    price DOUBLE PRECISION,
    discount BIGINT,
    discount_percentage BIGINT,
    category TEXT,
    description TEXT,
    created_at TIMESTAMPTZ,  -- Adjusted to match the actual column type
    store_id UUID,
    store_name TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        i.id AS item_id,
        i.name AS item_name,
        i.price,
        i.discount,
        i.discount_percentage,
        i.category,
        i.description,
        i.created_at,  -- This will now match the expected TIMESTAMPTZ type
        s.id AS store_id,
        s.name AS store_name
    FROM item i
    JOIN store s ON i.sid = s.id
    WHERE i.id = product_id;
END;
$$ LANGUAGE plpgsql;
