import { ArrowUpRight } from 'lucide-react'
import { useRouter } from '../context/RouterContext'
import { projects, type Project } from '../data/content'
import { useRevealSection } from '../hooks/useReveal'
import { projectEntryId } from '../lib/router'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { navigate } = useRouter()
  const hasCaseStudy = project.slug !== null
  const isPlaceholder = !project.image || project.image.endsWith('.svg')

  const handleOpen = (e: React.MouseEvent) => {
    if (!project.slug) return
    e.preventDefault()
    navigate({ page: 'project', slug: project.slug })
  }

  const inner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
        {isPlaceholder && (
          <>
            <div className="grid-paper absolute inset-0 opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-2" />
          </>
        )}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading={project.index === '01' ? 'eager' : 'lazy'}
            fetchPriority={project.index === '01' ? 'high' : undefined}
          />
        )}
        {isPlaceholder && (
          <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-ink-faint">
            {project.tag}
          </span>
        )}
      </div>

      <div className="relative mt-5">
        <ArrowUpRight
          size={18}
          className="absolute right-0 top-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
        />
        <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
          {project.index} — {project.year}
        </p>
        <h3 className="mt-2 text-[length:var(--text-title3)] font-bold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-1 text-[length:var(--text-body2)] text-ink-dim">
          {project.role}
        </p>
      </div>
    </>
  )

  const className =
    'group block scroll-mt-28 transition-transform duration-300 hover:-translate-y-1'

  if (hasCaseStudy) {
    return (
      <a
        id={projectEntryId(project.slug!)}
        href={`#/project/${project.slug}`}
        onClick={handleOpen}
        className={className}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

interface WorkProps {
  projectCount: number
}

export default function Work({ projectCount }: WorkProps) {
  const sectionRef = useRevealSection()

  return (
    <section
      id="work"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal
          className="mb-20 flex items-end justify-between"
        >
          <h2 className="text-3xl tracking-tight text-ink sm:text-5xl">
            Selected Work
          </h2>
          <span className="text-sm text-ink-faint">
            ({String(projectCount).padStart(2, '0')})
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
