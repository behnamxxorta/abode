import React from 'react';

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
        type="text"
        id="email"
        className="justify-center items-center rounded shadow-lg flex shrink-0 h-[30px] flex-col border-2 border-solid border-black border-opacity-10"
        aria-label="Email"
        aria-role="input"
      />
      <label htmlFor="password" className="leading-[113.4%] mt-10">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col border-solid border-black border-opacity-10"
        aria-label="Password"
        aria-role="input"
      />
      <label htmlFor="remember-me" className="leading-[113.4%] whitespace-nowrap ml-9 mt-4 self-start">
        Remember me
      </label>
      <a
        href="#"
        className="text-white text-xs whitespace-nowrap justify-center items-center rounded border shadow-lg mt-16 px-16 py-3 border-solid border-black border-opacity-10"
        aria-label="Sign In"
        aria-role="button"
      >
        Sign In
      </a>
      <div className="text-red-600 leading-[113.4%] underline whitespace-nowrap mt-3">
        Forgot your password?{' '}
        <a href="#" className="underline text-red-600" aria-label="Reset your password" aria-role="link">
          Reset your password
        </a>
      </div>
      <div className="justify-between items-stretch bg-white flex gap-2.5 text-xs whitespace-nowrap mt-20 px-8 py-4 rounded-2xl">
        <div className="text-black grow">Don't have an account?</div>
        <a href="#" className="text-red-600 underline grow" aria-label="Register now" aria-role="link">
          Register now
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
