import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  { difficulty: 1, url: "https://puzz.link/p?shakashaka/6/6/kcjazc" },
  { difficulty: 1, url: "https://puzz.link/p?shakashaka/7/7/cdzhcgat" },
  { difficulty: 2, url: "https://puzz.link/p?shakashaka/7/7/hbg.v7dwag" },
  { difficulty: 2, url: "https://puzz.link/p?shakashaka/7/7/kbgdwc.j..ob" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/10/10/al.jczmbgcoczhdh.hbia" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/10/10/cibzjb.haztbictc" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/8/8/gbbvcldget.p" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/10/10/uckchccychcccr.hcrc" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/7/6/bteubib" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/10/10/zbbcpcocbrbq.uc" },
  { difficulty: 3, url: "https://puzz.link/p?shakashaka/8/8/bndncvcncnb" },
  { difficulty: 4, url: "https://puzz.link/p?shakashaka/10/10/i.zobibxdidzjbi./" },
  { difficulty: 4, url: "https://puzz.link/p?shakashaka/7/7/zmbgbgbq" },
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">シャカシャカ</p>
      <p>ルール説明</p>
      <p>1.盤面のいくつかの白マスを三角形に黒く塗りつぶしましょう。</p>
      <p>2. マスの塗り方は
        <Image className='inline-block' src={"/graph/s_block.png"} width={50} height={50} alt='' />
        の4通りのいずれかです。</p>
      <p>3.盤面の数字は、その数字の入っているマスにタテヨコに隣り合うマスのう
        ち、三角形にぬるマスの数を表しています。</p>
      <p>4.ぬられずに白く残った部分は、すべて長方形（正方形も含む）にならなけれ
        ばなりません。</p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/syaka.png"} width={800} height={400} alt='' />
      {
        data.map((kakezan, index) => {
          return (
            <Puzzle key={index} difficulty={kakezan.difficulty} url={kakezan.url} />
          )
        })
      }


    </main>
  )
}