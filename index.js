// HTTP Module

const http=require('http')

const server=http.createServer((request,response)=>{
  if(request.url==='/'){
    response.write("Hello Sajib Sarker");
    response.end();
  }

  if(request.url==='/sajibinfo'){
    response.write(JSON.stringify([
      {name:'Sajib Sarker',
    age:25},
    {name:'Santha Sarker',age:22}

    ]))
    response.end();
  }
});

server.listen(3000);

console.log("Listening On Port :3000");
