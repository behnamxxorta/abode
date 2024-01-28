import * as React from "react";

function MyComponent(props) {
  return (
    <div className="justify-center items-stretch shadow-2xl flex max-w-[480px] w-full flex-col mx-auto py-5 rounded-[32px]">
      <div className="flex w-full flex-col items-stretch pl-3 pr-1.5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61a07328aa7501c9f7c3cae9833aac767bbc9876147da55865a08d0a3534182c?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[0.91] object-contain object-center w-full self-center max-w-[332px]"
        />
        <div className="text-neutral-800 text-2xl whitespace-nowrap mt-1">
          Balliol Towers Apartment
        </div>
        <div className="flex items-stretch justify-between gap-4 mt-3.5">
          <div className="flex flex-col items-stretch flex-1">
            <div className="flex items-stretch justify-between gap-1 py-px">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/404d9cf305d017589054c57b8fd59f75bec60636f09ca0e661395ee70a20b5dd?apiKey=dacf4dc538274d118514255101e4e2b4&"
                className="aspect-square object-contain object-center w-4 shrink-0 self-start"
              />
              <div className="text-zinc-600 text-xs grow shrink basis-auto">
                4.8 (209 Owner Reviews)
              </div>
            </div>
            <div className="text-gray-700 text-sm mt-5">
              155 Balliol St, Toronto, ON M4S 1C8
              <br />2 Beds 1 Bath Apartment{" "}
            </div>
          </div>
          <div className="text-red-700 text-sm grow whitespace-nowrap self-start">
            Show map
          </div>
        </div>
        <div className="text-red-700 text-sm underline self-center whitespace-nowrap mt-9">
          Show Photos and info
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch mt-12 pl-3 pr-1.5">
        <div className="text-neutral-800 text-lg font-semibold">Facilities</div>
        <div className="items-stretch flex gap-3.5 mt-5 pr-20">
          <div className="justify-center items-stretch flex flex-col px-5 py-3 rounded-2xl flex-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f9e325b02eb49dd11a59f033e1980a5294780cb6b48cd65102eecdd2257d417?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-[1.22] object-contain object-center w-[39px] self-center"
            />
            <div className="text-zinc-400 text-xs whitespace-nowrap mt-1.5">
              1 Heater
            </div>
          </div>
          <div className="justify-center items-stretch flex flex-col w-[74px] h-[74px] px-5 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54e2c3fc71fb1a6cb696a92190ed42619be9a9f9f731e967e47b9c9592c5d0fe?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-full self-center"
            />
            <div className="text-stone-300 text-xs whitespace-nowrap mt-1.5">
              1 Tub
            </div>
          </div>
          <div className="justify-center items-stretch flex flex-col w-[74px] h-[74px] px-5 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff84c2762a52e3373126c841ec2d78c0619755843911aeb2ed8dc3eec3b3c6d?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-full self-center"
            />
            <div className="text-stone-300 text-xs mt-1.5">Pool</div>
          </div>
        </div>
        <div className="self-center flex items-stretch justify-between gap-5 mt-7">
          <div className="flex basis-0 flex-col items-stretch whitespace-nowrap my-auto">
            <div className="text-neutral-800 text-xs">Price</div>
            <div className="text-black text-2xl font-bold mt-2.5">$1599</div>
          </div>
          <div className="justify-between items-stretch shadow-lg bg-red-700 flex gap-2.5 px-8 py-4 rounded-2xl">
            <div className="text-white text-base grow whitespace-nowrap self-start">
              Talk to the owner
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4dacac14caf51d3eb5aecf9dd667dd1cb5eeacaed53fff8d73319bd0f66efd?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-6 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


