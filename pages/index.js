import Layout from "../components/layout";
import { skills, experiences } from "../profile";

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
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
              <a href="rodrigo">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
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
        <div className="card bg-light">
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
  </Layout>
);

export default Index;
