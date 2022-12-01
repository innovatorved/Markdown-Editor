import { useState } from "react";

import { EditorContentChanged } from "../interface/interfaces";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import Editor from "./Editor";
import Viewer from "./Viewer";

export default function App() {
  const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");
  const [title, setTitle] = useState<string>("United");

  const onEditorContentChanged = (content: EditorContentChanged) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
  };

  const ChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const downloadHTMLFile = () => {
    let ele = document.createElement("a");
    const txt = `${title === "" ? `United` : title}\n\n${editorHtmlValue}\n`;
    ele.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(txt)
    );
    ele.setAttribute("download", `${title}.html`);
    ele.style.display = "none";
    document.body.appendChild(ele);
    ele.click();
    document.body.removeChild(ele);
  };

  return (
    <div className="app">
      <div className="editor_head">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            value={title}
            onChange={ChangeTitle}
            name="name"
            id="name"
            autoComplete="off"
            required={true}
          />
        </div>
        <div className="icons">
          <div className="download_icon" onClick={downloadHTMLFile}>
            <FileDownloadOutlinedIcon />
          </div>
        </div>
      </div>
      <Editor value={""} onChange={onEditorContentChanged} />
    </div>
  );
}
