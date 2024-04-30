const data=`
　★
https://puzz.link/p?mashu/6/6/0366001901i0
https://puzz.link/p?mashu/6/6/003600200i00
　★★
https://puzz.link/p?mashu/7/7/000j900iii2001200
https://puzz.link/p?mashu/10/10/030206119200009b0i6603090000i031i0
https://puzz.link/p?mashu/7/7/10ii1000663900310
https://puzz.link/p?mashu/10/10/030120300i206a0001000310ig0i010990
https://puzz.link/p?mashu/10/10/099200i0i0102f100092000603096i4000
https://puzz.link/p?mashu/10/10/00318000063o000303a369900i0j060000
https://puzz.link/p?mashu/10/10/090000ij600611010636320000k09a0100
https://puzz.link/p?mashu/10/10/ij3000080900340j00012ic00409900920
★★★
https://puzz.link/p?mashu/10/10/0211300020b100039j00020i13000a3i90
　★★★★
https://puzz.link/p?mashu/10/10/00120900i30i6300906026913200903000
`


const r=data.split("\n").filter(d=>d.startsWith("https")).map(s=>`{difficulty:1,url:"${s}"},`).join("\n")
console.log(r)