import { XMLHttpRequest } from 'xmlhttprequest'

export var TestName = "async";

export var Answer_TestSetTimeOut = 0;
export async function TestSetTimeOut(resolve, reject){
    var result = 0;
    function TimeOutCallBack(){
        resolve(result);

        result = 2;
    }
    setTimeout(TimeOutCallBack, 1);
    result = 1;
}

export var Answer_TestSetTimeOut2 = 0;
export async function TestSetTimeOut2(resolve, reject){
    var result = 0;
    function TimeOutCallBack(){
        result = 2;

        resolve(result);
    }
    setTimeout(TimeOutCallBack, 1);
    result = 1;
}

export var Answer_TestSetTimeOut3 = 0;
export async function TestSetTimeOut3(resolve, reject){
    var result = 0;
    function TimeOutCallBack(){
        result = 2;
    }
    function CallBackFunc(){
        resolve(result);
    }
    setTimeout(CallBackFunc, 300);
    setTimeout(TimeOutCallBack, 100);
   
    var time = new Date().getTime();
    while(new Date() - time>200){
        break;
    }
    result = 1;
}

export var Answer_TestPromise = 0;
export async function TestPromise(resolve, reject){
    var result = 0;
    var p = new Promise( (res, rej)=>{
            res(1);
        }        
     ) ;

     result = 2;
    p.then( (r)=>{
        result = r;
    } )

    resolve(result)
}

export var Answer_TestPromise2 = 0;
export async function TestPromise2(resolve, reject){
    var result = 0;
    setTimeout(
        ()=>{
            resolve(result);
        }, 200
    )
    var p = new Promise( (res, rej)=>{
            setTimeout(
                ()=>{
                    result = 1;
                    res(2)
                }, 100)
        }        
     ) ;

    p.then( (r)=>{
        result = r;
    } )
    result = 3;
}

export var Answer_TestAwaitPromise = 0;
export async function TestAwaitPromise(resolve, reject){
    var result = 0;
    setTimeout(
        ()=>{
            resolve(result);
        }, 200
    )
    var p = new Promise( (res, rej)=>{
            setTimeout(
                ()=>{
                    result = 1;
                    res(2)
                }, 100)
        }        
     ) ;

    var result = await p;
    resolve(result);
}

export var Answer_TestAwaitFunc = "0";
export async function TestAwaitFunc(resolve, reject){
    var result = 0;
    setTimeout(()=>{
        resolve(result);
    }, 200);
    
    async function Test(){
        setTimeout( ()=>{
            return 3;
        }, 100)

        return 2;
    }

    Test().then(r=>result=r);
}

export var Answer_TestAwaitFunc2 = 0;
export async function TestAwaitFunc2(resolve, reject){
    var result = 0;
    setTimeout(()=>{
        resolve(result);
    }, 200);
    
    async function Test(){
        result = 1;
        return new Promise(
            (res, rej)=>{
                setTimeout( ()=>{
                    res(2);
                }, 100 );
            }
        )
    }

    result = await Test();
}

export var Answer_TestAsyncAwait = 0;
export async function TestAsyncAwait(resolve, reject){
    var result = 0;
    async function fetchUrl(url) {
        result = 1;
        let request = await fetch(url);
        result = 2;
        result = await request.text();
    }

    fetchUrl('http://localhost:8000/TestAsync');
    resolve(result)
} 

export var Answer_TestAsyncAwait2 = 0;
export async function TestAsyncAwait2(resolve, reject){
    var result = 0;
    async function fetchUrl(url) {
        result = 3;
        let request = await fetch(url);
        result = 2;
        result = await request.text();
    }

    await fetchUrl('http://localhost:8000/TestAsync');
    resolve(result)
} 

//Launch js change to async
//CallBack Async/Await Promise
export var Answer_TestAsync = "0";
export async function TestAsync(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8000/TestAsync')
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.responseText)
    };
    xhr.onerror = function(){
        reject();
    }
}


// 使用回调函数
export async function FillIn_TestAdd1(resolve, reject){
    var result = 0;
    //1. 从网址http://localhost:8000/TestAdd_GetPar1获取加数A

    //2. 从网址http://localhost:8000/TestAdd_GetPar2获取加数B

    //3. 加数A + 加数B

    if(result == 0){
        resolve(null)
    }else{
        resolve(result == 5);
    }
}

// 与上一题一样, 但使用Promise实现
export async function FillIn_TestAdd2(resolve, reject){
    var result = 0;
    //1. 从网址http://localhost:8000/TestAdd_GetPar1获取加数A

    //2. 从网址http://localhost:8000/TestAdd_GetPar2获取加数B

    //3. 加数A + 加数B

    if(result == 0){
        resolve(null)
    }else{
        resolve(result == 5);
    }
}

// 与上一题一样, 但使用Async Await实现
export async function FillIn_TestAdd3(resolve, reject){
    var result = 0;
    //1. 从网址http://localhost:8000/TestAdd_GetPar1获取加数A

    //2. 从网址http://localhost:8000/TestAdd_GetPar2获取加数B

    //3. 加数A + 加数B

    if(result == 0){
        resolve(null)
    }else{
        resolve(result == 5);
    }
}