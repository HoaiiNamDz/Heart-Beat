const PLAYER_STORAGE_KEY = 'PLAYER';
const closeBarBtn = document.querySelector('.fa-solid.fa-bars-staggered');
const openBarBtn = document.querySelector('.fa-solid.fa-bars');
const catagory = document.querySelector('.catagory');
const catagoryWidth = catagory.clientWidth;
const catagoryInfo = document.querySelector('.catagory__info');
const catagoryList = document.querySelector('.catagory__list');
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headContentList = document.querySelector('.head__content-list');
const rangeBar = document.getElementById('range');
const song = document.getElementById('song');
const playBtn = document.querySelector('.fa-solid.fa-play');
const timeLeft = document.querySelector('.left-time');
const timeRight = document.querySelector('.right-time');
const playList = document.querySelector('.content__popular-song-list');
const albumsList = document.querySelector('.head__content-list');

const musics = [
    {
        id: 0,
        number: '01',        
        image: './assets/img/songs/grayD-song.jpg',
        file: './assets/mp3/vaicaunoicokhiennguoithaydoi.mp3',
        name: 'vaicaunoicokhiennguoithaydoi',
        singer: 'GrayD ft Tlinh',
        time: '3:56',
        active: false
    },
    {
        id: 1,
        number: '02',        
        image: './assets/img/songs/grayD-dubao.jpg',
        file: './assets/mp3/dubaothoitiethomnaymua.mp3',
        name: 'Dự báo thời tiết hôm nay mưa',
        singer: 'GrayD',
        time: '4:52',
        active: false
    },
    {
        id: 2,
        number: '03',        
        image: './assets/img/songs/MTP-eqnhq.png',
        file: './assets/mp3/emcuangayhomqua.mp3',
        name: 'Em của ngày hôm qua',
        singer: 'Sơn Tùng M-TP',
        time: '3:46',
        active: false
    },
    {
        id: 3,
        number: '04',        
        image: './assets/img/songs/hth-nmm.jpg',
        file: './assets/mp3/ngumotminh.mp3',
        name: 'ngủ một mình',
        singer: 'HIEUTHUHAI ft negav',
        time: '3:26',
        active: false
    },
    {
        id: 4,
        number: '05',        
        image: './assets/img/songs/vnat-justa.jpg',
        file: './assets/mp3/venhaantet.mp3',
        name: 'Về nhà ăn Tết',
        singer: 'BigDaddy ft JustaTee',
        time: '3:48',
        active: false
    },
    {
        id: 5,
        number: '06',        
        image: './assets/img/songs/tc-mrt.jpg',
        file: './assets/mp3/thucuoi.mp3',
        name: 'Thu cuối',
        singer: 'Mr.T ft Yanbi',
        time: '4:45',
        active: false
    },
    {
        id: 6,
        number: '07',       
        image: './assets/img/songs/tvs-mck.jpg',
        file: './assets/mp3/taivisao.mp3',
        name: 'Tại vì sao',
        singer: 'MCK',
        time: '3:24',
        active: false
    },
    {
        id: 7,
        number: '08',        
        image: './assets/img/songs/chvtx-monsta.jpg',
        file: './assets/mp3/cohenvoithanhxuan.mp3',
        name: 'Có hẹn với thanh xuân',
        singer: 'MONSTAR',
        time: '3:36',
        active: false
    },
    {
        id: 8,
        number: '09',        
        image: './assets/img/songs/vvgdn-mck.jpg',
        file: './assets/mp3/vavaogiaidieunay.mp3',
        name: 'Va vào giai điệu này',
        singer: 'MCK',
        time: '3:10',
        active: false
    },
    {
        id: 9,
        number: '10',        
        image: './assets/img/songs/khó-nc.jpg',
        file: './assets/mp3/kho.mp3',
        name: 'Khó',
        singer: 'Nam Cường',
        time: '3:58',
        active: false
    },
    {
        id: 10,
        number: '11',
        image: './assets/img/songs/rtsnphcn.jpg',
        file: './assets/mp3/roitasengamphaohoacungnhau.mp3',
        name: 'Rồi ta sẽ ngắm pháo hoa cùng nhau',
        singer: 'O.lew',
        time: '4:42',
        active: false
    },
    {
        id: 11,
        number: '12',
        image: './assets/img/songs/pano-zack.jpg',
        file: './assets/mp3/pano.mp3',
        name: 'Pano',
        singer: 'Zack Tabudlo',
        time: '4:24',
        active: false
    },
    {
        id: 12,
        number: '13',
        image: './assets/img/songs/cd-hngle.jpg',
        file: './assets/mp3/codon.mp3',
        name: 'Co don',
        singer: 'Hngle ft @NIZOfficial14 ft Ari',
        time: '3:51',
        active: false
    },
    {
        id: 13,
        number: '14',
        image: './assets/img/songs/cuoidi-2t.jpg',
        file: './assets/mp3/cuoidi.mp3',
        name: 'Cưới đi',
        singer: '2T ft Changg',
        time: '3:53',
        active: false
    }, 
    {
        id: 14,
        number: '15',
        image: './assets/img/songs/neulucdo-tlinh.jpg',
        file: './assets/mp3/neulucdo.mp3',
        name: 'nếu lúc đó',
        singer: 'tlinh ft. 2pillz',
        time: '5:24',
        active: false
    }, 
    {
        id: 15,
        number: '16',
        image: './assets/img/songs/anhdaonhon-mck.png',
        file: './assets/mp3/anhdaonhon.mp3',
        name: 'Anh Đã Ổn Hơn',
        singer: 'RPT MCK',
        time: '3:14',
        active: false
    }, 
]

