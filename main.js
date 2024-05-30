const mainButton= document.querySelector('.main-button')
const sun= document.querySelector('.sun')
const earth=document.querySelector('.earth')
mainButton.addEventListener('click',()=>{
    mainButton.classList.toggle('aman')
    sun.classList.toggle('moon')
    earth.classList.toggle('main-container')
})
