import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-12 rounded-[32px]">
      <div className="flex w-full flex-col items-stretch pl-4">
        <div className="flex w-full items-stretch justify-between gap-5 pr-4">
          <div className="flex flex-col items-stretch text-black whitespace-nowrap">
            <div className="text-sm">Explore</div>
            <div className="text-2xl mt-1.5">Montreal</div>
          </div>
          <div className="justify-center items-stretch flex gap-1.5 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/191cb4e9a8019b8e8d61bdf0a10ca1d1def78c973809512b950758b5d617b063?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-4 shrink-0"
            />
            <div className="text-zinc-600 text-xs">Montreal, QC</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/792540242ce95a22b5e653ab2c447ac0c234695f7f9b493925e5d5103b7fa236?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-4 shrink-0"
            />
          </div>
        </div>
        <div className="bg-sky-50 flex w-full flex-col justify-center mt-10 pl-4 pr-16 py-4 rounded-3xl items-start">
          <div className="items-stretch flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db2c281c2a8c8e38d3d8120da52f555b7e5601ad4238ab8fcdee5363c5205827?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-5 shrink-0"
            />
            <div className="text-zinc-400 text-sm grow whitespace-nowrap">
              Find things to do
            </div>
          </div>
        </div>
        <div className="justify-between items-center flex gap-5 text-zinc-400 ml-5 mt-8 self-start">
          <div className="text-sm self-stretch grow my-auto">Location</div>
          <div className="text-sm self-stretch my-auto">Hotels</div>
          <div className="text-red-700 text-sm justify-center items-stretch bg-red-700 bg-opacity-10 self-stretch aspect-[1.2] px-3.5 py-4 rounded-[33px]">
            Food
          </div>
          <div className="text-zinc-400 text-sm self-stretch grow my-auto">
            Adventure
          </div>
        </div>
        <div className="items-stretch border shadow-lg flex w-full flex-col mt-14 py-1 rounded-2xl border-solid border-zinc-100">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec773506d17ba6584061cca928825bace5a9fd19728a87a6203dc65b97efac09?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[2.22] object-contain object-center w-full self-center max-w-[327px]"
          />
          <div className="flex items-stretch justify-between gap-5">
            <div className="items-stretch flex flex-col pb-2 flex-1">
              <div className="text-neutral-800 text-xl">Jacopo </div>
              <div className="text-black text-xs">
                436 Pl. Jacques-Cartier, Montréal, QC{" "}
              </div>
            </div>
            <div className="flex items-stretch gap-3.5 mt-2 pr-2 self-start">
              <div className="text-black text-xs my-auto">4.2</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e55227bababb0c940e8c83b23e5c87555f8095f19804133560c9da3fe64aee?apiKey=dacf4dc538274d118514255101e4e2b4&"
                className="aspect-[1.27] object-contain object-center w-[19px] shrink-0"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch border shadow-lg flex w-full flex-col py-1 rounded-2xl border-solid border-zinc-100">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/80cffc4c802634e756daab91437b59e5b410c042845eafb8fe248c02c9e67619?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[2.22] object-contain object-center w-full self-center max-w-[327px]"
          />
          <div className="flex justify-between gap-4 px-0.5 items-start">
            <div className="items-stretch self-stretch flex flex-col pb-2 flex-1">
              <div className="text-neutral-800 text-xl">Mumbai Masala</div>
              <div className="text-black text-xs">
                3673 St Laurent Blvd, Montreal, Quebec{" "}
              </div>
            </div>
            <div className="text-black text-xs">3.8</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e55227bababb0c940e8c83b23e5c87555f8095f19804133560c9da3fe64aee?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-[1.27] object-contain object-center w-[19px] shrink-0 mt-2"
            />
          </div>
        </div>
      </div>
      <div className="justify-center items-center shadow-sm flex w-full flex-col mt-3 px-5 py-0.5 rounded-[32px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cdf9413-f243-47ad-846f-736a032a38aa?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[4.76] object-contain object-center w-[331px] items-start shadow-lg"
        />
      </div>
    </div>
  );
}

