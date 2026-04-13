import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link href={`/portfolio/${project.slug}`}>
        <h3>{project.title}</h3>
      </Link>
      <p>{project.description}</p>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer" className="button">
          View Project
        </a>
      ) : (
        <span className="button disabled">Current Site</span>
      )}
    </article>
  );
}
