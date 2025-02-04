import { Button } from "@heroui/react";
import Image from "next/image";

export const RecipesCard = ({ title, image, createdAt }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl hover:shadow-xl cursor-pointer h-72">
      <div className="block grow">
        <div className="flex flex-col items-center">
          <Image
            src={image}
            alt={title}
            width={176}
            height={176}
            className="relative -top-12 rounded-full w-44 h-44 object-cover shadow-xl"
          ></Image>
          <div className="font-bold -mt-7 mx-4 line-clamp-2 text-center">
            {title}
          </div>
          <div className="text-xs mt-2">{`Added at ${createdAt}`}</div>
        </div>
      </div>

      <Button
        color="success"
        className="text-green-500 bg-green-100 hover:bg-green-500 hover:text-white mx-4 my-3"
      >
        View Recipe
      </Button>
    </div>
  );
};
