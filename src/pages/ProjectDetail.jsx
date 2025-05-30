import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <img src={project.thumbnail} alt={project.title} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.links.demo} target="_blank">Live Demo</a>
      <a href={project.links.code} target="_blank">Source Code</a>
    </div>
  );
};

export default ProjectDetail;
