import Link from 'next/link';
import SignUp from './components/sign-up';

function Page() {
  return (
    <div className="space-y-[24px]">
      <div className="space-y-[2px]">
        <h3>Sign Up</h3>
        <p className="text-typo-dark/70 text-[12px] font-semibold ml-1">
          Welcome to Furniture House
        </p>
      </div>
      <SignUp />
      <div className="flex justify-center mt-[16px]">
        <div className="flex items-center justify-end w-full space-x-1">
          <span className="text-[12px] text-typo-dark/70">
            Already have an account?
          </span>
          <Link
            href="/login"
            className="text-primary transition duration-300 ease-in-out hover:text-primary/70 text-[14px]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