const albums = [
    {
        id: 0,
        name: 'Bray Album',
        actor: 'Bray',
        image: './assets/img/album/album-bray.jpg'
    },
    {
        id: 1,
        name: 'M-TP Album',
        actor: 'Sơn Tùng M-TP',
        image: './assets/img/album/album-mtp.jpg'
    },
    {
        id: 2,
        name: 'Mono Album',
        actor: 'Mono',
        image: './assets/img/album/album-mono.jpg'
    },
    {
        id: 3,
        name: 'Wxrdie Album',
        actor: 'Wxrdie',
        image: './assets/img/album/album-wxrdie.png'
    },
    {
        id: 4,
        name: 'Hoàng Thùy Linh Album',
        actor: 'Hoàng Thùy Linh',
        image: './assets/img/album/album-htl.jpg'
    },
    {
        id: 5,
        name: 'Soobin Hoàng Sơn Album',
        actor: 'Soobin Hoàng Sơn',
        image: './assets/img/album/album-soobin.jpg'
    },
]
//==============================================
//       LƯU CẤU HÌNH CONFIG VÀO ỨNG DỤNG
//==============================================
config = JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {};
function setConfig(key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
}
function loadConfig() {
    this.isRepeat = this.config.isRepeat;
    this.isLike = this.config.isLike;
}
loadConfig()

//==============================================
//                 RENDER ALBUM
//==============================================
const albumContainer = document.querySelector('.head__content-list-container')
let indexAlbum = 0
function renderAlbum() {
    const htmlss = albums.map((album, index) => {
        return `
            <a href="" class="head__content-item-wrapper ${index === indexAlbum ? 'active' : ''}">
                <img src="${album.image}" alt="" class="head__content-item-img">
                <span class="head__content-item-title-album">${album.name}</span>
                <span class="head__content-item-actor">${album.actor}</span>
            </a>
        `
    });
    albumContainer.innerHTML = htmlss.join('');

}
renderAlbum()

//==============================================
//            PREV/NEXT ALBUMS SONG
//==============================================
const albumItem = document.querySelector('head__content-item-wrapper')
const prevAlbumBtn = document.querySelector('.fa-chevron-left')
const nextAlbumBtn = document.querySelector('.fa-chevron-right')
let width = albumsList.offsetWidth;
let index = 0;

