import { Header } from '@/shared/components/shared/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'NextPizza',
	description: 'NextPizza the best',
}

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<main className='min-h-screen'>
			<Header />
			{children}
			{modal}
		</main>
	)
}
