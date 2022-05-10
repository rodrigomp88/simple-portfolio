import Link from "next/link";

import Layout from "../components/layout";

const error404 = () => (
  <Layout footer={false}>
    <div className="text-center">
      <h1 className="text-danger">Error 404</h1>
      <p>
        Esta pagina no existe. Por favor regresa al{" "}
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default error404;
