import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-indigo-500 inline-block">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 max-w-prose leading-relaxed">
         I'm Andreas Gramstad, a 22-year-old front-end development student at Noroff. Currently, I work at an advertising agency in Stavanger, where I work on a lot of different design projects. With many years of experience in photo manipulation, 3D design, and animation, I have a built a strong foundation in creating visually appealing and engaging content. Recently, I've been expanding my competence to include front-end coding and web design, further broadening my horizons. I love turning ideas into beautiful, functional designs and I am always excited to tackle new challenges.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-700 mb-1">Email: <a href="mailto:agramst@gmail.com" className="text-indigo-600 hover:underline">agramst@gmail.com</a></p>
        <p className="text-gray-700">
          LinkedIn:{' '}
          <a
            href="www.linkedin.com/in/andreas-gramstad-416408253"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            yourprofile
          </a>
        </p>
      </section>
    </div>
  );
};

export default Home;
