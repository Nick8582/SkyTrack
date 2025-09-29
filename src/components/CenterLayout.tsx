import { Outlet } from 'react-router'

import { Header } from '@/components/header/Header'

export function CenterLayout() {
	return (
		<div className='mt-24'>
			<Header />
			<Outlet />
		</div>
	)
}
