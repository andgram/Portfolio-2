import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="card">
      <img src={project.thumbnail} alt={project.title} />
      <h3>{project.title}</h3>
    </Link>
  );
};

export default ProjectCard;
