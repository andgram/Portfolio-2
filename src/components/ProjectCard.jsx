import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <h3 className="p-4 text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
        {project.title}
      </h3>
    </Link>
  );
};

export default ProjectCard;
