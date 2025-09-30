import { match } from 'path-to-regexp'
import { Link, useLocation } from 'react-router'

import { Heart } from '@/components/animate-ui/icons/heart'
import { HeaderMenuData } from '@/components/header/header-menu.data'
import { HeaderMenuItem } from '@/components/header/HeaderMenuItem'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'

export function Header() {
	const location = useLocation()

	return (
		<header className='bg-card sm:px-mini-element xs:flex-col xs:pb-4 absolute top-7 left-1/2 flex w-4/12 -translate-x-1/2 items-center justify-between rounded-xl p-2 px-5 sm:rounded-sm xl:relative xl:top-0 xl:mb-5 xl:w-full'>
			<div className='xs:flex-wrap xs:justify-center xs:mb-3 flex items-center gap-4 sm:gap-2'>
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
				<Button asChild variant={'secondary'} size={'icon'}>
					<Link to={'/favorites'}>
						<Heart animateOnHover animateOnTap size={23} />
					</Link>
				</Button>
				<ThemeToggle />
			</div>
		</header>
	)
}
