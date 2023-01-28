const arrOfNumbers = [1, 2, 3, 4, 5];

//ova ke ni referencira do arrOfNumbers i sto i da pravime so ova
//ke se menuva i vo arrOfNumbers
const refereceToArrOfNumbers = arrOfNumbers;

//na ovoj nacin ja iskopiravme t.e. ja rashirivme cela niza vo nova niza
// i od ovoj moment nataka copyOfArrOfNumbers si e niza za sebe
const copyOfArrOfNumbers = [...arrOfNumbers];


const objekt = {
    name: 'hehe',
    lastName: 'haha',
    age: 25
}
//sto i da promenime vo referncaOdObjekt, ke se promeni vo objekt, zatoa sto 
// e ednoto isto i samo pokazuva kon referencata
const referencaDoObjekt = objekt;

//vaka se pravi kopija od objektot kade sto ke imame istite raboti od vnatre
//dokolku ne se od referenten tip
const copyOdObjekt = { ...objekt };