window.addEventListener('resize', () => {
    width = albumsList.offsetWidth;
})

nextAlbumBtn.addEventListener('click',(event) => {
    event.preventDefault();
    index +=1;
    console.log(getAlbumItem())
    albumItem.style.transform = 'translateX(" + index * -width + "px)';
    if(indexAlbum >= albums.length) {
        indexAlbum = 0
    }
})

prevAlbumBtn.addEventListener('click', () => {
    index -=1;
    albumItem.style.transform = 'translateX(" + index * -width + "px)';
})


//==============================================
//             SET MẶC ĐỊNH BÀI ĐẦU
//==============================================
let indexSong = 0;
song.setAttribute('src', `${musics[indexSong].file}`);

//==============================================
//             RENDER BÀI HÁT
//==============================================
function renderSong() {
    const htmls = musics.map((music, index) => {
        return `
            <div href="" class="content__popular-song-item-info ${index === indexSong ? 'active' : ''}" data-index=${music.id}>
                <span class="content__popular-song-item-rank">${music.number}</span>
                <img src="${music.image}" alt="" class="content__popular-song-item-img">
                <i class="content__popular-song-item-icon fa-solid fa-caret-right"></i>
                <span class="content__popular-song-item-song">${music.name}</span>
                <span class="content__popular-song-item-actor">${music.singer}</span>
                <span class="content__popular-song-item-time">${music.time}</span>
            </div>
        `
    });
    playList.innerHTML = htmls.join('');
}
renderSong()

//==============================================
//    ACTIVE SONG TỰ NHẢY LÊN TRONG PLAYLIST
//==============================================
function scrollToActiveSong() {
    setTimeout(() => {
        document.querySelector('.content__popular-song-item-info.active').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    },200)
}
//==============================================
//                  XỬ LÝ CD
//==============================================
const nowPlayingDisc = document.querySelector('.content__song-now-playing-disc');
const cdThumb = document.querySelector('.content__song-now-playing-disc-img');
const cdNameSong = document.querySelector('.content__song-now-playing-disc-song');
const cdSinger = document.querySelector('.content__song-now-playing-disc-actor')

function loadCurrentSong() {
    cdThumb.src =  `${musics[indexSong].image}`;
    cdNameSong.textContent = `${musics[indexSong].name}`;
    cdSinger.textContent = `${musics[indexSong].singer}`;
    song.setAttribute('src', `${musics[indexSong].file}`);
}
loadCurrentSong();
// CD QUAY
const cdThumbAnimate = cdThumb.animate([
    { transform: 'rotate(360deg)' }
], {
    duration: 10000,
    iterations: Infinity
})
cdThumbAnimate.pause();

//==============================================
//             PLAY/PAUSE BÀI HÁT
//==============================================
let isPlaying = false;
playBtn.onclick = function() {
    if(isPlaying) {
        song.pause()
    } else {
        song.play()
    }
}

window.onkeydown = function(event) {
    if(event.keyCode === 32 && isPlaying === false) {
        song.play();
    } else if(isPlaying === true && event.keyCode === 32){
        song.pause()
    }
}

song.onplay = function() {
    isPlaying = true;
    playBtn.classList.remove('fa-play')
    playBtn.classList.add('fa-pause');
    cdThumbAnimate.play();
}

song.onpause = function() {
    isPlaying = false
    playBtn.classList.add('fa-play');
    playBtn.classList.remove('fa-pause')
    cdThumbAnimate.pause();
}

//==============================================
//            SET THỜI GIAN PHÁT NHẠC
//==============================================
function displayTimer() {
    const { duration, currentTime } = song;
    timeRight.textContent = formatTimer(duration);
    timeLeft.textContent = formatTimer(currentTime);
    rangeBar.max = duration;
    rangeBar.value = currentTime;
}
displayTimer();
rangeBar.value = 0;
setInterval(displayTimer, 200); 

//==============================================
//        FORMAT LẠI FORM THỜI GIAN CHẠY
//==============================================
function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    if (seconds < 10) return `${minutes}:0${seconds}`;
    else return `${minutes}:${seconds}`;
}

