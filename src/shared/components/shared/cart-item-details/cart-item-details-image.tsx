import { cn } from "@/shared/lib/utils"
import Image from "next/image"

interface Props {
	src: string
	className?: string
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
	return (
		<Image
			src={src}
			width={60}
			height={60}
			alt='image'
			className={cn("w-[60px] h-[60px]", className)}
		/>
	)
}
