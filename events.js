const { EventEmitter } = require('events');

class Kettle extends EventEmitter {
    start = () => {
        setImmediate(()=>{
            this.emit('setImmediate', {}); 
        });

        process.nextTick(()=>{
            this.emit('process.nextTick', {}); 
        });

        setTimeout(()=>{
            this.emit('setTimeout', {}); 
        },0);
    }
}

const k = new Kettle();
k.start();

k.on('setImmediate', ()=>{
    console.log('setImmediate');
});

k.on('process.nextTick', ()=>{
    console.log('process.nextTick');
});

k.on('setTimeout', ()=>{
    console.log('setTimeout');
});