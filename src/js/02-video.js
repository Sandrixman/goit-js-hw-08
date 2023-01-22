import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {});

const STORAGE_KEY = 'videoplayer-current-time';

const time = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (time) {
  player.setCurrentTime(time.seconds);
}

player.on('timeupdate', throttle((timeupdate) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate));
  }, 1000)
);
