import Layout from "../components/layout";

const _error = ({ statusCode }) => {
  return (
    <Layout footer={false}>
      {statusCode ? (
        <div className="text-center text-danger">
          <h1>{statusCode}</h1>
          <p>No se pudo cargar tu pagina</p>
        </div>
      ) : (
        <p>No se pudo cargar esta pagina</p>
      )}
    </Layout>
  );
};

export default _error;
