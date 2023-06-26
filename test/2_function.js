//本课用于说明
//1. JS中函数的this, 和括号表达式的区别
//2. JS作为构造函数构造对象
//3. 深拷贝浅拷贝
//4. Json和对象声明的异同

export var TestName = "function";

export var Answer_TestBracketExp = 0;
export function TestBracketExp(){
    var answer = 1;

    var exp = ()=>{
        answer = 2;
    };

    try{
        exp();
    }catch(e){

    }
   
    return answer;
}

export var Answer_TestBracketExp_This = 0;
export function TestBracketExp_This(){
    var answer = 1;

    var exp = ()=>{
        this.answer = 2;
    };

    try{
        exp();
    }catch(e){

    }
   
    return answer;
}

export var Answer_TestFunctionCall = 0;
export function TestFunctionCall(){
    var answer = 1;

    function func(){
        answer = 2;
    }

    try{
        func();
    }catch(e){

    }
   
    return answer;
}

export var Answer_TestFunctionCall_This = 0;
export function TestFunctionCall_This(){
    var answer = 1;

    function func(){
        this.answer = 2;
    }

    try{
        func();
    }catch(e){

    }
   
    return answer;
}

export var Answer_TestExpInObject = 0;
export function TestExpInObject(){
    var obj = {
        v : 1,
        f : ()=>{
            v = 2
        }
    }

    try{
        obj.f();
    }catch(e){

    }
    return obj.v;    
}


export var Answer_TestExpInObject_This = 0;
export function TestExpInObject_This(){
    var obj = {
        v : 1,
        f : ()=>{
            this.v = 2
        }
    }

    try{
        obj.f();
    }catch(e){

    }
    return obj.v;    
}

export var Answer_TestFunctionInObject_This = 0;
export function TestFunctionInObject_This(){
    var obj = {
        v : 1,
        f : function(){
            this.v = 2
        }
    }

    try{
        obj.f();
    }catch(e){

    }
    return obj.v;    
}

export var Answer_TestExpConstructFunc = 0;
export function TestExpConstructFunc(){
    var obj = {
        v : 1,
        f : ( a )=>{
            this.v = a;
        }
    }

    var b = obj;
    try{
        b = new obj.f(2);
    }catch(e){

    }

    return b.v;    
}

export var Answer_TestFuncConstructFunc = 0;
export function TestFuncConstructFunc(){
    var obj = {
        v : 1,
        f : function( a ){
            this.v = a;
        }
    }

    try{
        var b = new obj.f(2);
    }catch(e){

    }

    return b.v;   //注意变量提升
}

export var Answer_TestFuncConstructFunc_Origin = 0;
export function TestFuncConstructFunc_Origin(){
    var obj = {
        v : 1,
        f : function( a ){
            this.v = a;
        }
    }

    try{
        var b = new obj.f(2);
    }catch(e){

    }

    return obj.v;   //注意变量提升 加分题: 什么是变量提升? 什么现象?
}

export var Answer_TestFuncConstructFunc_NoNew = 0;
export function TestFuncConstructFunc_NoNew(){
    var obj = {
        v : 1,
        f : function( a ){
            this.v = a;
        }
    }

    try{
        obj.f(2);
    }catch(e){

    }

    return obj.v; 
}

export var Answer_TestFuncConstructFunc_Equal = 0;
export function TestFuncConstructFunc_Equal(){
    function Create(v){
        this.v = v;
    }

    var a = new Create(1);
    var b = new Create(1);
    return a == b ? 2 : 3;
}

export var Answer_TestDeepCopy = 0;
export function TestDeepCopy(){
    function CreateObj(v){
        this.v = v;
    }

    function Create(v, obj){
        this.v = v;
        this.obj = obj;
    } 

    var obj = new CreateObj(1);
    var a = new Create(1, obj);
    var b = {};
    b.v = a.v;
    b.obj = a.obj;

    a.obj.v = 2;
    return b.obj.v;
}

export var Answer_TestDeepCopy_Deep = 0;
export function TestDeepCopy_Deep(){
    function CreateObj(v){
        this.v = v;
    }

    function Create(v, v2){
        this.v = v;
        this.obj = obj;
    } 

    var obj = new CreateObj(1);
    var a = new Create(1, obj);
    var b = {};
    b.v = a.v;
    b.obj = new CreateObj(a.obj.v);

    a.obj.v = 2;
    return b.obj.v;
}

export function FillIn_Json(){
    var json = `
        {
            "v" : 1,
            "s" : "s",
            "o" : {
                "v" : 1,
                "s" : "s",
                "o" : null
            }
        }
    `;

    var a = JSON.parse(json);
    //使用对象语法创建b, 让b可以和a相等
    var b = null;

    if(b == null){
        return;
    }

    return JSON.stringify(b) == JSON.stringify(a);
}
