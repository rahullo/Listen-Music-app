'use strict'

let backBtn = document.querySelector('.back-btn')
let forwardBtn = document.querySelector('.forward-btn')
let img = document.querySelector('.artist-img')
let mainFrame = document.getElementsByClassName('main-frame')
let main = document.getElementById("3");
let aboutArtist = document.querySelector('.about-artist')
let about = document.querySelector('.about')


let artistData = {
    1: 'Arijit Singh is an Indian singer and music composer. He sings predominantly in his native Bengali and Hindi, but has also performed in various other Indian languages. He is the recipient of a National Award and six Filmfare Awards. ',
    2: 'Neha Kakkar Singh, is an Indian playback singer. She is the younger sister of playback singer Sonu Kakkar. She began performing at a very early age at religious events. In 2005, she participated in the second season of the singing reality show, Indian Idol.',
    3: 'Justin Drew Bieber is a Canadian singer. Bieber is widely recognized for his genre-melding musicianship and has played an influential role in modern-day popular music. ',
    4: 'Ariana Grande-Butera[note 1] AR-ee-AH-nə GRAHN-day; born June 26, 1993) is an American singer, songwriter, and actress. Her four-octave vocal range has received critical acclaim, and her personal life has been the subject of widespread media attention. ',
    5: 'Selena Marie Gomez is an American singer, songwriter, and actress. Gomez began her acting career on the childrens television series Barney & Friends. In her teenage years, she rose to prominence for her lead role as Alex Russo in the Disney Channel television series Wizards of Waverly Place.'
}

let artistName = {
    1: 'Arijit Singh',
    2: 'Neha Kakkar Singh',
    3: 'Justin Drew Bieber',
    4: 'Ariana Grande-Butera',
    5: 'Selena Marie Gomez'
}

let html = ` `;

let AboutArtist = function(id) {
    about.insertAdjacentHTML("afterbegin", html);
    console.log(id);
    html = `
            <h2>${artistName[id]}</h2>
            <p>${artistData[id]}</p>
    `;
    about.insertAdjacentHTML("afterbegin", html);

}




backBtn.addEventListener('click', (event) => {
    console.log('back button', event);
})

forwardBtn.addEventListener('click', (event) => {
    console.log('forward button', event);
})

img.addEventListener('mouseover', (event) => {
    event.preventDefault();
    let id = event.target.id;

    if (event.target.classList.contains('art-img')) {
        event.target.classList.add('main-frame')
        AboutArtist(id)
    }

})

img.addEventListener('mouseout', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('art-img')) {
        event.target.classList.remove('main-frame')
    }

})