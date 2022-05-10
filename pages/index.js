import Link from "next/link";
import Layout from "../components/layout";
import { skills, experiences, proyects } from "../profile";

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/profile-img.jpg" alt="perfil" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Rodrigo Pinea</h1>
              <h3>Desarrollador web</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis molestias esse quos enim eum asperiores a eaque rem
                debitis eligendi, necessitatibus libero aspernatur, nam animi
                quas at recusandae quo labore.
              </p>
              <Link href="/rodrigo">
                <a>Hire me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-dark text-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, porcentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${porcentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-dark text-light">
          <div className="card-body">
            <h1>Experiencia</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {proyects.map(({ name, description, image }, i) => (
              <div className="col-md-4 py-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}.png`} className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#">Ver mas...</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More proyects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
