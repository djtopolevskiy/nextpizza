import { Container } from "@/shared/components/shared/container"
import { Filters } from "@/shared/components/shared/filters"
import { ProductsGroupList } from "@/shared/components/shared/products-group-list"
import { Title } from "@/shared/components/shared/title"
import { TopBar } from "@/shared/components/shared/top-bar"
import { prisma } from "../../../prisma/prisma-client"

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: { include: { ingredients: true, items: true } },
		},
	})

	return (
		<>
			<Container className='mt-5'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>

			<TopBar
				categories={categories.filter(category => category.products.length > 0)}
			/>
			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											items={category.products}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
