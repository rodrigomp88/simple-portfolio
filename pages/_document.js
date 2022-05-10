import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Mi portfolio</title>
        <meta name="description" content="Rodrigo pinea portfolio personal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
