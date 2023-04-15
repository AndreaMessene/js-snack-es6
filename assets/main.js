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