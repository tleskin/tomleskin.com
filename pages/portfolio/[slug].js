import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectPage from '../../components/ProjectPage';
import { getProjectBySlug, portfolioItems } from '../../data/projects';

export async function getStaticPaths() {
  return {
    paths: portfolioItems.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  return {
    props: {
      project: project || null,
    },
  };
}

export default function PortfolioProject({ project }) {
  return (
    <>
      <Navbar />
      <main className="page page-container">
        {project ? <ProjectPage project={project} /> : <p>Project not found.</p>}
      </main>
      <Footer />
    </>
  );
}
