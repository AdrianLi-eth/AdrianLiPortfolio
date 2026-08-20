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
      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.02]">
        {isPlaceholder && (
          <div className="grid-paper absolute inset-0 opacity-10" />
        )}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading={project.index === '01' ? 'eager' : 'lazy'}
            fetchPriority={project.index === '01' ? 'high' : undefined}
          />
        )}
        {isPlaceholder && (
          <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-xs text-ink-faint">
            {project.tag}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 border-t border-line p-5 sm:p-6">
        <div className="min-w-0">
          <p className="text-sm text-ink-dim">
            {project.index} · {project.year}
          </p>
          <h3 className="mt-1.5 text-base font-semibold leading-snug text-ink sm:text-lg">
            {project.title}
          </h3>
        </div>
        {hasCaseStudy ? (
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-ink-faint transition-colors group-hover:text-ink"
            aria-hidden
          />
        ) : null}
      </div>
    </>
  )

  const className =
    'group block scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white/[0.03] transition-colors duration-300 hover:border-line-strong'

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
      className="scroll-mt-24 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal
          className="mb-16 flex flex-wrap items-end justify-between gap-3 sm:mb-20"
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Case study
          </h2>
          <span className="text-sm tabular-nums text-ink-dim">
            {String(projectCount).padStart(2, '0')}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
