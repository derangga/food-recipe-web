import getRecipeAction from "@/actions/recipe-action";
import FoodCategories from "@/components/food-categories";
import AdjustmentHorizontalIcon from "@/components/icons/adjustment-horizontal-icon";

import SearchIcon from "@/components/icons/search-icon";
import { RecipesCard } from "@/components/recipes-card";
import convertMillisToDateString from "@/utils/date-utils";
import foodCategory from "@/utils/food-category";
import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default async function Home() {
  const recipes = await getRecipeAction();

  return (
    <main className="flex flex-col pt-6 px-12">
      <div className="flex flex-row space-x-2">
        <div className="grow">
          <Input
            name="recipes"
            placeholder="Search recipes.."
            variant="bordered"
            classNames={{
              input: ["bg-white"],
              innerWrapper: "bg-white",
              inputWrapper: ["bg-white", " border-yellow-400"],
            }}
            className="w-72"
            endContent={<SearchIcon size="size-6" color="#9E9E9E" />}
          />
        </div>
        <Link href={`/manages`}>
          <Button
            variant="bordered"
            endContent={<AdjustmentHorizontalIcon />}
            className="hover:bg-orange-400 hover:border-orange-400"
          >
            Manage
          </Button>
        </Link>
      </div>
      <h2 className="font-serif font-medium text-4xl mt-8">
        Learn, Cook, & Eat your food
      </h2>
      <div className="mt-6">
        <FoodCategories categories={foodCategory} />
      </div>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-8 gap-y-20 gap-x-6">
        {recipes.map((e) => (
          <Link key={e._id} href={`/${e._id}`}>
            <RecipesCard
              title={e.recipe_name}
              image={e.recipe_pict}
              createdAt={convertMillisToDateString(e.createdAt)}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
