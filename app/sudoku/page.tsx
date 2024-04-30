import { Puzzle } from '@/components/Puzzle'
import Image from 'next/image'

const data: { difficulty: number, url: string }[] = [
  { difficulty: 1, url: "https://puzz.link/p?sudoku/9/9/g3h6h5g5h3g8h4g7g5g9g6h17g3g48g8h7g2h6g56g8g23h2g8g3g9g7h2g5h3g9h7h2g" },
  { difficulty: 1, url: "https://puzz.link/p?sudoku/9/9/g81g5h6g9i83k2h7g5i68g57i4h9h3i8i5i7g9h3k52i6g5h3g42g" },
  { difficulty: 2, url: "https://puzz.link/p?sudoku/9/9/k42g12g7g53h613k75g5k8g8i72m8h24543h87j1h5l6j3" },
  { difficulty: 2, url: "https://puzz.link/p?sudoku/9/9/1g369i7m39g8h4i18h1g3g4h1m6k5l7g6h5g19i82h8l" },
  { difficulty: 2, url: "https://puzz.link/p?sudoku/9/9/h15i2839h68p9i2g4g5k6g1k3g8g2h4q81h6498i21h" },
  { difficulty: 2, url: "https://puzz.link/p?sudoku/9/9/g9g6g4g7g7k6g3g1h2j9h1g2h4h1i3h6h4g3h9j4h3g2g4k7g7g8g5g6g" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/j6h3k157g9i7g314h7l3g64i82g3l1h491g6i2g143k3h7j" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/i45g31l9h7i71g69g96h2g87i89g6h127h8g95g32g86l9h7i74g29" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/q49g86i5g347g8h164g957i2i9i937g581h4g196g5i52g37q" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/h56g98i4k7g7i2i63h7g2h8h7g9g5h9h5g4h76i5i3g9k6i23g61h" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/i14569g3i698h9562h1h61j4g959h7h627g3j18h2h4756h958i4g75623i" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/i9g6g38g48k5g635g1k4g2g3k8g4k9g6g8k3g867g1k98g78g4g2i" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/g872g965j81i4g1g7h3g8i5j3g68i14g7j1i6g1h4g9g4i98j921g743g" },
  { difficulty: 3, url: "https://puzz.link/p?sudoku/9/9/2h16g9383l5i4g58k37j485n2k1k21j8g9g7h3h1i287" },
]
export default async function Page() {
  return (
    <main>
      <p className="text-xl mb-2">数独</p>

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