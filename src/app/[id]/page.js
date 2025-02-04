import { Header } from "@/components/header";
import { API_URL } from "@/utils/contants";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;
  const recipeDetailApi = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      return await response.json();
    } catch (error) {
      console.log(`[ERROR] ${error}`);
      return {};
    }
  };

  const recipeDetail = await recipeDetailApi();
  const sanitizeDOM = DOMPurify.sanitize(recipeDetail.description);
  return (
    <>
      <Header title="Recipe Detail" />
      <main className="bg-stone-100">
        <article className="prose p-8 mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-sans">
            {recipeDetail.recipe_name}
          </h2>
          <div className="flex flex-row justify-center">
            <Image
              src={recipeDetail.recipe_pict}
              alt={recipeDetail.recipe_name}
              width={500}
              height={500}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: sanitizeDOM }}></div>
        </article>
      </main>
    </>
  );
}
