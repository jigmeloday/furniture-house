import Login from '@/app/(auth)/(unprotected)/login/components/login';
import Link from 'next/link';

function Page() {
  return (
    <div className="space-y-[24px]">
      <div className="space-y-[2px]">
        <h3>Sign In</h3>
        <p className="text-typo-dark/70 text-[12px] font-semibold ml-1">
          Welcome Back!
        </p>
      </div>
      <Login />
      <div className="flex justify-center mt-[16px]">
        <div className="flex justify-between w-full ">
          <div className="flex space-x-2 items-center">
            <span className="text-[12px] text-typo-dark/70">
              Don&apos;t have an account?
            </span>
            <Link
              href="/sign-up"
              className="text-primary transition duration-300 ease-in-out hover:text-primary/70 text-[14px]"
            >
              Sign up
            </Link>
          </div>
          <Link
            href="/forgot-password"
            className="text-primary transition duration-300 ease-in-out hover:text-primary/70 text-[14px]"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
