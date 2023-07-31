export var TestName = "prototype";

export var Answer_TestPrototype = "";
export function TestPrototype(){
    function F() {
        this.a = 1;
      }
      var obj = new F();
      return obj.prototype;//打印undefined
}

export var Answer_TestProps = "";
export function TestProps(){
    Object.prototype.a = 1;
    var obj = {
        b: 2
    };
    
    var result = "";
    result += obj.a;
    result += obj.b;
    return result;
}

export var Answer_TestPropTestFunc = "";
export function TestPropTestFunc(){
    Object.prototype.a = 1; 
    var obj = {
        b: 2
    };
    
    var result = "";
    result += obj.a;
    result += obj.b;
    result += obj.hasOwnProperty('a');
    result += obj.hasOwnProperty('b');
    return result;
}

export var Answer_TestPropOverride = "";
export function TestPropOverride(){
    function A(){
    }
    function B(a){
        if(a){
            this.a = a;
        }
    }

    A.prototype.a = 1;
    B.prototype.a = 1;

    var result = "";
    result += new A().a;
    result += new B().a;
    result += new B(2).a;
    return result;
}

export var Answer_TestChangePrototype = "";
export function TestChangePrototype(){
    function A () {
    }
    A.prototype.n = 1;
     
    var b = new A();
    
    A.prototype = {
        n: 2,
        m: 3
    }
    var c = new A();
    
    var result = "";
    result += b.n;
    result += b.m;
    result += c.n;
    result += c.m;
    return result; 
}

export var Answer_TestBaseProp = "";
export function TestBaseProp(){
    var F = function(){};
    Object.prototype.a = function(){
        return 1;
    }
    Function.prototype.b = function(){
        return 2;
    }
    var f = new F();
    
    var result = "";
    try{
        F.a();  
    }catch(e){}
    try{
        F.b();  
    }catch(e){}
    try{
        F().a();  
    }catch(e){}
    try{
        F().b();  
    }catch(e){}
    try{
        f.a();  
    }catch(e){}
    try{
        f.b(); 
    }catch(e){}
   
    return result;
}

export var Answer_TestPropThis = "";
export function TestPropThis(){
    function Fn(num) {
        this.x = this.y = num;
    }
    
    Fn.prototype = {
        x: 20,
        sum: function () {
            return this.x + this.y;
        }
    };

    var result = "";
    let f = new Fn(10);
    result += f.sum();

    result += Fn.prototype.sum(); 
    return result;
}

export var Answer_TestValue = ""
export function TestValue(){
    function fun() {
        this.a = 0;
        this.b = function () {

        }
    }

    var my_fun = new fun();   

    fun.prototype = {
        b: function () {
            this.a = 20;
        },
        c: function () {
            this.a = 30;
        }
    }
  
    var result = "";
    try{
        my_fun.b();
    }catch(e){}
    result += my_fun.a;
    
    try{
        my_fun.c(); 
    }catch(e){}   
    result += my_fun.b;
    
    return my_fun;
}