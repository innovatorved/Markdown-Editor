import { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import BlotFormatter from "quill-blot-formatter";

const Emoji = require("quill-emoji");

import { markdownToHtml, htmlToMarkdown } from "../lib/Parser";
import { EditorProps } from "../interface/interfaces";

import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";

Quill.register("modules/emoji", Emoji);
Quill.register("modules/blotFormatter", BlotFormatter);

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video"],
  ["emoji"],
  ["clean"],
];

export default function Editor(props: EditorProps) {
  const [value, setValue] = useState<string>(markdownToHtml(props.value || ""));
  const reactQuillRef = useRef<ReactQuill>(null);

  const onChange = (content: string) => {
    setValue(content);

    if (props.onChange) {
      props.onChange({
        html: content,
        markdown: htmlToMarkdown(content),
      });
    }
  };

  return (
    <ReactQuill
      ref={reactQuillRef}
      theme="snow"
      modules={{
        toolbar: {
          container: TOOLBAR_OPTIONS,
        },
        clipboard: {
          matchVisual: false,
        },
        blotFormatter: {},
        "emoji-toolbar": true,
        "emoji-shortname": true,
      }}
      value={value}
      onChange={onChange}
      tabIndex={4}
    />
  );
}
