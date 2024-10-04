<<<<<<< HEAD
"use client"
import React from "react"
import { useIntersection } from "react-use"
import { useCategoryStore } from "../../../store/category"
import { ProductCard } from "./product-card"
import { Title } from "./title"
// import { ProductWithRelations } from '@/@types/prisma';
=======
'use client'
import React from 'react'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '../../../store/category'
import { ProductCard } from './product-card'
import { Title } from './title'
>>>>>>> 7880345b03c57e10ca2caabda59c1ad911b7a688

interface Props {
	title: string
	items: any[]
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
<<<<<<< HEAD
						price={item.price}
=======
						price={item.items.price}
>>>>>>> 7880345b03c57e10ca2caabda59c1ad911b7a688
					/>
				))}
			</div>
		</div>
	)
}
