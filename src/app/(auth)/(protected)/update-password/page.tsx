import UpatePassword from './components/update-password';

function Page() {
  return (
    <div className="space-y-[24px]">
      <div className="space-y-[2px]">
        <h3>Upate Password</h3>
        <p className="text-typo-dark/70 text-[12px] ml-1">
          Enter your new password to get a reset.
        </p>
      </div>
      <UpatePassword />
    </div>
  );
}

export default Page;
