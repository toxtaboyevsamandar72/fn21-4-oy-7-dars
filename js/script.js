
// let email = 'samandartoxtaboyev@gmail.com'



// let result = email.indexOf('a');
// console.log(result);


// let result = email.lastIndexOf('a');
// console.log(result);


// let result = email.slice(2,10)
// console.log(result);

// let result = email.substr(2,10)
// console.log(result);


// let result = email.replace('a', 'd')
// console.log(result);


// let result = email.charAt()
// console.log(result);

// let result = email.trim()

// console.log(result);


// let result = email.split('')

// console.log(result);


// callback funksiyallar

// let myFunc = (callbackFunk) => {
//     let number = 56
//     callbackFunk(number)
// }

// myFunc((valve) => {
//     console.log(valve);
// })

// let mehmon1 = 'samandar'
// let mehmon2 = 'eldiyor'
// let mehmon3 = 'sohidillo'
// let mehmon4 = 'husanbooy'

// let mehmonlar = ['samandar','sohidillo','husanbooy','eldiyor'];
// // mehmonlar[0] = 'samandar'

// // let result = mehmonlar.indexOf('samandar')

// //  mehmonlar.push('daav');
//  mehmonlar.pop('sohidillo')
// console.log(mehmonlar);



// 1-mashq promptdan ism va yosh kiritilsa kiritilgan yosh orqali ushbu malumotlar hisoblanib berilishi kerak:
// tugulgan yil (2004), yashagan oy, hafta, kun, soat,daqiqa,sekund.


// let ism = prompt("ismingizni kiriting");

// let yosh = +prompt("yoshingizdi kiriting");

// let yil = 2024-yosh
// let oy = yosh*12
// let hafta = oy*4
// let kun = Math.trunc(hafta/7)
// let soat = kun*24
// let daqiqa = soat*60
// let sekund = daqiqa*60

// const result = `Qadirli ${ism}. Siz ${2024-yosh}da tugulgansiz. va siz ${oy} oy,shuncha ${hafta} hafta,${kun} kun,${soat} soat,${daqiqa} daqiqa,${sekund}sekund yashdasiz. `
// console.log(result);

// 2-misol



// let ism = prompt("ismingizdi kiriting")

// let ismlar = ['Samandar','Eldiyor','Sohidillo','Sarvar']

// if (ismlar.includes(ism)) {
//     console.log(`ha ${ism} bor`);
// } else {
//     console.log(`afsus ${ism} yoq`);
// }


// let ismlar = ['Samandar', 'Eldiyor', 'Sohidillo', 'Sarvar'];

// for (let i = 0; i < ismlar.length; i++) {
//   let result = ismlar[i] + 'bek'
//   console.log(result);

// }
// let i = 0;

// while (i < ismlar.length) {
//     let res = ismlar[i] + 'bek'
//     console.log(res)
//     i++
// }


// 3-mashq


// let viloyatlar = prompt("viloyatni kiriting")

// switch (viloyatlar) {
//     case "fargona":
//         console.log('fargonada 2milyon aholisi bor');
//         break;
//     case "andijon":
//         console.log('andijonda 1.5milyon aholisi bor');
//         break;
//     case "namangan":
//         console.log('namanganda 3milyon aholisi bor');
//         break;
//     case "toshkent":
//         console.log('toshkent 1milyon aholisi bor');
//         break;
//     case "buxoro":
//         console.log('buxoroda 2.3 milyon aholisi bor');
//         break;
//     case "samarkand":
//         console.log('samarkandda 4milyon aholisi bor');
//         break;
//     case "jizax":
//         console.log('jizax 6milyon aholisi bor');
//         break;
//     case "nukus":
//         console.log('nukus 14milyon aholisi bor');
//         break;
//     default:
//         console.log('bunday viloyat yoq');
//         break;
// }



// let belgilar = prompt('qndaydir belgilar');
// let meyor = 20;
// if (belgilar.length>meyor) {
//     console.log(`meyor ${meyor}ta, siz hozirda ${belgilar.length} kiritingiz, meyoridan ${belgilar.length-meyor} kop`);
// } else {
//     console.log(`meyor ${meyor}ta, siz hozirda ${belgilar} kiritingiz, meyoridan ${meyor-belgilar.length} kam`);
// }


// 1-mashq


// const myArray = [[false, true], [1, 2], 99, 'yaxshi']


// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == 'string') {
//     console.log('String index:', i)
//   }
// }

// myArray.forEach((item, i) => {
//   if (typeof item == 'string') {
//     console.log('String index:', i)
//   }
// })

// 2-mashq

// Kutilyotganlar: [1, 2, 3, 4, 5, 6]
// let data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// let new = []

// data.forEach((item) => {
//   let res = Array.isArray(item)
//   if (res) {
//     item.forEach((num) => {
//       new.push(num)
//     })
//   }
// })

// console.log(new)



// 4-mashq

// [null, 0, "", false, undefined, NaN]



// let Data = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// let res = []

// Data.forEach((item) => {
//   if (!item) {
//     res.push(item)
//   }
// })

// console.log(res)


// 4-misol


// Berilgan qiymat: 'samarqand'
// Kutilyotgan qiymat : 'dnaqramas'

// let word = 'samarqand'

// let splitWord = word.split('').reverse()

// let newWord = ''
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i]
// }

// console.log(newWord)



// 5-misol

// let word = prompt("gap kiriting")
// let splitWord = word.split(' ')
// let newWord = ''

// splitWord.forEach((item) => {
//  let boshi = item.charAt().toLowerCase()
// let davomi = item.slice(1).toUpperCase()

//   newWord += ' ' + boshi + davomi
// })

// console.log(newWord.trimStart())

