import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Loader from "../components/Loader";

import { DocEditorOnChange } from "../interface/interfaces";

const DocEditor = dynamic(() => import("../components/DocEditor"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function Demo() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("title")) {
      let res = localStorage.getItem("title") || "United12";
      setTitle(res);
    }
    if (localStorage.getItem("content")) {
      let res = localStorage.getItem("content") || "";
      setContent(res);
    }
  }, [1]);

  useEffect(() => {
    if (content === "" || content === " ") return;
    localStorage.setItem("content", content);
  }, [content]);

  useEffect(() => {
    if (title !== "") {
      localStorage.setItem("title", title);
    }
  }, [title]);

  const onChange = (data: DocEditorOnChange) => {
    setContent(data.content);
  };

  return (
    <div>
      <Head>
        <title>Document Editor Demo</title>
        <meta name="description" content="Editor is Open" />
      </Head>
      <div></div>
      <div className="editor">
        <DocEditor
          title={title}
          setTitle={setTitle}
          content={content}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
