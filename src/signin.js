import * as React from "react";

function LoginForm() {
  return (
    <form className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-stretch text-xs text-black mx-auto px-8 py-11 rounded-[32px]">
      <header className="text-center text-2xl leading-7 tracking-tighter self-center">
        <span className="text-red-700">A</span>BODE
      </header>
      <header className="text-center text-2xl leading-7 self-center whitespace-nowrap mt-10">
        WELCOME BACK
      </header>
      <label htmlFor="email" className="leading-[113.4%] mt-24">
        Email
      </label>
      <input
        id="email"
        className="justify-center items-center rounded shadow-lg flex shrink-0 h-[30px] flex-col border-2 border-solid border-black border-opacity-10"
        type="text"
        aria-label="Email"
      />
      <label htmlFor="password" className="leading-[113.4%] mt-10">
        Password
      </label>
      <input
        id="password"
        className="justify-center items-center rounded border shadow-lg flex w-[301px] shrink-0 max-w-full h-[30px] flex-col border-solid border-black border-opacity-10"
        type="password"
        aria-label="Password"
      />
      <div className="flex items-stretch justify-between gap-3 mt-3">
        <div className="justify-center items-center border flex aspect-square flex-col w-[15px] h-[15px] rounded-sm border-solid border-black">
          <div className="border flex shrink-0 h-[15px] flex-col border-solid border-black" />
        </div>
        <div className="text-black text-xs leading-3 grow shrink basis-auto mt-1.5 self-start">
          Remember me
        </div>
      </div>
      <button
        type="submit"
        className="text-white text-xs whitespace-nowrap justify-center items-center rounded border shadow-lg mt-16 px-16 py-3 border-solid border-black border-opacity-10"
      >
        Sign In
      </button>
      <div className="text-red-600 leading-[113.4%] underline whitespace-nowrap mt-3">
        Forgot your password?{" "}
        <a href="#" className="underline text-red-600">
          Reset your password
        </a>
      </div>
      <div className="justify-between items-stretch bg-white flex gap-2.5 text-xs whitespace-nowrap mt-20 px-8 py-4 rounded-2xl">
        <div className="text-black grow">Don’t have an account?</div>
        <div className="text-red-600 underline grow">Register now</div>
      </div>
    </form>
  );
}
