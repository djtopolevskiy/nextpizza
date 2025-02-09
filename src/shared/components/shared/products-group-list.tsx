'use client'
import React from 'react'
import { useIntersection } from 'react-use'
import { ProductWithRelations } from '../../../../@types/prisma'
import { useCategoryStore } from '../../../../store/category'
import { ProductCard } from './product-card'
import { Title } from './title'

interface Props {
	title: string
	items: ProductWithRelations[]
	categoryId: number
	className?: string
	listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	className,
	listClassName,
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = React.useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
		rootMargin: '200px',
	})

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, setActiveCategoryId])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className='grid grid-cols-3 gap-[50px]'>
				{items.map((item, i) => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						price={
							item.items && item.items.length > 0 ? item.items[0].price : null
						}
						ingredients={item.ingredients.map(i => i.name)}
					/>
				))}
			</div>
		</div>
	)
}
