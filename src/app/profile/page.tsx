import Test from '@/app/profile/components/test';
import { createClient } from '@/lib/supbase/server';
import { User } from '@supabase/supabase-js';

async function Profile() {
    const {data: { user }} = await (await createClient()).auth.getUser();

    return(
       <Test user={user as User} />
    );
}

export default Profile;
