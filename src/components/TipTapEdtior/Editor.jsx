import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Mention from "@tiptap/extension-mention";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import '../../assets/css/tiptap.css'

const TipTapEditor = ({ suggestion, textVal, onChange  }) => {
  const extensions = [
    StarterKit,
    Mention.configure({
      HTMLAttributes: {
        class: "text-purple-600 font-semibold",
      },
      renderLabel({ options, node }) {
        return `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`;
      },
      suggestion: suggestion,
    }),
    ListItem,
    BulletList.configure({
      HTMLAttributes: {
        class: "list-disc pl-5",
      },
      itemTypeName: "listItem",
    }),
    OrderedList,
  ];
  /**
   * Var's
   */
  return (
    <>
      <div className="bg-white p-2 border border- rounded-lg shadow-md">
        <EditorProvider
          onUpdate={onChange}
          extensions={extensions}
        ></EditorProvider>
      </div>
    </>
  );
};

export default TipTapEditor;
