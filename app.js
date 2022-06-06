const container = document.querySelector('.container')
const containerImages = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

let counter = 0

containerImages.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
})

nextBtn.addEventListener('click', () => {
    counter++
    slider()
})

nextBtn.addEventListener('keydown', e => {
    if(e.keyCode === 39) {
        counter++
        slider()
    }
})

prevBtn.addEventListener('click', () => {
    counter--
    slider()
})

prevBtn.addEventListener('keydown', e => {
    if(e.keyCode === 37) {
        counter--
        slider()
    }
})

function slider() {
    if(counter == containerImages.length) {
        counter = 0
    }
    if(counter < 0) {
        counter = containerImages.length - 1
    }
    containerImages.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}