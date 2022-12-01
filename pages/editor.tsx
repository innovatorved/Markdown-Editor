import Head from "next/head";
import dynamic from "next/dynamic";

import Loader from "../components/Loader";

const DocEditor = dynamic(() => import("../components/DocEditor"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function editor() {
  return (
    <div>
      <Head>
        <title>Document Editor</title>
        <meta name="description" content="Editor is Open" />
      </Head>
      <div></div>
      <div className="editor">
        <DocEditor />
      </div>
    </div>
  );
}
