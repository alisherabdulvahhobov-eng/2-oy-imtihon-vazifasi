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