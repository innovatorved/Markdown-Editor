import Head from "next/head";

import useRedirectAfterSomeSeconds from "../hooks/redirect";

export default function Home() {
  const { secondsRemaining } = useRedirectAfterSomeSeconds("/demo", 5);
  return (
    <div>
      <Head>
        <title>Document Editor</title>
        <meta property="og:title" content="Document Editor" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main id="background">
        <div className="maintenance">
          <div id="content">
            <div className="title">
              <span>Markdown Editor</span>
            </div>
            <p>COMING SOON!</p>
            <section>
              <p>
                <br />
                Redirecting to <code>/demo</code>
                <br />
                <br />
              </p>
              <ul id="countdown">
                <li>
                  <span className="seconds timenumbers yellow-text">
                    {`${secondsRemaining}`}
                  </span>
                  <p className="timeRefSeconds timedescription">seconds</p>
                </li>
              </ul>
            </section>
            <p>
              OUR SITE IS CURRENTLY ON MAINTANENCE.
              <br />
              <br />
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
