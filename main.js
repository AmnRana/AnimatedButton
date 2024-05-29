const mainButton= document.querySelector('.main-button')
const sun= document.querySelector('.sun')
mainButton.addEventListener('click',()=>{
    mainButton.classList.toggle('aman')
    sun.classList.toggle('moon')
})
