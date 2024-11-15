"use client"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/shared/components/ui/dialog"
import { cn } from "@/shared/lib/utils"
import { Ingredient, ProductItem } from "@prisma/client"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { useRouter } from "next/navigation"
import React from "react"
import { ProductWithRelations } from "../../../../../@types/prisma"
import { ProductForm } from "../product-form"

interface Props {
	product: ProductWithRelations
	productItem: ProductItem
	ingredients: Ingredient[]
	className?: string
	onOpenChange?: () => void
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()

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
				<ProductForm product={product} onSubmit={() => router.back()} />
			</DialogContent>
		</Dialog>
	)
}
