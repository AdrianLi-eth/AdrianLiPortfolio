import { useLayoutEffect } from 'react'
import { scrollWindowToTop } from '../lib/router'

export function useScrollToTopOnMount(routeKey: string) {
  useLayoutEffect(() => {
    scrollWindowToTop()
  }, [routeKey])
}
