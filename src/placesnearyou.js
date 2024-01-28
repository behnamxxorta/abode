import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-center mx-auto pt-12 rounded-[32px]">
      <div className="text-black text-center text-xl leading-6 underline">
        Places in Montreal
      </div>
      <div className="items-stretch border shadow-lg flex w-full max-w-[331px] flex-col mt-10 py-1 rounded-2xl border-solid border-zinc-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7acaeb34133a2a894d7bf7b3ebe2ad6cf4fb957094405f1e9a48b2ac9de1a381?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[2.22] object-contain object-center w-full"
        />
        <div className="flex justify-between gap-3.5 px-5 items-start">
          <div className="items-stretch self-stretch flex flex-col pb-2 flex-1">
            <div className="text-neutral-800 text-xl">Coeur des Alpes</div>
            <div className="text-black text-xs whitespace-nowrap">
              1212 Pine Avenue, Montreal, Quebec
            </div>
          </div>
          <div className="text-black text-xs mt-2.5">4.5</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/501d4aeb2115d3d194e4b5e1f40beb76d108ae3cd6e4aaf6e169053d7030762a?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[1.27] object-contain object-center w-[19px] shrink-0 mt-2"
          />
        </div>
      </div>
      <div className="items-stretch border shadow-lg flex w-full max-w-[331px] flex-col mt-2.5 py-1 rounded-2xl border-solid border-zinc-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c52830e07aaffacb207cd01a6d526567f6c268c6fb4fc461972d8ffe1b9428b4?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[2.22] object-contain object-center w-full"
        />
        <div className="flex items-stretch justify-between gap-5">
          <div className="items-stretch flex flex-col pb-2 px-5 flex-1">
            <div className="text-neutral-800 text-xl">Durocher Apartment</div>
            <div className="text-black text-xs whitespace-nowrap">
              3433 Rue Durocher, Montreal, Quebec
            </div>
          </div>
          <div className="flex items-stretch gap-3.5 mt-1.5 px-5 self-start">
            <div className="text-black text-xs">4.0</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95663542444d29a8b50e73c041dc32bbed3d68f413c002db3d43a552653db9ce?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-[1.19] object-contain object-center w-[19px] shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="justify-between items-center shadow-sm self-stretch flex w-full gap-5 mt-56 px-16 py-6 rounded-[32px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2f3f2bdc552fae8485751f7b1d64fc917307d1f238c165f4a591b3eec4ecfb?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full fill-white shrink-0 flex-1"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7afe3c265dcbe4ff71e3e67840f58729201f911586ec560c676ad961adb917bd?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[1.11] object-contain object-center w-full shrink-0 flex-1 my-auto"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f932c6479fb95e65512ebd3b4461f3b59fb321fc3646551a2b3b938ed89285b?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full fill-white shrink-0 flex-1 my-auto"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e34bc95d3809dcc4263f5151d2ff66e913ead0533797b2b91a6568251927a8b?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full justify-center items-center shrink-0 flex-1 my-auto"
        />
      </div>
    </div>
  );
}

