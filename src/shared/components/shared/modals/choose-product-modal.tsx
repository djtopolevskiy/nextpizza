"use client"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/shared/components/ui/dialog"
import { cn } from "@/shared/lib/utils"
import { useCartStore } from "@/shared/store"
import { Ingredient, ProductItem } from "@prisma/client"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { useRouter } from "next/navigation"
import React from "react"
import toast from "react-hot-toast"
import { ProductWithRelations } from "../../../../../@types/prisma"
import { ChoosePizzaForm } from "../choose-pizza-form"
import { ChooseProductForm } from "../choose-product-form"

interface Props {
	product: ProductWithRelations
	productItem: ProductItem
	ingredients: Ingredient[]
	className?: string
	onOpenChange?: () => void
}

export const ChooseProductModal: React.FC<Props> = ({
	productItem,
	product,
	ingredients,
	className,
}) => {
	const router = useRouter()
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.pizzaType)
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading,
	])

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id

			await addCartItem({
				productItemId: itemId,
				ingredients,
			})

			toast.success(product.name + " добавлена в корзину")
			router.back()
		} catch (error) {
			toast.error("Не удалось добавить товар в корзину")
			console.error(error)
		}
	}

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className
				)}
			>
				<VisuallyHidden.Root>
					<DialogTitle>HiddenTitle</DialogTitle>
					<DialogDescription>HiddenDescription</DialogDescription>
				</VisuallyHidden.Root>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={productItem.price}
						ingredientsinform={ingredients}
						items={product.items}
						onSubmit={() => onSubmit(productItem.id, [])}
						loading={loading}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={firstItem.price}
						onSubmit={() => onSubmit(firstItem.id, [])}
						loading={loading}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
