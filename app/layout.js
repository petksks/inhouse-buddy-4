import './globals.css'
import { Raleway } from 'next/font/google'
import Header from './header'

export const metadata = {
  title: 'Inhouse buddy',
  description: 'Inhouse buddy',
}

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}