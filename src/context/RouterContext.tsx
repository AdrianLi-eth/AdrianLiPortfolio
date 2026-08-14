import { createContext, useContext } from 'react'
import { useHashRoute } from '../hooks/useHashRoute'
import type { NavigateOptions, Route } from '../lib/router'

interface RouterContextValue {
  route: Route
  navigate: (route: Route, options?: NavigateOptions) => void
}

const RouterContext = createContext<RouterContextValue | null>(null)

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const value = useHashRoute()
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used within RouterProvider')
  return ctx
}
