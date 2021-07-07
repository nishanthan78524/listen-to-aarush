
document.querySelector("img").addEventListener("click", playSong);

var song1 = new Audio("songs/aarush1.mpeg");
var song2 = new Audio("songs/aarush2.mpeg");
var song3 = new Audio("songs/aarush3.mpeg");
var song4 = new Audio("songs/aarush4.mpeg");
var song5 = new Audio("songs/aarush5.mpeg");
var song6 = new Audio("songs/aarush6.mpeg");
var song7 = new Audio("songs/aarush7.mpeg");
var song8 = new Audio("songs/aarush8.mpeg");
var song9 = new Audio("songs/aarush9.mpeg");

function playSong(){

    var songNumber = Math.floor(Math.random()*9)+1;

    document.querySelector("img").classList.add("pressed");

    setTimeout(function(){
        document.querySelector("img").classList.remove("pressed")
    },200);

    switch(songNumber){

        case 1:
            document.querySelector("img").setAttribute("src", "images/aarush1.jpg");
            stopSong();
            song1.play();
            break;
        case 2:
            document.querySelector("img").setAttribute("src", "images/aarush2.jpeg");
            stopSong();
            song2.play();
            break;
        case 3:
            document.querySelector("img").setAttribute("src", "images/aarush3.jpeg");
            stopSong();
            song3.play();
            break;
        case 4:
            document.querySelector("img").setAttribute("src", "images/aarush4.jpg");
            stopSong();
            song4.play();
            break;
        case 5:
            document.querySelector("img").setAttribute("src", "images/aarush5.jpeg");
            stopSong();
            song5.play();
            break;
        case 6:
            document.querySelector("img").setAttribute("src", "images/aarush6.jpeg");
            stopSong();
            song6.play();
            break;
        case 7:
            document.querySelector("img").setAttribute("src", "images/aarush7.jpeg");
            stopSong();
            song7.play();
            break;
        case 8:
            document.querySelector("img").setAttribute("src", "images/aarush8.jpeg");
            stopSong();
            song8.play();
            break;
        case 9:
            document.querySelector("img").setAttribute("src", "images/aarush9.jpeg");
            stopSong();
            song9.play();
            break;    
        default: song.pause();
    }
}

function stopSong(){
    song1.pause();
    song1.currentTime = 0;

    song2.pause();
    song2.currentTime = 0;

    song3.pause();
    song3.currentTime = 0;

    song4.pause();
    song4.currentTime = 0;

    song5.pause();
    song5.currentTime = 0;

    song6.pause();
    song6.currentTime = 0;

    song7.pause();
    song7.currentTime = 0;

    song8.pause();
    song8.currentTime = 0;

    song9.pause();
    song9.currentTime = 0;
}


