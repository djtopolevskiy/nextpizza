import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../prisma/prisma-client"

export async function GET(req: NextRequest) {
	console.log(req.nextUrl.searchParams.get("query"))
	const query = req.nextUrl.searchParams.get("query") || ""
	console.log(query)
	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
		take: 5,
	})

	console.log(products)
	console.log(NextResponse.json({ products }))
	return NextResponse.json({ products })
}
