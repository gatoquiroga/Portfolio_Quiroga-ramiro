
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



const gridDvis = document.querySelectorAll(`.Sobremi-efect`)

console.log(gridDvis)


let options = {
    threshold : [0.1]
}


let observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
        let{isIntersecting , target}=entry

            if (isIntersecting){
                target.classList.add(`isVisible`)
            }

    })
},options)

gridDvis.forEach((_ , i)=>{
    observer.observe(gridDvis[i])
})

const AboutEfect = document.querySelectorAll(`.About-efect`)

console.log(gridDvis)





