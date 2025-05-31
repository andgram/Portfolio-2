import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="text-center text-red-500 mt-10">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <img
  src={project.thumbnail}
  alt={project.title}
  className="w-full rounded-md mb-6 object-contain"
/>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>
      
      <div className="flex gap-4">
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Live Demo
        </a>
        <a
          href={project.links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-100 transition"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
