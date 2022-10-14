'use strict'

let active = document.querySelector('.active')
const navsBtn = document.querySelector('.navs')
const cards = document.querySelector('.song-cards')
const threeDot = document.querySelector('.three-dot')
const playBtn = document.getElementsByClassName('.play')
const homeBtn = document.querySelector('.homebtn')
const playListBtn = document.querySelector('.playListbtn')
const favBtn = document.querySelector('.favbtn')



cards.addEventListener('mouseover', (event) => {
    event.preventDefault();
    threeDot.style.display = 1;
    playBtn.style.display = 1
})


homeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    active = document.querySelector('.active')
    if (!event.target.classList.contains('active')) {
        active.classList.remove('active')
        event.target.classList.add('active')
    }

})

favBtn.addEventListener('click', (event) => {
    event.preventDefault()
    active = document.querySelector('.active')
    if (!event.target.classList.contains('active')) {
        active.classList.remove('active')
        event.target.classList.add('active')
    }

})

playListBtn.addEventListener('click', (event) => {
    event.preventDefault()
    active = document.querySelector('.active')
    if (!event.target.classList.contains('active')) {
        active.classList.remove('active')
        event.target.classList.add('active')
    }

})

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}