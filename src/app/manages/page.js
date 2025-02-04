import getRecipeAction from "@/actions/recipe-action";
import { Header } from "@/components/header";
import ItemRecipe from "./_components/item-recipe";
import { AddRecipe } from "@/components/add-recipe";

export default async function Page() {
  const recipes = await getRecipeAction();
  return (
    <>
      <Header title="Recipe Content Management" />
      <main className="flex flex-col w-2/3 mx-auto pt-14">
        <AddRecipe />
        <div className="space-y-3">
          {recipes.map((e) => (
            <ItemRecipe key={e._id} recipe={e} />
          ))}
        </div>
      </main>
    </>
  );
}
