import { match } from 'path-to-regexp'
import { Link, useLocation } from 'react-router'

import { Heart } from '@/components/animate-ui/icons/heart'
import { HeaderMenuData } from '@/components/header/header-menu.data'
import { HeaderMenuItem } from '@/components/header/HeaderMenuItem'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
	const location = useLocation()

	return (
		<header className='bg-card p-mini-element sm:px-mini-element absolute top-7 left-1/2 flex w-2/5 -translate-x-1/2 items-center justify-between rounded-xl px-5 sm:rounded-sm xl:relative xl:top-0 xl:mb-5 xl:w-full'>
			<div className='flex items-center gap-4 sm:gap-2'>
				<img
					src='/logo.svg'
					className='h-12 w-12 sm:h-10 sm:w-10'
					alt='Sky Track Logo'
				/>
				<nav>
					<ul className='flex items-center gap-5 sm:gap-3'>
						{HeaderMenuData.map(item => (
							<HeaderMenuItem
								key={item.href}
								item={item}
								isActive={!!match(item.href)(location.pathname)}
							/>
						))}
					</ul>
				</nav>
			</div>
			<div className='flex items-center gap-3 sm:gap-2'>
				<Link
					to={'/favorites'}
					className='bg-card flex items-center justify-center rounded-full p-2 transition-colors hover:bg-neutral-700 sm:p-1'
				>
					<Heart animateOnHover size={23} />
				</Link>
				<ThemeToggle />
			</div>
		</header>
	)
}
