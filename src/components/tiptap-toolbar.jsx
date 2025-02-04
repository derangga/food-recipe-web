"use client";

import ArrowUturnLeftIcon from "./icons/arrow-uturn-left";
import ArrowUturnRightIcon from "./icons/arrow-uturn-right";
import BoldIcon from "./icons/bold-icon";
import Heading2Icon from "./icons/heading-2-icon";
import ItalicIcon from "./icons/italic-icon";
import ListBulletsIcon from "./icons/list-bullets-Icon";
import NumberListIcon from "./icons/number-list-icon";
import UnderlineIcon from "./icons/underline-icon";

export const TiptapToolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="px-3 py-2 rounded-t-xl flex justify-between items-start gap-5 w-full flex-wrap border-x-2 border-t-2 border-gray-200">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={
          editor.isActive("bold")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <BoldIcon />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={
          editor.isActive("italic")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <ItalicIcon />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        className={
          editor.isActive("underline")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <UnderlineIcon />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <Heading2Icon />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={
          editor.isActive("bulletList")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <ListBulletsIcon />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={
          editor.isActive("orderedList")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <NumberListIcon />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        className={
          editor.isActive("undo")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <ArrowUturnLeftIcon />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
        className={
          editor.isActive("redo")
            ? "bg-orange-300 text-white p-2 rounded-lg"
            : "text-orange-300 p-2 hover:bg-orange-300 hover:text-white rounded-lg"
        }
      >
        <ArrowUturnRightIcon />
      </button>
    </div>
  );
};
