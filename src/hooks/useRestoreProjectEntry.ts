import { useLayoutEffect } from 'react'
import { restoreProjectEntry } from '../lib/router'

export function useRestoreProjectEntry() {
  useLayoutEffect(() => {
    restoreProjectEntry()
  }, [])
}
