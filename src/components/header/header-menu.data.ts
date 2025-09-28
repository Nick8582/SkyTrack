export interface IHeaderMenuItem {
	label: string
	href: string
}

export const HeaderMenuData: IHeaderMenuItem[] = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Flights',
		href: '/flights'
	},
	{
		label: 'About',
		href: '/about'
	},
	{
		label: 'Contacts',
		href: '/contacts'
	}
]
