import EditRecipe from "./edit-recipe";
import DeleteRecipe from "./delete-recipe";
import { Button } from "@heroui/react";
import EyeIcon from "@/components/icons/eye-icon";
import Link from "next/link";

export const ItemRecipe = ({ recipe }) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row items-center space-x-3">
        <div className="grow line-clamp-2">{recipe.recipe_name}</div>
        <div className="flex space-x-2">
          <Link href={`/${recipe._id}`}>
            <Button isIconOnly variant="flat">
              <EyeIcon />
            </Button>
          </Link>
          <EditRecipe recipeDetail={recipe} />
          <DeleteRecipe id={recipe._id} recipeTitle={recipe.recipe_name} />
        </div>
      </div>
      <div className="bg-gray-200 h-divider mt-4 w-full"></div>
    </div>
  );
};

export default ItemRecipe;
