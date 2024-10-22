import { Categories } from '@/shared/components/shared/categories'
import { Container } from '@/shared/components/shared/container'
import { SortPopup } from '@/shared/components/shared/sort-popup'
import { cn } from '@/shared/lib/utils'
import { Category } from '@prisma/client'

interface Props {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='mt-5 flex items-center justify-between'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
