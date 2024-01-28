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
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52a698601fbcffaa7b2148127fcc219a273deaae9a756b7c123bb9c0af49d887?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.59] object-contain object-center w-full mt-4"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c493ce482c07bfbbcc1aae1e284f16bffbc409f216c9e86f2d893342ba175479?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.75] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7917a75c93ff7f261389afee8241a3da662c3671bbd45a1e677496d6b5c6d2e5?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.85] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d84a3cd976b4e6cc7e4fa68c97ea1c454db08815ec4443c93f1b6ad4aa949baf?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[50] object-contain object-center w-[328px] self-center mt-14"
      />
    </div>
  );
}


