console.log('Welcome');

let songIndex = 0;
let audioEl = new Audio('songs/[Songs.PK] Ek Tha Tiger - 02 - Laapata.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar= document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:'Laapata', songPath:'songs/[Songs.PK] Ek Tha Tiger - 02 - Laapata.mp3', coverPath:'covers/Ek Tha Tiger - Cover.jpg'},
    {songName:'Hamari Adhuri Kahani', songPath:'songs/01 - HAK - Hamari Adhuri Kahani [DJMaza.Info].mp3', coverPath:'covers/Hamari Adhuri Kahani (2015).jpg'},
    {songName:'Mann Bharryaa 2.0', songPath:'songs/Mann Bharryaa 2.0.mp3', coverPath:'covers/Shershaah (2021).jpg'},
    {songName:'Jai Jai Jai Jai Ho', songPath:'songs/07 - Jai Ho - Jai Jai Jai Jai Ho [DJMaza.Info].mp3', coverPath:'covers/Jai Ho (2014).png'},
    {songName:'Duniyaa', songPath:'songs/Duniyaa - Songs.PK - 128Kbps.mp3', coverPath:'covers/Luka Chuppi.png'},
    {songName:'Shayad (Aaj Kal)', songPath:'songs/Shayad (Aaj Kal) - Songs.pk - 128Kbps.mp3', coverPath:'covers/Love Aaj Kal (2020).png'},
    {songName:'Hud Hud Dabangg', songPath:'songs/[Songs.PK] Dabangg - 04 - Hud Hud Dabangg.mp3', coverPath:'covers/Dabangg - Front.jpg'},
    {songName:'Surili Akhiyon Wale', songPath:'songs/[Songs.PK] Veer - 02 - Surili Akhiyon Wale.mp3', coverPath:'covers/Veer 2010.jpg'},
    {songName:'Tera Hone Laga Hoon', songPath:'songs/Duniyaa - Songs.PK - 128Kbps.mp3', coverPath:'covers/Ajab Prem Ki Ghazab Kahani.jpg'},
    {songName:'Jalwa', songPath:'songs/wanted05(www.songs.pk).mp3', coverPath:'covers/Wanted 2009.jpg'},
]

songItem.forEach((e, i)=>{
    console.log(e , i)
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    e.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioEl.paused || audioEl.currentTime <= 0){
        audioEl.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;        
    }
    else{
        audioEl.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioEl.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    let progress = parseInt((audioEl.currentTime/audioEl.duration)*100);
    console.log(progress)
    progressBar.value=progress;
})

progressBar.addEventListener('change', ()=>{
    audioEl.currentTime = progressBar.value * audioEl.duration /100
})