//==============================================
//  THAY ĐỔI KHÚC NHẠC KHI CLICK TRÊN RANGEBAR
//==============================================
rangeBar.addEventListener('change',changeBar);
function changeBar() {
    song.currentTime = rangeBar.value; 
}

//==============================================
//                PREV/NEXT SONG
//==============================================
const prevBtn = document.querySelector('.fa-backward');
const nextBtn = document.querySelector('.fa-forward');

function nextSong() {
    indexSong++;
    if(indexSong >= musics.length){
        indexSong = 0
    }
    loadCurrentSong()
    renderSong(indexSong)
} 
nextBtn.addEventListener('click', () => {
    if (isRandom == true) {
        playRandomSong(musics)
    } else {
        nextSong()
    }
    scrollToActiveSong()
    song.play()
})

function prevSong() {
    indexSong--;
    if(indexSong < 0) {
        indexSong = musics.length -1;
    }
    loadCurrentSong()
    renderSong(indexSong)
}
prevBtn.addEventListener('click', () => {
    if(isRandom == true) {
        playRandomSong(musics)
    } else {
        prevSong()
    }
    scrollToActiveSong()
    song.play()
})

//==============================================
//       TỰ PHÁT BÀI TIẾP KHI KẾT THÚC
//==============================================
song.addEventListener('ended', function() {
    if(isRepeat == true) {
        isPlaying = true;
        song.play()
    } else {
        nextSong();
        song.play();
    }
})

//==============================================
//                REPEAT SONG
//==============================================
const repeatBtn = document.querySelector('.ti-loop');
isRepeat = false;
repeatBtn.onclick = function() {
    if(!isRepeat) {
        repeatBtn.classList.add('active')
        isRepeat = true
    } else {
        repeatBtn.classList.remove('active')
        isRepeat = false
    }
    setConfig('isRepeat', isRepeat)
}

//==============================================
//                RANDOM SONG
//==============================================
const randomBtn = document.querySelector('.fa-random')
isRandom = false;
randomBtn.onclick = function() {
    if(!isRandom) {
        randomBtn.classList.add('active')
        isRandom = true
    } else {
        randomBtn.classList.remove('active')
        isRandom = false
    }
}

function playRandomSong(musics) {
    let newIndex  
    do {
        newIndex = Math.floor(Math.random() * musics.length)
    } while(newIndex == indexSong)

    indexSong = newIndex;
    loadCurrentSong()
    renderSong()
}
//==============================================
//          CHỌN BÀI HÁT TRONG PLAYLIST
//==============================================
playList.onclick = function(e) {
    const songNode = e.target.closest('.content__popular-song-item-info:not(.active)');
    
    if(songNode) {
        indexSong = Number(songNode.dataset.index);
        loadCurrentSong()
        renderSong()
        song.play()
    }
}

//==============================================
//                  ÂM THANH NHẠC
//==============================================
const volumeValue = document.querySelector('#range__volume');
const volumeIcon = document.querySelector('.fa-volume-high')
let isVolume = true;

function changeVolumeIcon() {
    if(volumeValue.value == 1 || volumeValue.value > 0.5) {
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.remove('fa-volume-low');
        volumeIcon.classList.add('fa-volume-high');
    } else if(volumeValue.value <= 0.5 && volumeValue.value > 0) {
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-low');
    } else if(volumeValue.value == 0){
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.remove('fa-volume-low');
        volumeIcon.classList.add('fa-volume-mute');
    }
}

volumeValue.onchange = function() {
    song.volume = volumeValue.value;
    changeVolumeIcon()
}

volumeIcon.addEventListener('click', () => {
    if(isVolume) {
        song.volume = 0;
        volumeValue.value = 0
        changeVolumeIcon();
    }
})



