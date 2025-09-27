import { ThemeContext } from '@/providers/theme/theme.context'
import { useContext } from 'react'

export function useTheme() {
  return useContext(ThemeContext)
}
