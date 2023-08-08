import express from 'express'
//import * as memorySet from './test/1_memory.js';

const app = express();

app.get('/', (request, response)=>{
    response.send('HELLO EXPRESS');
});

app.listen(8000, ()=>{
    console.log("服务已启动, 监听8000")
});