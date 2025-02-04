"use client";

import { TiptapToolbar } from "./tiptap-toolbar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

export const TipTap = ({ content, onChange, className }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    immediatelyRender: false,
    content: content || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose flex flex-col prose px-4 py-3 pt-4 justify-start border-2 border-gray-200 focus:border-black hover:border-gray-400 items-start w-full rounded-b-xl outline-none max-h-96 overflow-scroll",
      },
    },
  });
  return (
    <div className={`w-full ${className}`}>
      <TiptapToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
