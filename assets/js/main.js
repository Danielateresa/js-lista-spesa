/* Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, 
in particolare alla variabile di indice. */


//array
const shoppingList = [
    'insalata',
    'carote',
    'latte',
    'pane',
    'patatine',
    'affettati'
]

//stampare la lista della spesa utilizzando il ciclo while
let i = 0;
while (i < shoppingList.length) {

    listItem = shoppingList[i];
    console.log(listItem);

    i++
}
