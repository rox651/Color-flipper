
// botones de colores
const btnPrimary = document.getElementById('primarios')
const btnSecondary = document.getElementById('secundarios')
const btnRandom = document.getElementById('aleatorio')

// contenido
let color = document.querySelector('.color')

//colores primarios,secundarios,terciarios
const colorsPrimary = ['red','yellow','blue']
const colorsSecondary = ['green','purple','orange']
const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


//funciones de todos los botones
btnPrimary.addEventListener('click',function(){colors(colorsPrimary)})
btnSecondary.addEventListener('click',function(){colors(colorsSecondary)})
btnRandom.addEventListener('click',function(){
    let hexSimbol = '#'
    for (let i = 0; i < 6; i++) {
     hexSimbol += hexa[ramdomNumberHexa()]   
    }
    color.textContent = hexSimbol
    document.body.style.backgroundColor = hexSimbol
})


function colors(array){
    let index = ramdomNumber()
    let getColor = array[index]
    color.textContent = getColor
    document.body.style.backgroundColor = getColor
}


//numero ramdom usado para obtener un numero aleatorio y asi usar este mismo como indice para algún array
function ramdomNumber(){
    return Math.floor(Math.random() * colorsPrimary.length)
}
function ramdomNumberHexa(){
    return Math.floor(Math.random() * hexa.length)
}