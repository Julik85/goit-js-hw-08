import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
  const timeKey = 'videoplayer-current-time';
   const timeUpdate = function (time) {
  localStorage.setItem(timeKey, time.seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const saveTime = localStorage.getItem(timeKey);
const timeStop = saveTime;

currentTime ();
function currentTime () {
  if (timeStop) {
      player.setCurrentTime(timeStop)
  };
}

// try {
//   player.setCurrentTime(timeStop.seconds || 0);
// } catch (error) {
//   console.log(error.message);
// }
   

    