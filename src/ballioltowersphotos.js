import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-6 px-5 rounded-[32px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43cfbf16dbb4ecea883e5439fee0d05ab1091931f6b6de2fec8397dc55284c02?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[0.9] object-contain object-center w-[35px] fill-sky-50"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aab63b4a9fa5aca05efa1b3cb539268b5c6584c5f716459442b7ede1a04fcd8c?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.59] object-contain object-center w-full mt-4"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf0195b90e0c3abf1571cfa034006a115041ee3738b614088825c01a40b04d?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.75] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/355b222d94b9926a394e70ccb224deb0b83df9bab807a58aefb1134db85e9e67?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.85] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02d12b87d682830d2ef200689d83c5c4793a5164db47833b1b6404da903ce849?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[50] object-contain object-center w-[328px] self-center mt-14"
      />
    </div>
  );
}

