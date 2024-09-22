import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constans'
import { prisma } from './prisma-client'

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10)
}

const generateProductItem = ({
	productId,
	pizzaType,
	size,
}: {
	productId: number
	pizzaType?: 1 | 2
	size?: 20 | 30 | 40 | 50
}) => {
	return {
		productId,
		price: randomNumber(190, 600),
		pizzaType,
		size,
	} as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'John Doe Test',
				email: 'UHqg6@example.com',
				verified: new Date(),
				role: 'USER',
				phone: '0685555088',
				password: hashSync('111111', 10),
			},
			{
				fullName: 'Admin Test',
				email: 'admin@example.com',
				verified: new Date(),
				role: 'ADMIN',
				phone: '0685555008',
				password: hashSync('111111', 10),
			},
		],
	})
	await prisma.category.createMany({
		data: categories,
	})
	await prisma.ingredient.createMany({
		data: ingredients,
	})
	await prisma.product.createMany({
		data: products,
	})
	const pizza1 = await prisma.product.create({
		data: {
			name: 'Пепперони фреш',
			imageUrl: '/cdea869ef287426386ed634e6099a5ba.png',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(1, 3),
			},
		},
	})
	const pizza3 = await prisma.product.create({
		data: {
			name: 'Чоризо фреш',
			imageUrl: '/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(4, 6),
			},
		},
	})
	const pizza2 = await prisma.product.create({
		data: {
			name: 'Сирная',
			imageUrl: '/99f5cb91225b4875bd06a26d2e842106.png',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(7, 9),
			},
		},
	})
	await prisma.productItem.createMany({
		data: [
			generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 30 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 40 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 50 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 50 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 30 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 40 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 50 }),
			generateProductItem({ productId: 1 }),
			generateProductItem({ productId: 2 }),
			generateProductItem({ productId: 3 }),
			generateProductItem({ productId: 4 }),
		],
	})
	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '11111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '22222',
			},
		],
	})
	await prisma.cartItem.create({
		data: {
			productitemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
			},
		},
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
}
async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.log(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
