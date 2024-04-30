import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  {difficulty:1,url:"https://puzz.link/p?numlin/7/7/4h2j1i5h4q3h3h52s1"},
{difficulty:1,url:"https://puzz.link/p?numlin/8/8/h13i2i4i3g4g5i1r2l6g6i5t"},
{difficulty:2,url:"https://puzz.link/p?numlin/10/10/1h2j65s5h3h1zk4y6k2i3m4l"},
{difficulty:2,url:"https://puzz.link/p?numlin/10/10/3h43x2i5g2o1h5z1zj4q"},
{difficulty:2,url:"https://puzz.link/p?numlin/10/10/m5g1v3l4zi1r2o3m2g5k4i"},
{difficulty:2,url:"https://puzz.link/p?numlin/10/10/j5i13zi2j4j6g6i2i4r3g5zg1o"},
{difficulty:3,url:"https://puzz.link/p?numlin/10/10/2n1h4o3o2o51o6g6o5zj3n4"},
{difficulty:3,url:"https://puzz.link/p?numlin/10/10/4i2v1t3k24o1m6o5o3k56q"},
{difficulty:3,url:"https://puzz.link/p?numlin/10/10/g3m1g4g7j2m6h5l87i3o4zj8k2k6g1l5h"},
{difficulty:3,url:"https://puzz.link/p?numlin/10/10/x7h7l5j3j2l1g4k8q4l1j3m2k6g5i8g6"},
{difficulty:3,url:"https://puzz.link/p?numlin/10/10/4i5l63j82h7r8g1p2t7j4m63j1n5o"},
{difficulty:3,url:"https://puzz.link/p?numlin/10/10/p1g8n7h52v6h1m4g4o2k5h38k6i7s3"},
{difficulty:3,url:"https://puzz.link/p?numlin/13/13/k3x6i7x1i2l4w5zl7j3i1u6p4m2z5"},
{difficulty:4,url:"https://puzz.link/p?numlin/14/14/u3p2u1o5k4k6u4k7h2zi9p7i6h8gahazh3n95m1w8"},
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">ナンバーリンク</p>
      <p>ルール説明</p>
      <p>1. 白マスに線を引いて、同じ数字どうしをつなげましょう。</p>
      <p>2. 線は、マスの中央を通るようにタテヨコに引きます。線を交差させたり、枝分
        かれさせたりしてはいけません。</p>
      <p>3. 数字の入っているマスを通過するように線を引いてはいけません。</p>
      <p>4.1マスに２本以上線を引いてはいけません。</p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/n.png"} width={800} height={400} alt='' />
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