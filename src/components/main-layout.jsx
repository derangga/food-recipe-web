import ArchiveSolidIcon from "@/components/icons/archive-solid-icon";
import GlobeIcon from "@/components/icons/globe-icon";
import HeartSolidIcon from "@/components/icons/heart-solid-icon";
import Image from "next/image";

export const MainLayout = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 h-screen">
      <aside className="hidden lg:flex lg:flex-col bg-white h-full pt-6 justify-between">
        <div className="flex flex-col items-center wra">
          <div className="font-satisfy text-3xl font-bold">Chef Library</div>
          <Image
            src={"/assets/grandma-avatar.webp"}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-yellow-500 shadow-lg mt-4"
          ></Image>
          <div className="font-serif text-xl mt-2">Grandma Webb</div>
          <div className="text-sm text-gray-600">Master Chef</div>
        </div>
        <div className="px-4 w-full space-y-3">
          <div className="flex flex-row border border-orange-300 bg-orange-300 p-3 rounded-lg items-center cursor-pointer">
            <ArchiveSolidIcon />
            <div className="font-sans text-sm ml-2">Recipes</div>
          </div>
          <div className="flex flex-row p-3 border border-gray-300 rounded-lg items-center cursor-pointer hover:border-orange-300 hover:bg-orange-300">
            <HeartSolidIcon />
            <div className="font-sans text-sm ml-2">Favorites</div>
          </div>
          <div className="flex flex-row p-3 border border-gray-300 rounded-lg items-center cursor-pointer hover:border-orange-300 hover:bg-orange-300">
            <GlobeIcon />
            <div className="font-sans text-sm ml-2">Comunity</div>
          </div>
        </div>
        <Image
          src={"/assets/cooking.webp"}
          alt="cooking image"
          height={220}
          width={220}
        ></Image>
      </aside>
      <div className="xl:col-span-5 lg:col-span-3 bg-stone-100 overflow-scroll">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
