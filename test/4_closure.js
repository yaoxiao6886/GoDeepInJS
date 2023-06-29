export var TestName = "closure";


export var Answer_TestIncrement = 0;
export function TestIncrement(){
    function createIncrement() {
        let count = 0;

        function increment() {
            count++;
        }



        function getResult(){
            return count;
        }

        return [increment, getResult];
    }

    const [increment, getResult] = createIncrement();

    increment();

    return getResult(); // 会打印什么?
}

export var Answer_TestIIFE = 0;
export function TestIIFE(){
    var result = (function immediateA(a) {

        return (function immediateB(b) {

            return a; 

        })(2);

    })(1);
    return result;
}

export var Answer_Test_Multi_Closure = 0;
export function Test_Multi_Closure(){

    var i = 2;
    function Outside(){
        var j = 3;

        return function (){
            j + i;
        }();
    }

    i++;
    return Outside();
}


export var Answer_TestFunc = "0";
export function TestFunc(){
    function fun(n, o){
        return {
            fun: function(m){
                return fun(m, n);
            },
            o: o
        }
    }

    var result = "";
    var a = fun(1)
    result += a.o;   
    result += a.fun(2).o;    
    result += a.fun(3).o;    
    result += a.fun(4).o;
    return result;
}


export var Answer_TestLet = "0";
export function TestLet(){
    let count = 1;
    var f =function immediate() {
        var result = "";
        if (count === 1) {
            let count = 2;
    
            result+=count; // 打印什么?
        }
        result += count; // 打印什么?
        return result;
    };

    var r = f();
    return r;
}

export var Answer_TestLet_Change = "0";
export function TestLet_Change(){
    let count = 1;
    var f =function immediate() {
        var result = "";
        if (count === 1) {
            let count = 2;
    
            result+=count; // 打印什么?
        }
        result += count; // 打印什么?
        return result;
    };

    count++;

    var r =  f();
    return r;
}

export var Answer_TestLoopFunc = "0"
export function TestLoopFunc(){
    var funcs = [];
    var result = "";
    for (var i = 0; i < 3; i++) {
        funcs[i] = function () {
            return i;
        };
    }

    for(var j=0;j<3;j++){
        result += funcs[j]();
    }
    return result;
}


export var Answer_TestLoopFunc_i = "0"
export function TestLoopFunc_i(){
    var funcs = [];
    var result = "";
    for (var i = 0; i < 3; i++) {
        funcs[i] = function () {
            return i;
        };
    }

    for(var i=0;i<3;i++){
        result += funcs[i]();
    }
    return result;
}

export var Answer_TestLoopFunc_passByValue = "0"
export function TestLoopFunc_passByValue(){
    var funcs = [];
    var result = "";
    for (var i = 0; i < 3; i++) {
        funcs[i] = function (i) {
            return function(){
                return i;
            };
        }(i);
    }

    for(var j=0;j<3;j++){
        result += funcs[j]();
    }
    return result;
}
