import Test from '@/app/profile/components/test';
import { createClient } from '@/lib/supbase/server';

async function Profile() {
    const {data: { user }} = await (await createClient()).auth.getUser();

    return(
       <Test user={user} />
    );
}

export default Profile;
