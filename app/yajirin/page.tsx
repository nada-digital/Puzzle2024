import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  { url: "https://puzz.link/p?yajilin/8/8/42v22m32k13n", difficulty: 1 },
  { url: "https://puzz.link/p?yajilin/10/10/l23b2131t3341h11p2020g42b32w", difficulty: 1 },
  { url: "https://puzz.link/p?yajilin/8/8/g32s12c32zc32b", difficulty: 2 },
  { url: "https://puzz.link/p?yajilin/10/10/42x42d42n32p22b22b22zd10", difficulty: 2 },
  { url: "https://puzz.link/p?yajilin/10/10/d41e11e22f10s23d33zm32k", difficulty: 3 },
  { url: "https://puzz.link/p?yajilin/10/10/k21k41j42u12d42m12a31e12e13a42h", difficulty: 3 },
  { url: "https://puzz.link/p?yajilin/b/9/10/42h0.h42h4.s120.220.12j32h0.h32h0./", difficulty: 3 },
  { url: "https://puzz.link/p?yajilin/10/10/f24b31b23s42b32a41w42zk3", difficulty: 4 },
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">ヤジリン</p>
      <p>ルール説明</p>
      <p>1.盤面のいくつかのマスに線を引いて全体で1つの輪っかを作りましょう。また、線が通らないマスは黒くぬり、黒マスにしましょう。</p>
      <p>2. 数字は、矢印の方向に入る黒マスの数を表します。</p>
      <p>3. 数字のマスに線を引いたり、黒マスにしたりしてはいけません。</p>
      <p>4.線は、マスの中央を通るようにタテヨコに引きます。線を交差させたり、枝分かれさせたりしてはいけません。</p>
      <p>5.黒マスをタテヨコに連続させてはいけません。</p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/y.png"} width={800} height={400} alt='' />
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