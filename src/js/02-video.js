import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const STORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(
  JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds || 0
);

player.on('timeupdate', throttle((timeupdate) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate));
  }, 1000)
);
