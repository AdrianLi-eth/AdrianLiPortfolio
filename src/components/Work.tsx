import { ArrowUpRight } from 'lucide-react'
import { useRouter } from '../context/RouterContext'
import { projects, type Project } from '../data/content'
import { useRevealSection } from '../hooks/useReveal'
import { projectEntryId } from '../lib/router'

function ProjectCard({ project }: { project: Project }) {
  const { navigate } = useRouter()
  const hasCaseStudy = project.slug !== null

  const handleOpen = (event: React.MouseEvent) => {
    if (!project.slug) return
    event.preventDefault()
    navigate({ page: 'project', slug: project.slug })
  }

  const cardClass =
    'group hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-transparent transition-colors duration-300 hover:border-line-strong'

  const inner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="image-zoom h-full w-full object-cover"
            loading={project.index === '01' ? 'eager' : 'lazy'}
            fetchPriority={project.index === '01' ? 'high' : undefined}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-ink-faint">
            {project.tag}
          </div>
        )}
      </div>

      <div className="flex flex-1 items-start justify-between gap-4 p-5 sm:p-6">
        <div className="min-w-0 space-y-2">
          <p className="text-sm text-ink-dim">
            {project.index} · {project.year}
          </p>
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
            {project.title}
          </h3>
        </div>
        {hasCaseStudy ? (
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-ink-faint transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
            aria-hidden
          />
        ) : null}
      </div>
    </>
  )

  if (hasCaseStudy) {
    return (
      <a
        id={projectEntryId(project.slug!)}
        href={`#/project/${project.slug}`}
        onClick={handleOpen}
        className={cardClass}
      >
        {inner}
      </a>
    )
  }

  return <div className={cardClass}>{inner}</div>
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
      className="scroll-mt-24 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal
          className="mb-16 flex flex-wrap items-end justify-between gap-3 sm:mb-20"
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Selected Work
          </h2>
          <span className="text-sm tabular-nums text-ink-dim">
            {String(projectCount).padStart(2, '0')}
          </span>
        </div>

        <div
          data-reveal-stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <div
              key={project.slug ?? project.index}
              data-reveal-item
              style={{ '--reveal-i': i } as React.CSSProperties}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
