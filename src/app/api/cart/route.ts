import { findOrCreateCart } from "@/shared/lib/find-or-create-cart"
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount"
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto"
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../prisma/prisma-client"

export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get("cartToken")?.value

		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}
		const userCart = await prisma.cart.findFirst({
			where: {
				OR: [
					{
						token,
					},
				],
			},
			include: {
				items: {
					orderBy: { createdAt: "desc" },
					include: {
						productItem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
		})
		return NextResponse.json(userCart)
	} catch (error) {
		console.log(error)
	}
}

export async function POST(req: NextRequest) {
	try {
		let token = req.cookies.get("cartToken")?.value

		if (!token) {
			token = crypto.randomUUID()
		}

		// Поиск или создание корзины
		const userCart = await findOrCreateCart(token)

		// Получаем данные из запроса
		const data = (await req.json()) as CreateCartItemValues

		// Поиск товара в корзине
		const findCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId: userCart.id,
				productItemId: data.productItemId,
				ingredients: {
					every: {
						id: { in: data.ingredients },
					},
				},
			},
		})

		// Если товар был найден, делаем +1
		if (findCartItem) {
			await prisma.cartItem.update({
				where: {
					id: findCartItem.id,
				},
				data: {
					quantity: findCartItem.quantity + 1,
				},
			})
		} else {
			await prisma.cartItem.create({
				data: {
					cartId: userCart.id,
					productItemId: data.productItemId,
					quantity: 1,
					ingredients: { connect: data.ingredients?.map(id => ({ id })) },
				},
			})
		}

		const updatedUserCart = await updateCartTotalAmount(token)

		// Возвращаем корзину
		const resp = NextResponse.json(updatedUserCart)
		// Устанавливаем куки
		resp.cookies.set("cartToken", token)
		// Возвращаем корзину
		return resp
	} catch (error) {
		console.log("[CART_POST] Server error", error)
		return NextResponse.json(
			{ message: "Не удалось создать корзину" },
			{ status: 500 }
		)
	}
}
