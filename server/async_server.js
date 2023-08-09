import express from 'express'
// import isPortAvaliable from 'is-port-available'
const SERVER_ID = 8000

const app = express();

app.get('/TestAsync', (request, response)=>{
    response.send('1');
});

app.listen(SERVER_ID, ()=>{
    console.log( `服务已启动, 监听${SERVER_ID}`)
});



