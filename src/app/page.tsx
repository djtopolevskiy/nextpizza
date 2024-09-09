import { Container } from "@/components/shared/container"
import { Filters } from "@/components/shared/filters"
import { ProductsGroupList } from "@/components/shared/products-group-list"
import { Title } from "@/components/shared/title"
import { TopBar } from "@/components/shared/top-bar"

export default function Home() {
	return (
		<>
			<Container className='mt-5'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />
			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								id={1}
								title='Pizzas'
								items={[
									{
										id: 1,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 6,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								id={2}
								title='Breakfest'
								items={[
									{
										id: 1,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 6,
										name: "Cheese-pizza",
										imageUrl: "/11EE7D61706D472F9A5D71EB94149304.avif",
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
