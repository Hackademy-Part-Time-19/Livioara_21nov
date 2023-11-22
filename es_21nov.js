//Traccia 1//


let listaProdotti = [

    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
];

let orderListaNome = listaProdotti.sort((a,b) => a.nome.localeCompare(b.nome));

console.log("Lista ordinata per nome");
console.log(orderListaNome);

//Ordine lista per prezzo//
let ordineListaPrezzo = listaProdotti.sort((a,b) => a.prezzo - b.prezzo);

console.log("Lista ordinata per prezzo");
console.log(ordineListaPrezzo);

//Senza metodo filter e con l'utilizzo di una funzione//

function filterProdottixPrezzo(prodotti1, prezzo1) {
    let filterPrezzoLista = [];
    
    for (let i = 0; i < prodotti1.length; i++) {
        if (prodotti1[i].prezzo > prezzo1) {
            filterPrezzoLista.push(prodotti1[i]);
        }
    }
    
    return filterPrezzoLista;
}

let filteredLista = filterProdottixPrezzo(listaProdotti, 250);

console.log("Lista filtrata con prezzo > 250 senza usare il metodo filter e con l'utilizzo di una funzione");
console.log(filteredLista);


//L'uso di filter//

let listFilterPrezzo = listaProdotti.filter((list) => list.prezzo > 250) 

console.log("Lista filtrata con prezzo > 250 usando metodo filter");
console.log(listFilterPrezzo);





//traccia3//

let url =  " https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999 "

let urlSplit = url.split ( "?")

console.log (urlSplit)

let valori = urlSplit[1].split ("&")

console.log (valori)

valori.forEach ( function(valori) {
let valoriSplit = valori.split ("=") 
console.log (valoriSplit[1] )
})