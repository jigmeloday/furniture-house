'use client';
import { signOut } from '@/lib/server-actions/auth';
import { Button } from '@/components/ui/button';

function Test({ user }){
    return(
       <div>
           {user.id}
           <Button onClick={() => signOut()}>Sign Out</Button>
       </div>
    )
}

export default Test
