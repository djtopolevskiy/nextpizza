'use client'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CountButton } from './count-button'
import { Title } from './title'

interface Props {
	id: number
	name: string
	price: number | null
	count?: number
	imageUrl: string
	className?: string
	ingredients?: string[]
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	count,
	imageUrl,
	className,
	ingredients,
}) => {
	return (
		// (price = Math.floor(Math.random() * 100)),
		<div className={cn(className)}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<Image src={imageUrl} width={292} height={292} alt={name} />
				</div>
			</Link>
			<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
			<p className='text-sm text-gray-400'>
				{ingredients?.join(', ') || 'Нет ингредиентов'}
				{/* Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
				альфредо, чеснок */}
			</p>

			<div className='flex justify-between items-center mt-4'>
				<span className='text-[20px]'>
					от <b>{price} ₽</b>
				</span>

				{count ? (
					<CountButton value={count} size='lg' />
				) : (
					<Button variant='secondary'>
						<Plus className='w-4 h-4 mr-1' />
						Добавить
					</Button>
				)}
			</div>
		</div>
	)
}
