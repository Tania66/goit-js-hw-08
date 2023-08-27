import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');

const player = new Player(iframe);


 const onPlay = function (data) {
 localStorage.setItem("videoplayer-current-time", data.seconds);
}

const throttledOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttledOnPlay);


player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

