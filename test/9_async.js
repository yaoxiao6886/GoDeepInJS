import { XMLHttpRequest } from 'xmlhttprequest'

export var TestName = "async";

export var Answer_TestSetTimeOut = 1;
export async function TestSetTimeOut(resolve, reject){
    var result = 0;
    function TimeOutCallBack(){
        resolve(result);

        result = 2;
    }
    setTimeout(TimeOutCallBack, 1);
    result = 1;
}

export var Answer_TestSetTimeOut2 = 2;
export async function TestSetTimeOut2(resolve, reject){
    var result = 0;
    function TimeOutCallBack(){
        result = 2;

        resolve(result);
    }
    setTimeout(TimeOutCallBack, 1);
    result = 1;
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