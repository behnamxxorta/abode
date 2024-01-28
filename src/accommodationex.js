import React from "react";

function ApartmentListing() {
  return (
    <form className="justify-center items-stretch shadow-2xl flex max-w-[480px] w-full flex-col mx-auto py-5 rounded-[32px]">
      <header className="flex w-full flex-col items-stretch text-sm px-5">
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee92d46e42f69bb134368391e03d46bfff5f4f428817dd70345b96b5ce7500b4?apiKey=dacf4dc538274d118514255101e4e2b4&"className="aspect-[0.93] object-contain object-center w-full" />
        <h1 className="text-neutral-800 text-2xl mt-1">Durocher Apartment</h1>
        <div className="flex w-full items-stretch justify-between gap-5 mt-3.5">
          <div className="flex items-stretch gap-1 py-px self-start">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/02a1f3dfc34d06a68ec8e9c4bf81c7b79c21f41a4296cfcbd1f1fedc6f4d0d8c?apiKey=dacf4dc538274d118514255101e4e2b4&" className="aspect-square object-contain object-center w-4 shrink-0 self-start" />
            <div className="text-zinc-600 text-xs grow whitespace-nowrap">4.0 (459 Owner Reviews)</div>
          </div>
          <a href="#" className="text-red-700 text-sm">Show map</a>
        </div>
        <div className="text-gray-700 mt-5">
          3433 Rue Durocher, Montreal, Quebec <br />3 Beds 1 Bath Apartment{" "}
        </div>
        <a href="#" className="text-red-700 underline self-center whitespace-nowrap mt-9">Show Photos and info</a>
      </header>
      <div className="flex w-full flex-col items-stretch mt-12 px-5">
        <h2 className="text-neutral-800 text-lg font-semibold">Facilities</h2>
        <div className="items-stretch flex gap-3.5 mt-5 pr-20">
          <div className="justify-center items-stretch flex flex-col px-5 py-3 rounded-2xl flex-1">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/beee2791000d80b55ae62fdc77bc398b0accfcd128c53591ce9918f7852f5e82?apiKey=dacf4dc538274d118514255101e4e2b4&" className="aspect-[1.22] object-contain object-center w-[39px] self-center" />
            <div className="text-zinc-400 text-xs whitespace-nowrap mt-1.5">1 Heater</div>
          </div>
          <div className="justify-center items-stretch flex flex-col w-[74px] h-[74px] px-5 rounded-2xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54e2c3fc71fb1a6cb696a92190ed42619be9a9f9f731e967e47b9c9592c5d0fe?apiKey=dacf4dc538274d118514255101e4e2b4&" className="aspect-square object-contain object-center w-full self-center" />
            <div className="text-stone-300 text-xs whitespace-nowrap mt-1.5">1 Tub</div>
          </div>
          <div className="justify-center items-stretch flex flex-col w-[74px] h-[74px] px-5 rounded-2xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff84c2762a52e3373126c841ec2d78c0619755843911aeb2ed8dc3eec3b3c6d?apiKey=dacf4dc538274d118514255101e4e2b4&" className="aspect-square object-contain object-center w-full self-center" />
            <div className="text-stone-300 text-xs mt-1.5">Pool</div>
          </div>
        </div>
        <div className="flex w-full items-stretch justify-between gap-5 mt-7">
          <div className="flex basis-0 flex-col items-stretch whitespace-nowrap my-auto">
            <div className="text-neutral-800 text-xs">Price</div>
            <div className="text-black text-2xl font-bold mt-2.5">$899</div>
          </div>
          <div className="justify-between items-stretch shadow-lg bg-red-700 flex gap-2.5 px-8 py-4 rounded-2xl">
            <div className="text-white text-base grow whitespace-nowrap self-start">Talk to the owner</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef86df288b2534a15d92d3818d913f90acf547ca579b4773a100c9db6718582?apiKey=dacf4dc538274d118514255101e4e2b4&" className="aspect-square object-contain object-center w-6 shrink-0" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ApartmentListing;
