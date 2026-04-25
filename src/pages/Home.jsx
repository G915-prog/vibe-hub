import { useEffect, useState } from 'react'
import { PROJECTS } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function useProjectStatuses(projects) {
  const [statuses, setStatuses] = useState(
    () => Object.fromEntries(projects.map((p) => [p.id, 'checking']))
  )

  useEffect(() => {
    projects.forEach((project) => {
      fetch(project.url, { method: 'HEAD', mode: 'no-cors' })
        .then(() => setStatuses((s) => ({ ...s, [project.id]: 'online' })))
        .catch(() => setStatuses((s) => ({ ...s, [project.id]: 'offline' })))
    })
  }, [])

  return statuses
}

export default function Home() {
  const statuses = useProjectStatuses(PROJECTS)

  return (
    <main className="container">
      <header className="hero">
        <h1>Projects</h1>
        <p>Built in VIBE:ADVANCED</p>
      </header>

      <div className="cards-grid">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            status={statuses[project.id]}
          />
        ))}
      </div>
    </main>
  )
}
