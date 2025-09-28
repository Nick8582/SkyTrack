import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/theme/useTheme'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div>
			<button
				onClick={toggleTheme}
				className='bg-card flex items-center justify-center rounded-full p-2 transition-colors hover:bg-neutral-700 sm:p-1'
			>
				{theme === 'dark' ? <Sun size={23} /> : <Moon size={23} />}
			</button>
		</div>
	)
}
