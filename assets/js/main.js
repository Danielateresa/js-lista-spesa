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
];

//stampare la lista della spesa utilizzando il ciclo while
let i = 0;
while (i < shoppingList.length) {

    listItem = shoppingList[i];
    //console.log(listItem);

    //aggiungo i li al DOM con la struttura tag
    const liEl = `<li>${listItem}</li>`;
    //console.log(liEl);

    //seleziono il nodo ul dal DOM inserendolo in una cìcostante
    const ulEl = document.querySelector('ul');
    //attacco all'ul i li contenenti le varie voci spesa
    ulEl.insertAdjacentHTML('beforeend', liEl);

    i++
}
