
let foto = 0
// cuando hago click en el boton siguiente
        // foto++
        // .Carrouselcontainer le style transform tranlattex

const next = document.querySelector(`.Next`)
const prev = document.querySelector(`.Prev`)
const carrouselContainer = document.querySelector(`.Carrousel-container`)
const carrouselImgs = document.querySelector(`.Carrousel-img`)
console.log
let anchoImg = 100 / 3


 next.addEventListener(`click`, ()=>{
    foto++

    if(foto>= 3){
        foto=0
    }

    carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`
    console.log(foto)
})

prev.addEventListener(`click`,()=>{
    foto--

    if(foto<=-1){
        foto = 2
    }
    carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`
    console.log(foto)
})


