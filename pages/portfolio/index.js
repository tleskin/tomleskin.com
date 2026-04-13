import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import { portfolioItems } from '../../data/projects';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="page page-container">
        <h1>Portfolio</h1>
        <div className="project-grid">
          {portfolioItems.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
