const Proyectos = document.querySelectorAll(`.Proyectos-div`)

console.log(Proyectos)


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

Proyectos.forEach((_ , i)=>{
    observer.observe(Proyectos[i])
})



console.log(Proyectos)
