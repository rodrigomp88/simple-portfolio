import Layout from "../components/layout";
import Error from "./_error";

const Gihub = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt={user.name} />
            <p className="my-2 lead">{user.bio}</p>
            <p className="my-2">Repositorios publicos: {user.public_repos}</p>
            <p className="my-2">Seguidores: {user.followers}</p>
            <p className="my-2">Seguidos: {user.following}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Mi pagina
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/rodrigomp88");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Gihub;
