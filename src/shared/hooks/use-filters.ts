import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useSet } from 'react-use'

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}
interface QueryFilters extends PriceProps {
	pizzaTypes: string
	sizes: string
	ingredients: string
}

export interface Filters {
	prices: PriceProps
	pizzaTypes: Set<string>
	sizes: Set<string>
	selectedIngredients: Set<string>
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void
	setPizzaTypes: (value: string) => void
	setSizes: (value: string) => void
	setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
	const router = useRouter()
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>
	// фильтр ингредиентов
	const [selectedIngredients, { toggle: toggleIngradients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(','))
	)
	// Фильтр размеров
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	)

	// Фильтр типа пицц
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has('pizzaTypes')
				? searchParams.get('pizzaTypes')?.split(',')
				: []
		)
	)

	// Фильтр стоимости
	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return {
		sizes,
		pizzaTypes,
		selectedIngredients,
		prices,
		setPrices: updatePrice,
		setPizzaTypes: togglePizzaTypes,
		setSizes: toggleSizes,
		setSelectedIngredients: toggleIngradients,
	}
}
