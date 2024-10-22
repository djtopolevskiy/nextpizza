import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { usePizzaOptions } from '@/shared/hooks/use-pizza-options'
import { getPizzaDetails } from '@/shared/lib/get-pizza-details'
import { cn } from '@/shared/lib/utils'
import { Ingredient, ProductItem } from '@prisma/client'
import React from 'react'
import { Button } from '../ui/button'
import { GroupVariants } from './group-variants'
import { IngredientItem } from './ingredient-item'
import { PizzaImage } from './pizza_image'
import { Title } from './title'

interface Props {
	imageUrl: string
	name: string
	price: number
	ingredientsinform: Ingredient[]
	loading?: boolean
	onSubmit?: VoidFunction
	className?: string
	items: ProductItem[]
	onClickAddCart?: VoidFunction
}

/**
 * Форма выбора ПРОДУКТА
 */
export const ChoosePizzaForm: React.FC<Props> = ({
	name,
	imageUrl,
	ingredientsinform,
	className,
	loading,
	items,
	onClickAddCart,
}) => {
	const {
		size,
		type,
		setSize,
		setType,
		selectIngredients,
		addIngredients,
		availableSizes,
	} = usePizzaOptions(items)

	const { totalPrice, textDetails } = getPizzaDetails(
		size,
		type,
		items,
		ingredientsinform,
		selectIngredients
	)

	const handleClickAdd = () => {
		onClickAddCart?.()
	}

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<PizzaImage imageUrl={imageUrl} size={size} />
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-4 mt-5'>
					<GroupVariants
						items={availableSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>

					<GroupVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>
				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='flex flex-col-3 gap-3'>
						{ingredientsinform.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								name={ingredient.name}
								imageUrl={ingredient.imageUrl}
								price={ingredient.price}
								onClick={() => addIngredients(ingredient.id)}
								active={selectIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>
				<Button
					loading={loading}
					onClick={handleClickAdd}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {totalPrice} S
				</Button>
			</div>
		</div>
	)
}
