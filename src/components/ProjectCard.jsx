export default function ProjectCard({ project, status }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{project.title}</h2>
        <span className={`status-dot ${status}`} title={status} />
      </div>

      <p className="card-desc">{project.desc}</p>

      <a
        className="card-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.url}
      </a>

      <div className="stack-tags">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <span className="built-in">{project.builtIn}</span>
    </div>
  )
}
