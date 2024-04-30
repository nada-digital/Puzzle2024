import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  {difficulty:1,url:"https://puzz.link/p?dbchoco/6/5/54jpt6j1j3g42s1i"},
{difficulty:1,url:"https://puzz.link/p?dbchoco/6/6/47ndav00m3l3g2j4m3l"},
{difficulty:2,url:"https://puzz.link/p?dbchoco/6/6/emgmif4gn4zi1i"},
{difficulty:2,url:"https://puzz.link/p?dbchoco/8/8/foba4ni4jarcay3m3l3j3j3q3m"},
{difficulty:2,url:"https://puzz.link/p?dbchoco/6/6/76r5qs0gj3i3r2i24o"},
{difficulty:2,url:"https://puzz.link/p?dbchoco/8/7/1s7im3pb1s7gw4j45o4j46v"},
{difficulty:2,url:"https://puzz.link/p?dbchoco/6/6/6lcelo3g3i2r34p4l"},
{difficulty:2,url:"https://puzz.link/p?dbchoco/7/4/8ikvm8i4o2m3g22i"},
{difficulty:3,url:"https://puzz.link/p?dbchoco/10/10/5anadlhgel9rm94marq4s4j2i2v5h2u1y2v3j"},
{difficulty:3,url:"https://puzz.link/p?dbchoco/8/8/v3qe4o3h6s7t0g4k6zzk5h2m"},
{difficulty:3,url:"https://puzz.link/p?dbchoco/10/10/rk4brmdkib78a7992lsm1zm2t3g4h2h4w23l2u2l"},
{difficulty:3,url:"https://puzz.link/p?dbchoco/10/10/fs6s2gtmksoqi8unojo12n2j2m4p2i2p4h2p2i2p2m2j4n4"},
{difficulty:4,url:"https://puzz.link/p?dbchoco/12/12/s74jt4p5k1to7v9juu3mkgps7k070j3n2l23j3zg3l41zk42v2h4zj3m5l4"},
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">ダブルチョコ</p>
      <p>ルール説明</p>
      <p>1.点線の上にタテヨコに線を引き、盤面をいくつかのブロックに分けましょう。</p>
      <p>2.それぞれのブロックは、同じ大きさで同じ形の白マスのカタマリと灰色マスの
        カタマリが1つずつつながったものになります。回転や裏返しをして同じになる も
        のは「同じ形」とします。</p>
      <p>3.数字は、そのマスが含まれるブロック内での、その色のカタマリのマス数を表
        します。つまり、ブロックのマス数の半分になります。1つのブロックに、いく つ数
        字が入っても構いません。</p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/d.png"} width={800} height={400} alt='' />
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