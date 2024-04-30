import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  { difficulty: 1, url: "https://puzz.link/p?heyawake/6/6/22eeee0f006032g112" },
  { difficulty: 1, url: "https://puzz.link/p?heyawake/6/6/giijjjvg7s0011g3g2g2g" },
  { difficulty: 2, url: "https://puzz.link/p?heyawake/10/10/94i84ga0k98ih4h92600v0vv00v7000vv33s20h2g3g3331g2g22g" },
  { difficulty: 2, url: "https://puzz.link/p?heyawake/8/8/108i4h48041003s0001vvs003415g12" },
  { difficulty: 2, url: "https://puzz.link/p?heyawake/10/10/e0ih5224488i54a94i7v00vv00o07v00vv002h13g3g42232g2g31" },
  { difficulty: 2, url: "https://puzz.link/p?heyawake/10/10/f0phj080gb0mhd0q1k3v00vv00v00v07v0002i13g1452g02033g" },
  { difficulty: 2, url: "https://puzz.link/p?heyawake/10/10/98ih51c2o5g4k98iho0000vv0000vv00u01v23322h434g22i" },
  { difficulty: 2, url: "https://puzz.link/p?heyawake/9/9/s2kaha58l144gi0fu01jo00fv01s003h324h3g133" },
  { difficulty: 4, url: "https://puzz.link/p?heyawake/10/10/a0k1u3s7ofgv1q3k60007v000f000ftg003v1g21g11222h12" },
  { difficulty: 4, url: "https://puzz.link/p?heyawake/10/10/00cophjb6jd6mdcqhlvv1r00s0fo0v00e0v04g101i10g10g3g0h" },
  { difficulty: 4, url: "https://puzz.link/p?heyawake/20/20/952oia5g94b0i8m54kca98okihh94j0i9614ic15502aa02kk05980aig4hd09aq0ilk15b82amg0000vvu00000u0vn0000vv0800vnu0000700vvvv0000vs3vvj0v000vvvv00fovvg000f3v0000222g32053433g23232144g3233g22132312222114j131131132114" },
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">へやわけ</p>
      <p>ルール説明</p>
      <p>1. 盤面のいくつかのマスを黒くぬりましょう。</p>
      <p>2. 太線で区切られた四角（部屋と呼びます）に入っている数字は、その部屋に入
        る黒マスの数を表しています。数字の入っていない部屋には、いくつ黒マスが
        入るかわかりません。</p>
      <p>3. 白マスを、タテまたはヨコにまっすぐに3つ以上の部屋にわたって続けさせては
        いけません。</p>
      <p>
        4.黒マスをタテヨコに連続させたり、黒マスで盤面を分断したりしてはいけません。
      </p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/h.png"} width={800} height={400} alt='' />
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