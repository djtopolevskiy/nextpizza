import { Ingredient } from '@prisma/client'
import React from 'react'
import { Api } from '../services/api-client'

export const useIngredients = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [loading, setLoading] = React.useState(true)

	// eslint-disable-next-line react-hooks/rules-of-hooks
	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		fetchIngredients()
	}, [])

	return {
		ingredients,
		loading,
	}
}
