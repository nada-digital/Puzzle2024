import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  {difficulty:1,url:"https://puzz.link/p?lits/8/8/c27k2bnetv903l7bpea88g50"},
  {difficulty:1,url:"https://puzz.link/p?lits/10/10/4glcvamrtfs78mit3iqe4kr1kg8668t3qc4g"},
  {difficulty:2,url:"https://puzz.link/p?lits/10/10/52bed3bn5jcur6lqic0cuaa23skrd0a85aim"},
  {difficulty:2,url:"https://puzz.link/p?lits/8/8/22icf0kt4kkgvogk1a50bh10"},
  {difficulty:3,url:"https://puzz.link/p?lits/10/10/0gglqiefi4knkjnnh47mrq57lbasqq75a1li"},
  {difficulty:3,url:"https://puzz.link/p?lits/10/10/4l2f1atql8l45tkqggcifshcmkcmnuaql3e6"},
  {difficulty:3,url:"https://puzz.link/p?lits/10/10/1gvnrsr48j3ipiclj8q69c4hfbfu6qjmadc2"},
  {difficulty:3,url:"https://puzz.link/p?lits/10/10/0a7ldijkthgi62kcigugoa711i868entf2ch"},
  {difficulty:3,url:"https://puzz.link/p?lits/10/10/2hclird6tigjbechjhee9sr10ad7esm29ccs"},
  {difficulty:3,url:"https://puzz.link/p?lits/10/10/i8ntj9usn8vdhm1b008i74p9akngli9f7csr"},
  {difficulty:4,url:"https://puzz.link/p?lits/10/10/11332c9punp777sojkff7e7se933s66k6ac6"},
  {difficulty:4,url:"https://puzz.link/p?lits/10/10/6961c0ip6rvecctek8co80uufq6i48stecb6"},
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">LITS</p>
      <p>ルール説明</p>
      <p>1.太線で区切られた部分（ブロック）それぞれに、黒マスがタテヨコに4つつな
      がってできたピース（テトロミノといいます）を1つずつ配置しましょう。</p>
      <p>2. 回転あるいは裏返しをして同じ形になるテトロミノどうしが辺を共有するよう
      にしてはいけません。</p>
      <p>3. すべての黒マスはタテヨコにひとつながりになっていなければいけません。</p>
      <p>4.黒マスを2×2以上のカタマリにしてはいけません。</p>
      <p>ルール文出典：nikoli</p>

      <Image className='mx-auto my-4' src={"/graph/l.png"} width={800} height={400} alt='' />
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