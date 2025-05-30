import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div>
      <section>
        <h1>My Projects</h1>
        <div className="project-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2>About Me</h2>
        <p>I’m a passionate web developer focused on building clean and functional user experiences.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">yourprofile</a></p>
      </section>
    </div>
  );
};

export default Home;
