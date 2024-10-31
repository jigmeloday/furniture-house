import { createClient } from '@/lib/supbase/server';
import Header from '@/components/header/header';

async function HeaderWrapper() {
    const {data: { user }} = await (await createClient()).auth.getUser();
    return(
        <Header user={user} />
    )
}

export default HeaderWrapper;
