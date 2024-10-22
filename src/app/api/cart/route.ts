import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'

export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value

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
					orderBy: { createdAt: 'desc' },
					include: {
						productitem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
		})
		// console.log('userCart', userCart)
		return NextResponse.json(userCart)
	} catch (error) {
		console.log(error)
	}
}
