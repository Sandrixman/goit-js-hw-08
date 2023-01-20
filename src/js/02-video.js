import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds || 0
);

player.on('timeupdate', throttle((timeupdate) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));
    console.log(localStorage.getItem('videoplayer-current-time'));
  }, 1000)
);
