"use client"

import Image from "next/image"
import React from "react"

import { cn } from "@/shared/lib/utils"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import { CartButton } from "./cart-button"
import { Container } from "./container"
import { AuthModal } from "./modals/auth-modal"
import { ProfileButton } from "./profile-button"
import { SearchInput } from "./search-input"

interface Props {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
}

export const Header: React.FC<Props> = ({
	className,
	hasSearch = true,
	hasCart = true,
}) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [openAuthModal, setOpenAuthModal] = React.useState(false)

	React.useEffect(() => {
		let toastMessage = ""

		if (searchParams.has("verified")) {
			toastMessage = "Почта успешно подтверждена!"
		}

		if (searchParams.has("paid")) {
			toastMessage = "Заказ успешно оплачен! Информация отправлена на почту."
		}

		if (toastMessage) {
			setTimeout(() => {
				router.replace("/")
				toast.success(toastMessage, {
					duration: 3000,
				})
			}, 1000)
		}
	}, [])

	return (
		<header className={cn("border-b border-gray-100", className)}>
			<Container className='flex items-center justify-between py-8'>
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<Image src='/logo.png' width={35} height={35} alt='Logo' />
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
							<p className='text-sm text-gray-400 leading-3'>
								вкусней уже некуда
							</p>
						</div>
					</div>
				</Link>
				{hasSearch && (
					<div className='mx-10 flex-1'>
						<SearchInput />
					</div>
				)}

				<div className='flex items-center gap-3'>
					<AuthModal
						open={openAuthModal}
						onClose={() => setOpenAuthModal(false)}
					/>

					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
function setOpenAuthModal(arg0: boolean) {
	throw new Error("Function not implemented.")
}
