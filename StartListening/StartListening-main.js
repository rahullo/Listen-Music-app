'use strict'

const active = document.querySelector('.active')
const navsBtn = document.querySelector('.navbtn')
const cards = document.querySelector('.song-cards')
const threeDot = document.querySelector('.three-dot')
const playBtn = document.getElementsByClassName('.play')


cards.addEventListener('mouseover', (event) => {
    event.preventDefault();
    threeDot.style.display = 1;
    playBtn.style.display = 1
})