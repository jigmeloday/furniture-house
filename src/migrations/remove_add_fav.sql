CREATE OR REPLACE FUNCTION toggle_favorite(fav_id INT, uid UUID, item_id UUID)
RETURNS TABLE (status TEXT) AS $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM favorite WHERE favorite.id = fav_id
    ) THEN
        -- Remove from favorites if the id exists
DELETE FROM favorite WHERE id = fav_id;
RETURN QUERY SELECT 'removed' AS status;
ELSE
        -- Add to favorites if it doesn't exist
        INSERT INTO favorite (uid, item_id) VALUES (uid, item_id);
RETURN QUERY SELECT 'added' AS status;
END IF;
END;
$$ LANGUAGE plpgsql;
