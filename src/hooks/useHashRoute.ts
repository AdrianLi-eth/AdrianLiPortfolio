import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getRoute,
  navigateTo,
  saveReturnProject,
  scrollWindowToTop,
  type NavigateOptions,
  type Route,
} from '../lib/router'

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(getRoute)
  const routeRef = useRef(route)

  useEffect(() => {
    routeRef.current = route
  }, [route])

  useEffect(() => {
    const sync = () => {
      const next = getRoute()
      const prev = routeRef.current

      if (prev.page === 'home' && next.page === 'project') {
        saveReturnProject(next.slug)
      }

      if (next.page === 'project') {
        scrollWindowToTop()
      }

      routeRef.current = next
      setRoute(next)
    }

    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const navigate = useCallback((next: Route, options?: NavigateOptions) => {
    navigateTo(next, options)
    routeRef.current = next
    setRoute(next)

    if (next.page === 'project') {
      scrollWindowToTop()
    }
  }, [])

  return { route, navigate }
}
