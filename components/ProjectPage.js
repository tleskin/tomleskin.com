export default function ProjectPage({ project }) {
  return (
    <section className="project-page">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-copy">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="button">
            Visit Live Project
          </a>
        )}
      </div>
    </section>
  );
}
