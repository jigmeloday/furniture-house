import Login from '@/app/(auth)/login/components/login';

function Page() {
    return(
        <div className="space-y-[24px]">
            <div className="space-y-[2px]">
            <h3>Sign In</h3>
            <p className="text-typo-dark/70 text-[12px] font-semibold ml-1">Welcome Back!</p>
            </div>
            <Login />
        </div>
    );
}

export default Page;