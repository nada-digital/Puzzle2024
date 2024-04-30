import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  {difficulty:1,url:"https://puzz.link/p?mashu/6/6/0366001901i0"},
  {difficulty:1,url:"https://puzz.link/p?mashu/6/6/003600200i00"},
  {difficulty:2,url:"https://puzz.link/p?mashu/7/7/000j900iii2001200"},
  {difficulty:2,url:"https://puzz.link/p?mashu/10/10/030206119200009b0i6603090000i031i0"},
  {difficulty:2,url:"https://puzz.link/p?mashu/7/7/10ii1000663900310"},
  {difficulty:2,url:"https://puzz.link/p?mashu/10/10/030120300i206a0001000310ig0i010990"},
  {difficulty:2,url:"https://puzz.link/p?mashu/10/10/099200i0i0102f100092000603096i4000"},
  {difficulty:2,url:"https://puzz.link/p?mashu/10/10/00318000063o000303a369900i0j060000"},
  {difficulty:2,url:"https://puzz.link/p?mashu/10/10/090000ij600611010636320000k09a0100"},
  {difficulty:2,url:"https://puzz.link/p?mashu/10/10/ij3000080900340j00012ic00409900920"},
  {difficulty:3,url:"https://puzz.link/p?mashu/10/10/0211300020b100039j00020i13000a3i90"},
  {difficulty:4,url:"https://puzz.link/p?mashu/10/10/00120900i30i6300906026913200903000"},
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">ましゅ</p>

      <p> 1. 盤面のいくつかのマスに線を引いて全体で1つの輪っかを作りましょう。</p>
      <p>2. 線は、マスの中央を通るようにタテヨコに引きます。線を交差させたり、枝分
        かれさせたりしてはいけません。</p>
      <p>3. 白丸を通る線は、白丸のマスで必ず直進し、白丸の隣のマスで直角に曲がりま
        すが、両隣で曲がる場合と片方だけで曲がる場合とがあります。</p>
      <p>4.黒丸を通る線は、黒丸のマスで必ず直角に曲がりますが、黒丸の隣のマスでは
        曲がりません。</p>
      <Image className='mx-auto my-4' src={"/graph/m.png"} width={800} height={400} alt='' />

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