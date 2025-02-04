import getRecipeAction from "@/actions/recipe-action";
import { Header } from "@/components/header";
import ItemRecipe from "./_components/item-recipe";
import { AddRecipe } from "@/components/add-recipe";
import { Alert, Button } from "@heroui/react";
import Link from "next/link";

export default async function Page() {
  const recipes = await getRecipeAction();
  return (
    <>
      <Header title="Recipe Content Management" />
      <main className="flex flex-col w-2/3 mx-auto pt-14">
        <Alert
          color="primary"
          title="Information"
          description="This app only configure the image from domain istockphoto.com"
          endContent={
            <Link href={`https://www.istockphoto.com/id`}>
              <Button color="primary" size="sm" variant="flat">
                Browse
              </Button>
            </Link>
          }
          variant="faded"
        />
        <div className="mt-6">
          <AddRecipe />
        </div>
        <div className="space-y-3">
          {recipes.map((e) => (
            <ItemRecipe key={e._id} recipe={e} />
          ))}
        </div>
      </main>
    </>
  );
}
