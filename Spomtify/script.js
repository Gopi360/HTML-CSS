console.log("Welcome to Spomtify");

let songIndex = 0;
let audioElement = new Audio("Songs/Hall of Fame.mp3");
let masterPlay = document.getElementById("play");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {songName: "Hall of Fame", filePath:"Songs/Hall of Fame.mp3", coverPath: "Cover_Photos/Hall_of_Fame.jpg"},
    {songName: "Bones", filePath:"Songs/Bones.mp3", coverPath: "Cover_Photos/Bones.jpg"},
    {songName: "Photograph", filePath:"Songs/Photograph.mp3", coverPath: "Cover_Photos/Photograph.jpg"},
    {songName: "SNAP", filePath:"Songs/SNAP.mp3", coverPath: "Cover_Photos/SNAP.jpg"},
    {songName: "They Don't Know About Us", filePath:"Songs/They_Don't_Know_About_Us.mp3", coverPath: "Cover_Photos/They_Don't_Know_About_Us.jpg"},
    {songName: "One Call Away", filePath:"Songs/One Call Away.mp3", coverPath: "Cover_Photos/One_Call_Away.jpg"},
]

// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressbar.value = progress;
}) 

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//     }) 
// })

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        index = String(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${index}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

// document.getElementsById