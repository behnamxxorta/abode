import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-stretch text-xs mx-auto px-8 py-11 rounded-[32px]">
      <div className="text-black text-center text-2xl leading-7 tracking-tighter self-center">
        ABODE
      </div>
      <div className="text-black text-center text-sm leading-4 self-center mt-7">
        Ready to get to swiping?
      </div>
      <div className="text-black leading-[113.4%] mt-24">Email</div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col mt-2 border-solid border-black border-opacity-10" />
      <div className="text-black leading-[113.4%] whitespace-nowrap mt-8">
        Create password
      </div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col mt-1.5 border-solid border-black border-opacity-10" />
      <div className="text-black leading-3 mt-6">
        Include upper and lower case
        <br />
        Include at least one number
        <br />
        Should be at least 8 characters long
      </div>
      <div className="text-white text-xs whitespace-nowrap justify-center items-center rounded border shadow-lg mt-7 px-16 py-3 border-solid border-black border-opacity-10">
        Sign Up{" "}
      </div>
      <div className="text-black text-center leading-3 self-center mt-4">
        By signing up, you agree to ABODE’ s Privacy Policy
        <br />
        and Terms of Service.
      </div>
      <div className="text-red-700 text-xs underline whitespace-nowrap justify-center items-stretch bg-white mt-14 px-14 py-4 rounded-2xl">
        Already have an account?{" "}
        <span className="underline text-red-700">Log in</span>
      </div>
    </div>
  );
}

