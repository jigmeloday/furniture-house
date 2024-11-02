CREATE OR REPLACE FUNCTION toggle_favorite(p_item_id UUID)
RETURNS TABLE (status TEXT) AS $$
BEGIN
    -- Check if the user is authenticated
    IF auth.uid() IS NULL THEN
        RETURN QUERY SELECT 'user not authenticated' AS status;
END IF;

    -- Check if the item is already in the user's favorites
    IF EXISTS (
        SELECT 1 FROM favorite WHERE uid = auth.uid() AND item_id = p_item_id
    ) THEN
        -- Remove from favorites if the item exists
DELETE FROM favorite WHERE uid = auth.uid() AND item_id = p_item_id;
RETURN QUERY SELECT 'removed' AS status;
ELSE
        -- Add to favorites if it doesn't exist
        INSERT INTO favorite (uid, item_id) VALUES (auth.uid(), p_item_id);
RETURN QUERY SELECT 'added' AS status;
END IF;
END;
$$ LANGUAGE plpgsql;
