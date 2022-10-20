// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


console.log('hello');
function generapassword(){
console.log('ciao');
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    const price = 0.21;
    let total = km * price;

    // sconto 20%
    let totaldiscount20 = (total / 100) * 20;
    let discount20 = total - totaldiscount20;

    // sconto40%
    let totaldiscount40 = (total / 100) * 40;
    let discount40 = total - totaldiscount40;


    if (age == "MINORENNE"){
        total = discount20.toFixed(2);
    }
    
    else if (age == "OVER 65"){
         total = discount40.toFixed(2);
    }
    
    else{
    total
    }

    document.getElementById('displayinfo2').innerHTML = name;
    document.getElementById('displayinfo').innerHTML = total + "€";



    
}


// Cosa viene visualizzato:

