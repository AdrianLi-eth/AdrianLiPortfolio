export type Route =
  | { page: 'home' }
  | { page: 'project'; slug: string }

export type NavigateOptions = {
  scrollToId?: string
}

const RETURN_PROJECT_KEY = 'portfolio:return-project'

let pendingRestoreSlug: string | null = null

export function initRouter() {
  if (typeof window === 'undefined') return
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  if (getRoute().page === 'project') {
    scrollWindowToTop()
  }
}

export function getRoute(): Route {
  const hash = window.location.hash.slice(1)
  const match = hash.match(/^\/project\/([^/?#]+)/)
  if (match) return { page: 'project', slug: decodeURIComponent(match[1]) }
  return { page: 'home' }
}

export function projectEntryId(slug: string) {
  return `project-${slug}`
}

export function saveReturnProject(slug: string) {
  sessionStorage.setItem(RETURN_PROJECT_KEY, slug)
  pendingRestoreSlug = slug
}

export function peekReturnProject(): string | null {
  return pendingRestoreSlug ?? sessionStorage.getItem(RETURN_PROJECT_KEY)
}

export function clearReturnProject() {
  pendingRestoreSlug = null
  sessionStorage.removeItem(RETURN_PROJECT_KEY)
}

export function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function scrollToProjectEntry(slug: string, attempt = 0) {
  const el = document.getElementById(projectEntryId(slug))

  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    clearReturnProject()
    return
  }

  if (attempt < 80) {
    requestAnimationFrame(() => scrollToProjectEntry(slug, attempt + 1))
    return
  }

  clearReturnProject()
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function restoreProjectEntry() {
  const slug = peekReturnProject()
  if (!slug) return

  // Prevent showing the previous page's scroll offset while home mounts.
  scrollWindowToTop()
  scrollToProjectEntry(slug)
}

export function navigateTo(route: Route, options?: NavigateOptions) {
  if (route.page === 'project') {
    saveReturnProject(route.slug)
    const nextHash = `#/project/${route.slug}`
    if (window.location.hash !== nextHash) {
      window.location.hash = `/project/${route.slug}`
    }
    scrollWindowToTop()
    return
  }

  if (window.location.hash) {
    window.location.hash = ''
  }

  if (options?.scrollToId) {
    clearReturnProject()
    requestAnimationFrame(() => {
      document.getElementById(options.scrollToId!)?.scrollIntoView({ behavior: 'smooth' })
    })
  }
}
