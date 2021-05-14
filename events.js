const { EventEmitter } = require('events');

class Kettle extends EventEmitter {
    start = () => {
        setTimeout(()=>{
            this.emit('ready', {}); 
        }, 3000);
    }
}

const k = new Kettle();
k.start();

k.on('ready', ()=>{
    console.log('Чайник скипел');
});