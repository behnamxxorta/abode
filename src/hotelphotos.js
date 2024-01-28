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
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f05c0ee3152180eec092140920b6e5b78f6d4d5a5ef9f6b80bcd2ebe49d7abed?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.59] object-contain object-center w-full mt-4"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68438be2ada390240e12ea60c021505ed2e8cc04d36159bc90c1a9411bfcb3df?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.75] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a5673e90d42d39b55384391c275efb833bcd99f4cf210210c13d45631b0a4c?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.85] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4706aedb9ca11461d7848631a7bfe126147f2555d7f5409a900645e9da8445b?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[50] object-contain object-center w-[328px] self-center mt-14"
      />
    </div>
  );
}

