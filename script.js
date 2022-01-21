const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const ball = document.querySelector('.ball')
const background = document.querySelector('.container')

ball.addEventListener('click', event => {
    if(!background.classList.contains("dark")) {
        background.classList.add('dark')
        ball.classList.add('moveRight')
        ball.classList.remove('moveLeft')
    } else {
        background.classList.remove('dark')
        ball.classList.remove('moveRight')
        ball.classList.add('moveLeft')
    }
})

console.log(background.classList.contains("dark"))
 