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
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c71e853e543f95d9717bb592dbfaf35786db6f482c54bb5fb7e41db4dd0c277?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.59] object-contain object-center w-full mt-4"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68e8cd94d54282846c0b7b32f8dbfcff0414dbf9ad39dbda430a9fae5f4f47d2?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.75] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8a1c2bc34faf8dcc22455e8ac56ad4e8b3fcb144d8b79e6ceec20401f426e65?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[1.85] object-contain object-center w-full mt-12"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d616f4e355219307b425577fb2c5ded8fd5654fd62720854066d8cba7f3a6ae4?apiKey=dacf4dc538274d118514255101e4e2b4&"
        className="aspect-[50] object-contain object-center w-[328px] self-center mt-14"
      />
    </div>
  );
}


