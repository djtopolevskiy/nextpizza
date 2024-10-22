import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Title } from './title'

interface Props {
	imageUrl: string
	name: string
	price: number
	// ingredientsinform: String[]
	loading?: boolean
	onSubmit?: VoidFunction
	className?: string
}

/**
 * Форма выбора ПРОДУКТА
 */
export const ChooseProductForm: React.FC<Props> = ({
	name,
	imageUrl,
	price,
	// ingredientsinform,
	onSubmit,
	className,
	loading,
}) => {
	const textDetails = 'В наличии в магазине'
	const totalPrice = 350
	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<Image
					src={imageUrl}
					width={400}
					height={400}
					alt={name}
					className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
				/>
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>
					{textDetails}
					{/* описание продукта */}
					{/* {ingredientsinform?.join(', ') || 'Нет ингредиентов'} */}
				</p>

				<Button
					loading={loading}
					// onClick={() => onSubmit?.()}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {price} S
				</Button>
			</div>
		</div>
	)
}
