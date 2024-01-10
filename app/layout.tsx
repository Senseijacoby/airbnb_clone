import { Nunito } from 'next/font/google'

import Navbar from '@/components/navbar/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import SearchModal from '@/components/modals/SearchModal';
import RentModal from '@/components/modals/RentModal';

import ToasterProvider from '@/providers/ToasterProvider';

import './globals.css'
import ClientOnly from '@/components/ClientOnly';
import getCurrentUser from '@/actions/getCurrentUser';
import Footer from '@/components/Footer';



export const metadata = {
  title: 'Airbnb | Vacation rentals,cabins,beach houses & more',
  description: 'Airbnb Application Clone',
}

const font = Nunito({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

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
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        <div className="pb-20 pt-28">
          {children}

        </div>
        <hr className='border-[1px]' />
        <div className='pb-10 '>
          <Footer />
        </div>

      </body>
    </html>
  )
}