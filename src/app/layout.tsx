import { Providers } from '@/shared/components/shared/providers'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'NextPizza',
	description: 'NextPizza the best',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' dir='ltr' className='text.UTF-8'>
			<body className={nunito.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