//==============================================
//                  SIDE BAR
//==============================================
const circleCD = document.querySelector('.circle__CD')
closeBarBtn.addEventListener('click', () => {
    const isClose = catagoryWidth === catagory.clientWidth;
    if(isClose) {
        catagory.style.width = 0;
        catagory.style.height = 0;
        catagoryInfo.style.opacity = 0;
        catagoryList.style.display = 'none';
        container.style.maxWidth = '97%';
        container.style.marginLeft = '28px';
        header.style.width = '97%';
        darkThemeBtn.style.display = 'none';
        rangeBar.style.width = '91%';
        circleCD.style.left = 0;
    }
})

openBarBtn.addEventListener('click', () => {
    const isOpen = catagoryWidth !== catagory.clientWidth;
    if(isOpen) {
        catagory.style.width = 'var(--catagory-width)';
        catagory.style.height = '100vh';
        catagoryInfo.style.opacity = 1;
        catagoryInfo.style.display = 'flex';
        catagoryList.style.display = 'block';
        container.style.maxWidth = '80%';
        container.style.marginLeft = 'auto';
        header.style.width = '80%';
        darkThemeBtn.style.display = 'block';
        rangeBar.style.width = '84%';
        circleCD.style.left = '127px';
    }
})

//==============================================
//                  DARK THEME
//==============================================
const ball = document.querySelector('.ball');
const darkThemeBtn = document.querySelector('.check');
const bodyElement = document.querySelector('body');
const catagoryTagA = document.querySelectorAll('.catagory__list a');
const nowPlayingWrapper = document.querySelector('.content__song-now-playing-body');
const containerSpanElements = document.querySelectorAll('.container span');
const headerSearch = document.querySelector('.header__search');
const headerSearchInput = document.querySelector('.header__search-input');

function ElementsWithColorWhite(catagoryTagA, containerSpanElements) {
    for(let i = 0; i < catagoryTagA.length; i++) {
        catagoryTagA[i].style.color = '#fff'
    }
    for(let i = 0; i < containerSpanElements.length; i++) {
        containerSpanElements[i].style.color = '#fff'
    }
}

function ElementsWithColorDefault(catagoryTagA, containerSpanElements) {
    for(let i = 0; i < catagoryTagA.length; i++) {
        catagoryTagA[i].style.color = ''
    }
    for(let i = 0; i < containerSpanElements.length; i++) {
        containerSpanElements[i].style.color = ''
    }
}

darkThemeBtn.addEventListener('click', () => {
    if(!bodyElement.classList.contains('darkthemes')) {
        bodyElement.classList.add('darkthemes');
        ball.style.left = '40px';
        darkThemeBtn.classList.add('active');
        ball.style.backgroundColor = '#333';
        header.style.backgroundColor = '#333';
        catagory.classList.add('darkmode');
        renderSong();
        ElementsWithColorWhite(catagoryTagA, containerSpanElements);
        nowPlayingWrapper.style.backgroundColor = '#333';
        circleCD.style.backgroundColor = '#333';
        cdNameSong.style.color = '#fff';
        headerSearch.style.backgroundColor = '#333';
        headerSearchInput.style.backgroundColor = '#333';
    } else {
        bodyElement.classList.remove('darkthemes');
        ball.style.left = '';
        darkThemeBtn.classList.remove('active');
        ball.style.backgroundColor = '';
        header.style.backgroundColor = '';
        catagory.classList.remove('darkmode');
        ElementsWithColorDefault(catagoryTagA, containerSpanElements);
        nowPlayingWrapper.style.backgroundColor = '';
        circleCD.style.backgroundColor = '';
        cdNameSong.style.color = '';
        headerSearch.style.backgroundColor = '';
        headerSearchInput.style.backgroundColor = '';
    }
})

//==============================================
//                  HIỆU ỨNG TIM
//==============================================
const heartBtns = document.querySelectorAll('.fa-solid.fa-heart')
isLike = false;
heartBtns.forEach((heartBtns) => {
    heartBtns.onclick = () => {
        heartBtns.classList.toggle('active', heartBtns.isLike);
    }
    setConfig('isLike', isLike)
})