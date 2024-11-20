import { createClient } from '@/lib/supbase/server';
import Footer from './footer';

async function  FooterWrapper() {
    const {data: { user }} = await (await createClient()).auth.getUser();

    return (
        <Footer user={user}/>
    );
}

export default FooterWrapper;