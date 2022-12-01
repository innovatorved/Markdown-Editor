import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DocEditor = dynamic(() => import("../components/DocEditor"), {
  ssr: false,
});

export default function editor() {
  return (
    <div>
      <Head>
        <title>Document Editor</title>
        <meta name="description" content="Editor is Open" />
      </Head>
      <div className="editor">
        <Suspense fallback={`Loading...`}>
          <DocEditor />
        </Suspense>
      </div>
    </div>
  );
}
