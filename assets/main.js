// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


let bici = [

    {
        'nome' : 'carlotta',
        'peso' : 2
    }, 
    
    {
        'nome' : 'pierina',
        'peso' : 1
    },

    {
        'nome' : 'pzr-5',
        'peso' : 3
    },

]

console.log(bici[1])

const stampa = bici[1]


document.querySelector('body').innerHTML = `<h2>${stampa.nome} ${stampa.peso}</h2>`



// Snack2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:

// Punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



let squadre = [
    {
        'nome' : 'Torino',
        'punti' : 0,
        'falli' : 0,
    },
    {
        'nome' : 'Milan',
        'punti' : 0,
        'falli' : 0,
    },
    {
        'nome' : 'Spezia',
        'punti' : 0,
        'falli' : 0,
    },
    {
        'nome' : 'Inter',
        'punti' : 0,
        'falli' : 0,
    },
]

for ( let i = 0; i < squadre.length; i++){

    let randomPunti = Math.floor(Math.random()*10)
    let randomFalli = Math.floor(Math.random()*10)

    squadre[i].punti = randomPunti;

    squadre[i].falli = randomFalli;

}

console.log(squadre)