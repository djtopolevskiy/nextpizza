// import { Container } from '@/components/shared'
import { ChoosePizzaForm } from '@/shared/components/shared/choose-pizza-form'
import { ChooseProductForm } from '@/shared/components/shared/choose-product-form'
import { Container } from '@/shared/components/shared/container'
import { notFound } from 'next/navigation'
import { prisma } from '../../../../../prisma/prisma-client'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
			items: true,
		},
	})

	if (!product) {
		// const router = useRouter()
		// const isPizzaForm = Boolean(product.items[0].pizzaType)
		return notFound()
	}
	const isPizzaForm = Boolean(product.items[0].pizzaType)
	return (
		<Container className='flex flex-col my-10'>
			{isPizzaForm ? (
				<ChoosePizzaForm
					imageUrl={product.imageUrl}
					name={product.name}
					price={product.items[0].price}
					ingredientsinform={product.ingredients.map(i => i.name)}
				/>
			) : (
				<ChooseProductForm
					imageUrl={product.imageUrl}
					name={product.name}
					price={product.items[0].price}
					// ingredientsinform={ingredients.map(i => i.name)}
				/>
			)}
		</Container>
	)
}
