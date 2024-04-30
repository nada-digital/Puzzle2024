import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='px-4'>
        <p>パズルサークルでは、いろいろなパズルを作成し公開しています。</p>
        <p>ここではオンライン上で実際に試していただけるパズルをたくさん載せています！ぜひ挑戦してね！</p>
        <p className='mt-2'>パズルピースをタップして問題を解いてみよう。</p>

        <div className='grid grid-cols-2 gap-x-4 gap-y-56 mt-24'>
          <Link href={"/kakezan"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute' src={"/piece2.svg"} alt='' width={200} height={200} />
               <div>掛け算リンク</div>
            </div>
          </Link>
          <Link href={"/yajirin"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute rotate-12' src={"/piece3.svg"} alt='' width={140} height={200} />
               <div>ヤジリン</div>
            </div>
          </Link>
          <Link href={"/suri"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute rotate-[65deg]' src={"/piece3.svg"} alt='' width={140} height={200} />
               <div>スリザーリンク</div>
            </div>
          </Link>
          <Link href={"/masyu"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute -rotate-[25deg]' src={"/piece2.svg"} alt='' width={200} height={200} />
               <div>ましゅ</div>
            </div>
          </Link>
          <Link href={"/doublechoco"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute rotate-[15deg]' src={"/piece2.svg"} alt='' width={200} height={200} />
               <div>ダブルチョコ</div>
            </div>
          </Link>
          <Link href={"/heya"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute rotate-[45deg]' src={"/piece3.svg"} alt='' width={140} height={200} />
               <div>へやわり</div>
            </div>
          </Link>
          <Link href={"/lits"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute -rotate-[75deg]' src={"/piece2.svg"} alt='' width={200} height={200} />
               <div>LITS</div>
            </div>
          </Link>
          <Link href={"/num"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute -rotate-[25deg]' src={"/piece3.svg"} alt='' width={140} height={200} />
               <div>ナンバーリンク</div>
            </div>
          </Link>
          <Link href={"/sudoku"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute rotate-[75deg]' src={"/piece2.svg"} alt='' width={200} height={200} />
               <div>数独</div>
            </div>
          </Link>
          <Link href={"/syaka"}>
            <div className='relative flex items-center justify-center'>
              <Image className='absolute -rotate-[25deg]' src={"/piece3.svg"} alt='' width={140} height={200} />
               <div>シャカシャカ</div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}


