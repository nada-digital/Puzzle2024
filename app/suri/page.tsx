import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  { difficulty: 1, url: "https://puzz.link/p?slither/6/6/kdhdg37ah733ddhd" },
  { difficulty: 1, url: "https://puzz.link/p?slither/5/5/h07chdgdh80c" },
  { difficulty: 2, url: "https://puzz.link/p?slither/7/7/31agagbcj71618ajcjdj" },
  { difficulty: 2, url: "https://puzz.link/p?slither/6/6/g826dka6d72bbg37d" },
  { difficulty: 3, url: "https://puzz.link/p?slither/10/10/81ab6dac77678c7dg2bgcgddi71cichcgcj8c60ac1a" },
  { difficulty: 3, url: "https://puzz.link/p?slither/10/10/876db3dhdibch38cgdcg8dh1bj8dbpbg8388dm" },
  { difficulty: 3, url: "https://puzz.link/p?slither/10/10/ga3ba8c5cibh11ajch38a385chbgbh5adcl768588d" },
  { difficulty: 4, url: "https://puzz.link/p?slither/7/7/cg867bg8cdhcahc6dcbgb" },
  { difficulty: 4, url: "https://puzz.link/p?slither/10/10/h362762ca1abk2b22dg3di8a6di1bg32a3ckb2bb277172c" },
  { difficulty: 4, url: "https://puzz.link/p?slither/10/10/dh1ch18dg7chdh78b18616dh686dkdgd3bhbldkdgb" },
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">スリザーリンク</p>
      <p>ルール説明</p>
      <p>1. 点と点の間にタテヨコに線を引き、全体で1つの輪っかを作りましょう。</p>
      <p>2. 4つの点で作られた正方形の中にある数字は、その正方形の辺に引く線の数を
        表しています。数字のない正方形には何本の線を引くかわかりません。</p>
      <p>3.線を交差させたり、枝分かれさせたりしてはいけません。</p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/s.png"} width={800} height={400} alt='' />
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