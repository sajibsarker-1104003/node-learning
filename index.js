//Events Module

const EventEmitter=require('events');
const emitter=new EventEmitter();

emitter.on('event1',()=>{
  console.log("Event 1 is called")
})
emitter.on('event2',(e)=>{
  console.log("Event 2 is called",e);
})

//emitter.emit('event2');

emitter.emit('event2',{
  name:'Sajib Sarker',
  age:25,
  occupat:'Node Developer'
});