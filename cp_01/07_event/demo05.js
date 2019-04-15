/**
 * Created by yb
 */
const util = require('util');
const event = require('events');

function Player() {
    event.call(this);
}

util.inherits(Player, event);

const player = new Player();

player.on('pause', () => {
    console.log('paused');
});

player.on('play', () => {
    console.log('playing');
})

player.emit('play');