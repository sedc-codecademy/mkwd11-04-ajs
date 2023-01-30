const prvTest = 'prvTest';
const niza = [];

//napolni ja nizata so 100 milioni elementi
for (let i = 0; i < 100000000; i++) {
    niza.push(i);
}


//console time go povikuvame ako sakame nekade ponatamu da povikame console.timeEnd() so istata vrednost zza da izmerime izvrsuvanje na kod
console.time(prvTest);

// for loop e naj efikasen, no najmalku citliv, za volkavi vrednosti osobeno pravi razika, za pomali, nikakva

// 202ms
// for (let i = 0; i < niza.length; i++) {
//     niza[i] += 1;
// }


//for of loopot e najslab na performance

// 2000 ms
// for (let element of niza) {
//     element += 1;
// }


//forEach high order funkcijata ni e po dobra od for of loop i sekogas treba da ja koristime za vrtenje nizi

// 1500ms
// niza.forEach((element) => element += 1);


//while loop e isto taka dosta brz, no ne tolku kolku for loop i e po ne citliv sekako

// 342ms
// let i = 0;
// while (i < niza.length) {
//     niza[i] += 1;
//     i++;
// }

console.timeEnd(prvTest)
console.log(`Test ended for array length of ${niza.length}`)