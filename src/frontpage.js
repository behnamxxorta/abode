import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-gray-100 flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-8 rounded-[32px]">
      <div className="bg-white flex w-full flex-col items-stretch pl-8 pr-3.5 pt-3 pb-11">
        <div className="text-black text-xs whitespace-nowrap self-end">
          skip &gt;
        </div>
        <div className="text-black text-center text-6xl leading-[75.52px] tracking-tighter self-center mt-9">
          <span className="text-red-700">A</span>
          <span className="text-black">BODE</span>
        </div>
        <div className="text-black text-center text-sm leading-4 uppercase self-center mt-3">
          join the abode community
        </div>
        <div className="text-black text-center text-xs leading-4 self-center w-[301px] mt-48">
          Sign up to start your hunt for <br />
          the perfect place, at the perfect price.
        </div>
        <div className="text-red-700 text-xs underline whitespace-nowrap justify-center items-stretch bg-white mt-3.5 px-14 py-4 rounded-2xl">
          Already have an account?{" "}
          <span className="underline text-red-700">Log in</span>
        </div>
        <div className="justify-between items-stretch rounded border shadow-lg flex gap-2.5 mt-20 px-20 py-2 border-solid border-black border-opacity-10">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/969a195ef55b5063d0e03a93b4486c0f3f22fe9a20d6306e14548c888b653beb?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-square object-contain object-center w-3.5 shrink-0"
          />
          <div className="text-zinc-500 text-xs whitespace-nowrap justify-center items-stretch grow py-px self-start">
            Sign up with Gmail
          </div>
        </div>
        <div className="justify-between items-stretch rounded border shadow-lg flex gap-2.5 mt-3.5 px-20 py-2 border-solid border-black border-opacity-10">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8157c6792707c8c07b2e1c1029423b1b005b5f7824cfd20e9c1eccd2383beaa2?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-square object-contain object-center w-3.5 shrink-0"
          />
          <div className="text-zinc-500 text-xs grow whitespace-nowrap">
            Sign up with Facebook
          </div>
        </div>
        <div className="justify-between items-stretch rounded border shadow-lg flex gap-2.5 mt-3 px-20 py-2 border-solid border-black border-opacity-10">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b958145bd7526996531386249920ae202c6f4d792c542a905e971d0c217e405b?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-square object-contain object-center w-3.5 shrink-0"
          />
          <div className="text-zinc-500 text-xs grow whitespace-nowrap">
            Sign up with Email
          </div>
        </div>
        <div className="text-black text-center text-xs leading-3 self-center mt-3.5">
          By signing up, you agree to ABODE’ s Privacy Policy
          <br />
          and Terms of Service.
        </div>
        <div className="self-center flex items-stretch justify-between gap-5 text-5xl text-black whitespace-nowrap tracking-[15.36px] mt-24">
          <div className="">.</div>
          <div className="">.</div>
          <div className="">.</div>
        </div>
      </div>
    </div>
  );
}
