// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ➞ "<div></div><div></div>"
// Namuna("p*1") ➞ "<p></p>"
// Namuna("li*3") ➞ "<li></li><li></li><li></li>"

console.log('100-MISOL');


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

console.log('101-MISOL');

function Namuna1(n) {
  return (n * (n + 1)) / 2;
}


console.log(Namuna1(3));
console.log(Namuna1(10));
console.log(Namuna1(7));


// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ➞ true
// Namuna(4, { min: 4, max: 5 }) ➞ true
// Namuna(4, { min: 6, max: 10 }) ➞ false

console.log('102-MISOL');

function Namuna2(son, obj) {
  return son >= obj.min && son <= obj.max;
}


console.log(Namuna2(4, { min: 0, max: 5 }));
console.log(Namuna2(4, { min: 4, max: 5 }));
console.log(Namuna2(4, { min: 6, max: 10 }));
console.log(Namuna2(4, { min: 5, max: 5 }));



// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) ➞ true
// Namuna(3) ➞ false
// // 3^2 = 9
// Namuna(6) ➞ true
// // 6^2 = 36 (ends with 6)
// Namuna(95) ➞ false
// // 95^2 = 9025 (does not end with 95)

console.log('103-MISOL');

function Namuna3(son) {
  let kvadrat = son * son;
  return String(kvadrat).endsWith(String(son));
}


console.log(Namuna3(1));
console.log(Namuna3(3));
console.log(Namuna3(6));
console.log(Namuna3(95));


// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
// Namuna([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
// Namuna([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

console.log('104-MISOL');

function Namuna4(arr) {
  let natija = [];
  
  for (let i = 0; i < arr.length; i++) {
    natija.push(arr[i] + i);
  }
  
  return natija;
}


console.log(Namuna4([0, 0, 0, 0, 0]));
console.log(Namuna4([1, 2, 3, 4, 5]));
console.log(Namuna4([5, 4, 3, 2, 1]));


// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta
// Namuna:
// Namuna(["fanta", "cola", "water"]) ➞ ["water"]
// Namuna(["fanta", "cola"]) ➞ []
// Namuna(["lemonade", "beer", "water"]) ➞ ["lemonade",
// "beer", "water"]

console.log('105-MISOL');


function Namuna5(ichimliklar) {
  let natija = [];
  
  for (let i = 0; i < ichimliklar.length; i++) {
    let ichimlik = ichimliklar[i];
    
    if (ichimlik !== "cola" && ichimlik !== "fanta") {
      natija.push(ichimlik);
    }
  }
  
  return natija;
}


console.log(Namuna5(["fanta", "cola", "water"]));
console.log(Namuna5(["fanta", "cola"]));
console.log(Namuna5(["lemonade", "beer", "water"]));


// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) ➞ 3
// Namuna(56) ➞ 2
// Namuna(7154) ➞ 4
// Namuna(61217311514) ➞ 11
// Namuna(0) ➞ 1


function Namuna6(son) {
  return String(son).length;
}

console.log('106-MISOL');


console.log(Namuna6(123));
console.log(Namuna6(56));
console.log(Namuna6(7154));
console.log(Namuna6(61217311514));
console.log(Namuna6(0));



// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// Namuna:
// Namuna(123) ➞ 321
// Namuna("001") ➞ 100
// Namuna(999) ➞ 999
// Namuna(784) ➞ 874




function Namuna7(son) {
  let raqamlar = String(son).split('');
  
  raqamlar.sort();
  raqamlar.reverse();
  
  return Number(raqamlar.join(''));
}

console.log('107-MISOL');

console.log(Namuna7(123));
console.log(Namuna7("001"));
console.log(Namuna7(635));
console.log(Namuna7(784));





// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// Namuna:
// Namuna(5, 9) ➞ 7
// Namuna(5, 9) ➞ 9
// Namuna(5, 9) ➞ 5





function Namuna8(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('108-MISOL');


console.log(Namuna8(5, 9));
console.log(Namuna8(5, 9)); 
console.log(Namuna8(5, 9));







// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) ➞ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) ➞ true
// Namuna(1652) ➞ false

function Namuna9(son) {
  let matn = String(son);
  let uzunlik = matn.length;
  let yigindi = 0;
  

  for (let i = 0; i < uzunlik; i++) {
    let raqam = Number(matn[i]);
    yigindi += Math.pow(raqam, uzunlik);
  }
  
  return yigindi === son;
}

console.log('109-MISOL');


console.log(Namuna9(153));
console.log(Namuna9(370));
console.log(Namuna9(1652));




// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") ➞ 6
// Namuna("JMZWCneOTFLWYwBWxyFw") ➞ 14
// 51
// DASTURLASHDAN MASALALAR
// Namuna("mqeytbbjwqemcdrdsyvq") ➞ 0


function Namuna10(str) {
  let sanoq = 0;
  
  for (let i = 0; i < str.length; i++) {
    let harf = str[i];

    if (harf === harf.toUpperCase() && harf !== harf.toLowerCase()) {
      sanoq++;
    }
  }
  
  return sanoq;
}

console.log('110-MISOL');


console.log(Namuna10("fvLzpxmgXSDrobbgMVrc"));
console.log(Namuna10("JMZWCneOTFLWYwBWxyFw"));
console.log(Namuna10("mqeytbbjwqemcdrdsyvq"));