import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-11 rounded-[32px]">
      <div className="flex w-full flex-col items-stretch pl-5">
        <div className="flex w-full items-stretch justify-between gap-5 pr-3.5">
          <div className="flex flex-col items-stretch text-black whitespace-nowrap">
            <div className="text-sm">Explore</div>
            <div className="text-2xl mt-1.5">Montreal</div>
          </div>
          <div className="justify-center items-stretch flex gap-1.5 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e217a1a7647a6413aae025d5db2749847431d13b35c757a456065b81ce3e1c?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-4 shrink-0"
            />
            <div className="text-zinc-600 text-xs">Montreal, QC</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ec0cab6da39dd2fd91ac63f7bee480027a71ae110882cbdbc130c8cd493676?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-4 shrink-0"
            />
          </div>
        </div>
        <div className="bg-sky-50 flex w-full flex-col justify-center mt-10 pl-4 pr-16 py-4 rounded-3xl items-start">
          <div className="items-stretch flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9620114089b080704585444c7d1f2611ae24dcd52b8a84debdf58df43147fe45?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-5 shrink-0"
            />
            <div className="text-zinc-400 text-sm grow whitespace-nowrap">
              Find things to do
            </div>
          </div>
        </div>
        <div className="justify-between items-center flex gap-5 mt-8">
          <div className="text-red-700 text-sm items-stretch bg-red-700 bg-opacity-10 self-stretch grow justify-center px-4 py-3 rounded-[33px]">
            Location
          </div>
          <div className="text-zinc-400 text-sm self-stretch my-auto">
            Hotels
          </div>
          <div className="text-zinc-400 text-sm self-stretch my-auto">Food</div>
          <div className="text-zinc-400 text-sm self-stretch my-auto">
            Adventure
          </div>
          <div className="text-zinc-400 text-sm self-stretch my-auto">
            Adventure
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-9">
          <div className="text-neutral-800 text-lg font-semibold">Popular </div>
          <div className="text-red-700 text-xs mt-1.5 self-start">See all</div>
        </div>
      </div>
      <div className="flex-col overflow-hidden relative flex aspect-[0.79] w-full mt-9 pl-4 pr-20 items-start">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdb995dd3c65325dcb7b0f9696cb2d6e93bd516f09fa6b4d748d0325288dd1?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="absolute object-cover object-center inset-0 size-full"
        />
        <div className="flex-col relative overflow-hidden flex aspect-[0.74] justify-between gap-5 pt-12 pb-2.5 px-3 items-end">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e1852b7f5c2247c597eabc160128020a41bd361d9232a38567737551a6bd77?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="absolute object-cover object-center inset-0 size-full"
          />
          <div className="relative items-stretch flex flex-col mt-28 rounded-xl">
            <div className="text-white text-xs whitespace-nowrap justify-center items-stretch bg-neutral-600 pl-3 py-1 rounded-[59px]">
              Coeur des Alpes
            </div>
            <div className="justify-between items-stretch bg-neutral-600 flex gap-1 mt-1.5 px-3.5 py-0.5 rounded-[59px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46eecbc92d3c5a025b10675472b31b1f96c623ccbb6191f000f198fd78e909da?apiKey=dacf4dc538274d118514255101e4e2b4&"
                className="aspect-[1.06] object-contain object-center w-4 shrink-0"
              />
              <div className="text-white text-xs grow">4.5</div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de449eac315c46c37192e5f0a71623c7edc902f37abc983dac86cdd2218894c0?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[0.91] object-contain object-center w-5 fill-sky-50 shrink-0 mt-32"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af4bd67bb5d504c654f8337218917e523ac8576565682655dfbf858a7fb082c1?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[9.09] object-contain object-center w-[79px] fill-[linear-gradient(271deg,#176FF2_1.64%,#196EEE_102.71%)] ml-6 mt-64"
        />
      </div>
    </div>
  );
}
