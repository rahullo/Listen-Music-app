// import { songList } from "./songData"

// songList()const song = document.querySelector('.song')

const data = [
    [{
            'id': 1,
            'song': 'Manike',
            'song_artist': 'Yohani, Jubin Nautiyal',
            'song_img': 'https://c.ndtvimg.com/2022-09/5d0lbv6o_sidharth-malhotra_625x300_16_September_22.jpg'
        },
        {
            'id': 2,
            'song': 'Mohini',
            'song_artist': 'Monika Verma',
            'song_img': 'https://sptnaecdnems07.cdnsrv.jio.com/c.saavncdn.com/913/Mohni-Chhattisgarhi-2022-20220809124448-500x500.jpg'
        },
        {
            'id': 3,
            'song': 'Mueva La Cintura',
            'song_artist': 'Pitbull, Guru Randhawa',
            'song_img': 'https://m.media-amazon.com/images/M/MV5BYTQ3ODk5M2QtZDIzOS00YjQ4LWJlOTctOTBiZjBhYzcyNmQxXkEyXkFqcGdeQXVyMTM2MTMwNjc5._V1_UY264_CR144,0,180,264_AL_.jpg'
        },
        {
            'id': 4,
            'song': 'No Love',
            'song_artist': 'Shubh',
            'song_img': 'https://i.ytimg.com/vi/8NSwBRrhadc/maxresdefault.jpg'
        },
        {
            'id': 5,
            'song': 'Shake Karaan',
            'song_artist': 'Meet Bros, Kanika Kapoor',
            'song_img': '#'
        },
        {
            'id': 6,
            'song': 'Slow Slow',
            'song_artist': 'Badshah, Payal Dev',
            'song_img': '#'
        },
        {
            'id': 7,
            'song': 'Taki Taki',
            'song_artist': 'DJ Snake, Selena Gomej, Cardi B',
            'song_img': '#'
        },
        {
            'id': 8,
            'song': 'Tatto Waaliye',
            'song_artist': 'Neka kakkar, pardeep singh',
            'song_img': '#'
        },
        {
            'id': 9,
            'song': 'Thoda Thoda Pyaar',
            'song_artist': 'Stebin Ben',
            'song_img': '#'
        },
        {
            'id': 10,
            'song': 'Tinku Jiya',
            'song_artist': 'Unknown',
            'song_img': '#'
        },
        {
            'id': 11,
            'song': 'Waalian',
            'song_artist': 'Harnoor',
            'song_img': 'https://www.lyricsbell.com/wp-content/uploads/2020/08/waaliyan-harnoor.jpg'
        }
    ]
]



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

const song = document.querySelector('.song')



//Navs feature implementation

homeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    active = document.querySelector('.active')
    if (!event.target.classList.contains('active')) {
        active.classList.remove('active')
        event.target.classList.add('active')
    }
    document.querySelector('.mainbar-background-page1-img').style.display = 'block'
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
    document.querySelector('.mainbar-background-page1-img').style.display = 'none'
    document.querySelector('.mainbar-background-page2-img').style.display = 'block'

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
    }, 4000)
}


const display = () => {
    if (i === artistList.length) {
        i = 0
    }
    looper()

}

// display()



const songList = (data) => {
    console.log(data);
    data.map(el => {
        console.log(el);
        const html = `
        <div id='${el.id}' class="song-card">
            <img src="${el.song_img}" alt="" class="song-img">
            <div class="song-name">${el.song}: ${el.song_artist}</div>
        </div>
        `
        song.insertAdjacentHTML('beforeend', html);

    })
}

songList(data[0])