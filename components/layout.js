import Navbar from "./navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container py-4">{children}</main>
  </>
);

export default Layout;
