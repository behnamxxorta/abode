import * as React from "react";

function MyComponent(props) {
  return (
    <div className="justify-center items-stretch shadow-2xl flex max-w-[480px] w-full flex-col mx-auto pt-5 px-5 rounded-[32px]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e67269e9c000533b29a60b13c71e1b30da357faf624b8088ccc347295085cc6?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[0.93] object-contain object-center w-full"
      />
      <div className="flex items-stretch justify-between gap-1.5 text-sm mt-7">
        <div className="flex flex-col items-stretch flex-1">
          <div className="text-neutral-800 text-2xl">Coeur des Alpes</div>
          <div className="flex items-stretch justify-between gap-1 mt-2.5 py-px">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a2224a2631478f8b4894ad4f085e2347adb5ad1375d07962b3286e98ce975fc?apiKey=dacf4dc538274d118514255101e4e2b4&"
              className="aspect-square object-contain object-center w-4 shrink-0 self-start"
            />
            <div className="text-zinc-600 text-xs grow shrink basis-auto">
              4.5 (355 Owner Reviews)
            </div>
          </div>
          <div className="text-gray-700 mt-5">
            1212 Pine Avenue, Montreal, Quebec
            <br />2 Beds 2 Bath Apartment
            <br />
            Studio{" "}
          </div>
          <div className="text-red-700 underline whitespace-nowrap mr-8 mt-6 self-end">
            Show Photos and info
          </div>
        </div>
        <div className="text-red-700 grow whitespace-nowrap mt-4 self-start">
          Show map
        </div>
      </div>
      <div className="flex w-full items-stretch justify-between gap-5 pr-5">
        <div className="flex flex-col items-stretch">
          <div className="text-white text-xs whitespace-nowrap justify-center items-stretch bg-black bg-opacity-40 ml-5 p-2.5 rounded-[50px] self-start">
            1 Bedroom
          </div>
          <div className="text-neutral-800 text-lg font-semibold mt-5">
            Facilities
          </div>
        </div>
        <div className="justify-center items-stretch bg-black bg-opacity-20 flex gap-2.5 mt-8 p-2.5 rounded-[50px] self-end">
          <div className="text-white text-xs">-Select One-</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fccd5b601ffcd05db2ff7a8b68be41c058fb25855a65cd2ee0f98a74b49fdd2?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[2] object-contain object-center w-1.5 stroke-[1px] stroke-black shrink-0 my-auto"
          />
        </div>
      </div>
      <div className="items-stretch flex gap-3.5 mt-5">
        <div className="justify-center items-stretch flex flex-col px-5 py-3 rounded-2xl flex-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52b1b7bb31aca3119fd5bbce1bc73fc38ad153aa593d4f11f93f3323f59ef679?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[1.22] object-contain object-center w-[39px] self-center"
          />
          <div className="text-zinc-400 text-xs whitespace-nowrap mt-1.5">
            1 Heater
          </div>
        </div>
        <div className="justify-center items-stretch flex flex-col w-[74px] h-[74px] px-5 rounded-2xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b78d4f3073dd05a3ba96907e191c2989d1b82ab92d584b2e6a1a2ac82b8eac?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-square object-contain object-center w-full self-center"
          />
          <div className="text-stone-300 text-xs mt-1.5">Dinner</div>
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
      <div className="flex items-stretch justify-between gap-5 mt-7">
        <div className="flex basis-0 flex-col items-stretch whitespace-nowrap my-auto">
          <div className="text-neutral-800 text-xs">Price</div>
          <div className="text-black text-2xl font-bold mt-2.5">$1999</div>
        </div>
        <div className="justify-between items-stretch shadow-lg bg-red-700 flex gap-2.5 px-8 py-4 rounded-2xl">
          <div className="text-white text-base grow whitespace-nowrap self-start">
            Talk to the owner
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef86df288b2534a15d92d3818d913f90acf547ca579b4773a100c9db6718582?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-square object-contain object-center w-6 shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

