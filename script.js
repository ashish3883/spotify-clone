console.log('Welcome');

let songIndex = 0;
let audioEl = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar= document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:'Laapata', songPath:'songs/1.mp3', coverPath:'covers/Ek Tha Tiger - Cover.jpg'},
    {songName:'Hamari Adhuri Kahani', songPath:'songs/2.mp3', coverPath:'covers/Hamari Adhuri Kahani (2015).jpg'},
    {songName:'Mann Bharryaa 2.0', songPath:'songs/3.mp3', coverPath:'covers/Shershaah (2021).jpg'},
    {songName:'Jai Jai Jai Jai Ho', songPath:'songs/4.mp3', coverPath:'covers/Jai Ho (2014).png'},
    {songName:'Duniyaa', songPath:'songs/5.mp3', coverPath:'covers/Luka Chuppi.png'},
    {songName:'Shayad (Aaj Kal)', songPath:'6.mp3', coverPath:'covers/Love Aaj Kal (2020).png'},
    {songName:'Hud Hud Dabangg', songPath:'7.mp3', coverPath:'covers/Dabangg - Front.jpg'},
    {songName:'Surili Akhiyon Wale', songPath:'8.mp3', coverPath:'covers/Veer 2010.jpg'},
    {songName:'Tera Hone Laga Hoon', songPath:'9.mp3', coverPath:'covers/Ajab Prem Ki Ghazab Kahani.jpg'},
    {songName:'Jalwa', songPath:'songs/10.mp3', coverPath:'covers/Wanted 2009.jpg'},
]

songItem.forEach((e, i)=>{
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
    let progress = parseInt((audioEl.currentTime/audioEl.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change', ()=>{
    audioEl.currentTime = progressBar.value * audioEl.duration /100
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
        e.classList.remove('fa-pause');
        e.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
    e.addEventListener('click', (e)=>{
        makeAllPlay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        songIndex = parseInt(e.target.id);
        audioEl.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        progressBar.currentTime= 0;
        audioEl.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioEl.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        progressBar.currentTime= 0;
        audioEl.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioEl.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        progressBar.currentTime= 0;
        audioEl.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
})