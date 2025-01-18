

const Sobremi = document.querySelectorAll(`.Sobremi-efect`)

console.log(Sobremi)


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

Sobremi.forEach((_ , i)=>{
    observer.observe(Sobremi[i])
})

const AboutEfect = document.querySelectorAll(`.About-efect`)

console.log(Sobremi)





