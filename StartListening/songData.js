const song = document.querySelector('.song')

const data = [{
        'id': 1,
        'song': 'Manike',
        'song-artist': 'Yohani, Jubin Nautiyal',
        'song-img': '#'
    },
    {
        'id': 2,
        'song': 'Mohini',
        'song-artist': 'Monika Verma',
        'song-img': '#'
    },
    {
        'id': 3,
        'song': 'Mueva La Cintura',
        'song-artist': 'Pitbull, Guru Randhawa',
        'song-img': '#'
    },
    {
        'id': 4,
        'song': 'No Love',
        'song-artist': 'Shubh',
        'song-img': '#'
    },
    {
        'id': 5,
        'song': 'Shake Karaan',
        'song-artist': 'Meet Bros, Kanika Kapoor',
        'song-img': '#'
    },
    {
        'id': 6,
        'song': 'Slow Slow',
        'song-artist': 'Badshah, Payal Dev',
        'song-img': '#'
    },
    {
        'id': 7,
        'song': 'Taki Taki',
        'song-artist': 'DJ Snake, Selena Gomej, Cardi B',
        'song-img': '#'
    },
    {
        'id': 8,
        'song': 'Tatto Waaliye',
        'song-artist': 'Neka kakkar, pardeep singh',
        'song-img': '#'
    },
    {
        'id': 9,
        'song': 'Thoda Thoda Pyaar',
        'song-artist': 'Stebin Ben',
        'song-img': '#'
    },
    {
        'id': 10,
        'song': 'Tinku Jiya',
        'song-artist': 'Unknown',
        'song-img': '#'
    },
    {
        'id': 11,
        'song': 'Waalian',
        'song-artist': 'Harnoor',
        'song-img': '#'
    },
]


export const songList = (data) => {
    data.map(el => {
        const html = `
        <div id='${el.id}' class="song-card">
            <img src="" alt="" class="${el.song-img}">
            <div class="song-name">${el.song}: ${el.song-artist}</div>
        </div>
        `
        song.insertAdjacentElement('afterend', html)
    })
}