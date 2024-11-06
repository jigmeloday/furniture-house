'use client';
import { signOut } from '@/lib/server-actions/auth';
import { Button } from '@/components/ui/button';
import { User } from '@/lib/schema';

function Test({ user }: { user: User }){
    return(
       <div>
           {user.id}
           <Button onClick={() => signOut()}>Sign Out</Button>
       </div>
    );
}

export default Test;
