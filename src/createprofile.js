import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-stretch text-xs mx-auto pt-7 pb-12 px-9 rounded-[32px]">
      <div className="text-black text-center text-2xl leading-7 tracking-tighter self-center">
        ABODE
      </div>
      <div className="text-black text-center text-sm leading-4 self-center mt-7">
        Create Your Profile
      </div>
      <div className="text-black leading-[113.4%] whitespace-nowrap mt-7">
        Your Full Name
      </div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col mt-2.5 border-solid border-black border-opacity-10" />
      <div className="text-black leading-[113.4%] mt-2.5">
        University/College
      </div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col mt-1.5 border-solid border-black border-opacity-10" />
      <div className="text-black leading-[113.4%] whitespace-nowrap mt-2.5">
        Current Job
      </div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col mt-2 border-solid border-black border-opacity-10" />
      <div className="text-black leading-[113.4%] whitespace-nowrap mt-3">
        Tell something about yourself.
      </div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[220px] flex-col mt-3.5 border-solid border-black border-opacity-10" />
      <div className="text-black leading-[113.4%] whitespace-nowrap mt-5">
        Type of place your are looking for.
      </div>
      <div className="justify-center items-center rounded border shadow-lg flex shrink-0 h-[30px] flex-col mt-4 border-solid border-black border-opacity-10" />
      <div className="text-white text-sm justify-center items-center rounded border shadow-lg mt-10 px-16 py-3 border-solid border-black border-opacity-10">
        Next
      </div>
    </div>
  );
}

