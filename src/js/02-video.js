import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');

const player = new Player(iframe);


 const onPlay = function (data) {

 localStorage.setItem("videoplayer-current-time", data.seconds);
 
}

const throttledOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttledOnPlay);



const currentTime = Number(localStorage.getItem('videoplayer-current-time'));


player.setCurrentTime(currentTime).then(function (seconds) {
   
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});