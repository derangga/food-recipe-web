import Link from "next/link";
import ArrowUturnLeftIcon from "./icons/arrow-uturn-left";

export const Header = ({ title, routePath = "/", children }) => {
  return (
    <header className="sticky z-50 top-0 bg-stone-100 py-4 w-full shadow-md px-14">
      <nav className="flex flex-row space-x-8 items-center">
        <Link href={routePath}>
          <div className="p-2 hover:bg-gray-200 cursor-pointer w-fit rounded-lg">
            <ArrowUturnLeftIcon />
          </div>
        </Link>
        <div className="grow font-sans text-xl font-semibold">{title}</div>
        <div>{children}</div>
      </nav>
    </header>
  );
};
