import { useState } from "react";

import { EditorContentChanged } from "../interface/interfaces";

import Editor from "./Editor";
import Viewer from "./Viewer";

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
