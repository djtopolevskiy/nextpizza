import { Container } from "@/components/shared/container"
import { ProductImage } from "@/components/shared/product_image"
import { Title } from "@/components/shared/title"
import { notFound } from "next/navigation"
import { prisma } from "../../../../prisma/prisma-client"

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findUnique({ where: { id: Number(id) } })

	if (!product) {
		return notFound()
	}
	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<ProductImage imageUrl={product.imageUrl} size={40} />
				<div className='w-[490px] bg-[#FCFCFC] p-7'>
					<Title
						text={product.name}
						size='md'
						className='font-extrabold mb-1'
					/>
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>
		</Container>
	)
}
