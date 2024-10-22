import { Container } from '@/shared/components/shared/container'
import { ChooseProductModal } from '@/shared/components/shared/modals/choose-product-modal'
import { notFound } from 'next/navigation'
import { prisma } from '../../../../../../prisma/prisma-client'

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
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<ChooseProductModal
				product={product}
				productItem={product.items[0]}
				ingredients={product.ingredients}
			/>
		</Container>
	)
}
