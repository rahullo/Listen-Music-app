'use strict'

let active = document.querySelector('.active')
const navsBtn = document.querySelector('.navs')
const cards = document.querySelector('.song-cards')
const threeDot = document.querySelector('.three-dot')
const playBtn = document.querySelector('.play')
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
    document.querySelector('.mainbar-backgroung-page2-img').style.display = 'none'
    document.querySelector('.mainbar-backgroung-page1-img').style.display = '1'

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

playBtn.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('.mainbar-backgroung-page2-img').style.display = '1'
    document.querySelector('.mainbar-backgroung-page1-img').style.display = 'none'

})


// Changing background Picture

let artistList = ['arijit', 'badshah', 'shreya']

let i = 0

// let counter = () => {
//     let len = artistList.length
//     while (i < len) {
//         if (i = len - 1) {
//             i = 0
//         } else {
//             i += 1
//             return i
//         }
//     }
// }

const changingBackground = (index) => {
    document.querySelector('.mainbar-backgroung-page1-img').style.backgroundImage = `url('../img/${artistList[index]}.jpg')`
}


// const loop = () => {
//     setTimeout(function() {
//         let count = counter()
//         console.log(i, count, artistList[count]);
//         changingBackground(count)
//         loop()
//     }, 4000); //9000 = 9000ms = 9s
// };

// loop()


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