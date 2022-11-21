'use strict'

// Navs buttons
const navsBtn = document.querySelector('.navs')
const homeBtn = document.querySelector('.homebtn')
const playListBtn = document.querySelector('.playListbtn')
const favBtn = document.querySelector('.favbtn')
let active = document.querySelector('.active')

//Cards button
const cards = document.querySelector('.song-cards')
const threeDot = document.querySelector('.three-dot')
const playBtn = document.querySelector('.play')


//Navs feature implementation

homeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    active = document.querySelector('.active')
    if (!event.target.classList.contains('active')) {
        active.classList.remove('active')
        event.target.classList.add('active')
    }
    document.querySelector('.mainbar-background-page1-img').style.display = '1'
    document.querySelector('.mainbar-background-page2-img').style.display = 'none'

})


playListBtn.addEventListener('click', (event) => {
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


//Cards feature implementation


cards.addEventListener('mouseover', (event) => {
    event.preventDefault();
    console.log("Mouse hover happen!!!");
    threeDot.style.display = 1;
    playBtn.style.display = 1
})


// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
// }

playBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Playbtn clicked!!");
    document.querySelector('.mainbar-background-page1-img').style.display = 'none'
    document.querySelector('.mainbar-background-page2-img').style.display = '1'

})


// Changing background Picture

let artistList = ['arijit', 'badshah', 'shreya', 'honeysingh', 'jubin', 'justinbieber', 'neha', 'palak', 'salim']

let i = 0

const changingBackground = (index) => {
    document.querySelector('.mainbar-background-page1-img').style.backgroundImage = `url('../img/artistimg/${artistList[index]}.jpg')`
}


const looper = function() {
    setTimeout(() => {
        if (i < artistList.length) {
            changingBackground(i)
            i += 1
        }
        display()
    }, 2000)
}


const display = () => {
    if (i === artistList.length) {
        i = 0
    }
    looper()

}

// display()