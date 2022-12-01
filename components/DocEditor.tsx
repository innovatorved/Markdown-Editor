import { useState } from "react";

import { EditorContentChanged, DocEditor } from "../interface/interfaces";
import { downloadHTMLFile } from "../helpers/download";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import Editor from "./Editor";
import Viewer from "./Viewer";

export default function App(props: DocEditor) {
  const { title, onChange, setTitle, content } = props;
  const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");

  const onEditorContentChanged = (content: EditorContentChanged) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
    if (onChange) {
      onChange({
        title: title,
        content: content.markdown,
      });
    }
  };

  const ChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
          <div
            className="download_icon"
            onClick={() => downloadHTMLFile(title, editorHtmlValue)}
          >
            <FileDownloadOutlinedIcon />
          </div>
        </div>
      </div>
      <Editor content={content} onChange={onEditorContentChanged} />
    </div>
  );
}
