import { useState } from "react";
import dynamic from "next/dynamic";

import { EditorContentChanged } from "../interface/interfaces";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});
const Viewer = dynamic(() => import("./Viewer"), {
  ssr: false,
});

export default function App() {
  const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");

  const onEditorContentChanged = (content: EditorContentChanged) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
  };

  return (
    <div className="app">
      <Editor value={""} onChange={onEditorContentChanged} />
    </div>
  );
}
