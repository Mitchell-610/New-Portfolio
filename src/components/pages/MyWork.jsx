import { Link } from "react-router-dom";
import { projects } from "../../utils/projectData";
import Footer from '../cards/Footer'
import './MyWork.css';

export default function MyWork() {
  return (
    <div>
    <div className="myWork container">
      <h1 className="text-center pb-3">My work section.</h1>
      <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="work col-md-6 col-sm-12 border text-center pt-3 pb-4">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="row justify-content-center">
            <Link to={`/application/${project.id}`} className="col-4">
            <img
              src={project.img}
              alt={project.title}
            />
          </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
