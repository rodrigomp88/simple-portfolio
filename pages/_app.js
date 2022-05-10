import "bootswatch/dist/cosmo/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

import "../global.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
