import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "./navbar";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h3>&copy; Rodrigo Pinea</h3>
            <p>2017 - {new Date().getFullYear()}</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
