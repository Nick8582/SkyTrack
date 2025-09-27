import { Outlet } from 'react-router'

import { ThemeToggle } from '@/components/ThemeToggle'

export function Layout() {
  return (
    <div className="relative p-7">
      <ThemeToggle />
      <Outlet />
    </div>
  )
}
