// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ➞ "<div></div><div></div>"
// Namuna("p*1") ➞ "<p></p>"
// Namuna("li*3") ➞ "<li></li><li></li><li></li>"


function Namuna(str) {
  let [tag, count] = str.split("*");
  return `<${tag}></${tag}>`.repeat(count);
}


console.log(Namuna("div*2"));
console.log(Namuna("p*1"));
console.log(Namuna("li*3"));



// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ➞ 6
// // 1 + 2 + 3 = 6
// namuna(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28


function namuna1(n) {
  return (n * (n + 1)) / 2;
}


console.log(namuna1(3));
console.log(namuna1(10));
console.log(namuna1(7));