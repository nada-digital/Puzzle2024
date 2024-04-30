import './globals.css'
import type { Metadata } from 'next'
import { Hachi_Maru_Pop, Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'パズルサークル',
  description: '2024年度パズルサークルHPです！',
}

const hachi_maru_pop = Hachi_Maru_Pop({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hachi-maru-pop",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${hachi_maru_pop.variable} font-hachi_maru_pop`}>
        <Link href={"/"}>
          <div className='relative'>
            <p className='text-4xl text-center my-4 relative'>
              パズルサークル
            </p>
            <div className='absolute flex w-full justify-center'>
              <Image className='absolute translate-x-[110px] rotate-12' width={80} height={80} src={"/piece1.svg"} alt='' />
              <Image className='absolute translate-x-[-140px] -translate-y-8 rotate-45' width={80} height={80} src={"/piece1.svg"} alt='' />
            </div>
          </div></Link>

        <p className='text-center mb-2'>第78回灘校文化祭</p>

        <div className="w-full h-[50px] my-4" style={{
          backgroundRepeat: "repeat-x",
          backgroundImage: "url(/border.svg)"
        }} />
        <div className='w-full md:w-[600px] lg:w-[800px] mx-auto px-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
