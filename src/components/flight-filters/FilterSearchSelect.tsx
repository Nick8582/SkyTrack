import { useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'

interface Props {
	value: string | null
	onChange: (value: string | null) => void
	data: string[]
	entityText: string
}

export function FilterSearchSelect({
	data,
	value,
	onChange,
	entityText
}: Props) {
	const [open, setOpen] = useState(false)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='secondary'
					role='combobox'
					aria-expanded={open}
					className='w-[180px] justify-between gap-0.5'
				>
					{value
						? data.find(item => item === value)
						: `Select ${entityText}...`}
					<ChevronsUpDownIcon className='h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[180px] p-0'>
				<Command>
					<CommandInput placeholder={`Search ${entityText}...`} />
					<CommandList>
						<CommandEmpty>No {entityText} found.</CommandEmpty>
						<CommandGroup>
							{data.map(item => (
								<CommandItem
									key={item}
									value={item}
									onSelect={currentValue => {
										onChange(currentValue === value ? '' : currentValue)
										setOpen(false)
									}}
								>
									<CheckIcon
										className={cn(
											'mr-2 h-4 w-4',
											value === item ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{item}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
