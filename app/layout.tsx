import { Nunito } from 'next/font/google'


import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import ClientOnly from './components/ClientOnly'
import SearchModal from './components/modals/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YOLO',
  description: 'You Only Lives One',
}
const font = Nunito({
  subsets: ["latin"]
})


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-28 pt-28'>
           {children}
        </div>
      </body>
    </html>
  )
}