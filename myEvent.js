const EventEmitter=require('events');

class MyEvent extends EventEmitter{

  function1=()=>{
    this.emit('event1');

}
}

module.exports=MyEvent;