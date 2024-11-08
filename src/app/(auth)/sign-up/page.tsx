import SignUp from './components/sign-up';

function Page() {
  return(
    <div className="space-y-[24px]">
    <div className="space-y-[2px]">
    <h3>Sign Up</h3>
    <p className="text-typo-dark/70 text-[12px] font-semibold ml-1">Welcome to Furniture House</p>
    </div>
    <SignUp />
</div>
  );
}

export default Page;