import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-center mx-auto pt-12 rounded-[32px]">
      <div className="text-black text-center text-xl leading-6 underline">
        Places in Toronto
      </div>
      <div className="items-stretch border shadow-lg flex w-full max-w-[331px] flex-col mt-10 py-1 rounded-2xl border-solid border-zinc-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06cf2067fb1206451e79a016bc7d424aad4ced1e725bdc3bffecb6a3f88786fc?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[2.22] object-contain object-center w-full"
        />
        <div className="flex justify-between gap-3.5 px-5 items-start">
          <div className="items-stretch self-stretch flex flex-col pb-2 flex-1">
            <div className="text-neutral-800 text-xl whitespace-nowrap">
              Balliol Towers Apartments
            </div>
            <div className="text-black text-xs">
              155 Balliol St, Toronto, ON M4S 1C8
            </div>
          </div>
          <div className="text-black text-xs mt-2.5">4.8</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67d52dc2e9a31525f372ac7875882310ffe8297f39020ec6141b7968559dc0d9?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[1.27] object-contain object-center w-[19px] shrink-0 mt-2"
          />
        </div>
      </div>
      <div className="items-stretch border shadow-lg flex w-full max-w-[331px] flex-col mt-2.5 py-1 rounded-2xl border-solid border-zinc-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11d1e69c2d01e33cf4d49cf111487119ba4bde4bac28f4046289d4c02279cfac?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-[2.22] object-contain object-center w-full"
        />
        <div className="flex justify-between gap-4 pr-5 items-start">
          <div className="items-stretch self-stretch flex flex-col pb-2 flex-1">
            <div className="text-neutral-800 text-xl">
              Goldengate Apartments
            </div>
            <div className="text-black text-xs whitespace-nowrap">
              1790 Eglinton Ave E, Toronto, ON M4A 273
            </div>
          </div>
          <div className="text-black text-xs">4.3</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e9d894326d516095d35fe8de3f8d870eb7b42f1bdf1e1145d997afdb8030e97?apiKey=dacf4dc538274d118514255101e4e2b4&"
            className="aspect-[1.19] object-contain object-center w-[19px] shrink-0 mt-1.5"
          />
        </div>
      </div>
      <div className="justify-between items-center shadow-sm self-stretch flex w-full gap-5 mt-56 px-16 py-6 rounded-[32px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/092a65f5bbd34f29a8dcb431cefa2c06413aa559bb3042eb9ef5581059ecd9df?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full fill-white shrink-0 flex-1"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/276b3444e3dfb66a5c6c91d2836befbf150a4bd8850d766a168ddbc60f725b38?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full justify-center items-center shrink-0 flex-1 my-auto"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2b6bd2fee497a90c9a5ea5def3e8f01bf583568630c5aff6253ff8a4ee2afe?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full fill-white shrink-0 flex-1 my-auto"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba42b748708d8a0052d44417ad6e28547f05c47e08154bb5d1c1d13c9cf6a139?apiKey=dacf4dc538274d118514255101e4e2b4&"
          className="aspect-square object-contain object-center w-full justify-center items-center shrink-0 flex-1 my-auto"
        />
      </div>
    </div>
  );
}

