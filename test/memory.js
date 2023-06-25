//测试 函数修改传入值
export var Answer_TestValueType = 0;
export function TestValueType(){

    function func(arg){
        arg = 2;
    }

    var par = 1;
    func(par);
    return par;
}

//测试 函数修改传入对象
export var Answer_TestRefType = 0;
export function TestRefType(){

    function func(arg){
        arg = {v:2};
    }

    var par = {v:1};
    func(par);
    return par.v;
}

//测试 函数修改传入对象的值
export var Answer_TestRefType_ChangeValue = 0;
export function TestRefType_ChangeValue(){
    function func(arg){
        arg.v = 2;
    }

    var par = {v:1};
    func(par);
    return par.v;
}

//测试 函数修改传入对象中的对象
export var Answer_TestRefType_ChangeObjRef = 0;
export function TestRefType_ChangeObjRef(){
    function func(arg){
        arg.o = {v:2};
    }

    var obj = {v:1};
    var par = { o : obj};

    func(par);
    return par.o.v;
}

//测试 函数修改传入值 只是值是对象的成员
export var Answer_TestRefType_ValueProp = 0;
export function TestRefType_ValueProp(){
    function func(arg){
        arg = 2;       //请回答: arg在堆上还是在栈上
    }

    var par = {v:1};
    func(par.v);       //请回答: v在堆上还是在栈上
    return par.v;
}

//测试 函数修改传入值 只是值是对象的成员 带返回值
export var Answer_TestRefType_ValueField_Return = 0;
export function TestRefType_ValueField_Return(){
    function func(arg){
        arg = 2;       
        return arg;
    }

    var par = {v:1};
    par.v = func(par.v);       
    return par.v;
}

//测试 交换引用对象
export var Answer_TestRefType_ChangeRef = 0;
export function TestRefType_ChangeRef(){
    
    var par1 = {v:1};
    var par2 = {v:2};
    
    var tempPar = par1;
    par1 = par2;
    par2 = tempPar;

    return par1.v;
}

//测试 通过函数交换对象
export var Answer_TestRefType_ChangeRefInMethod = 0;
export function TestRefType_ChangeRefInMethod(){

    function func(arg1, arg2){
        var temp = arg1;
        arg1 = arg2;
        arg2 = temp;
    }
    
    var par1 = {v:1};
    var par2 = {v:2};
    
    func(par1, par2);

    return par1.v;  //请回答: 为什么是这个结果
}

//测试 通过函数交换对象 但带Return
export var Answer_TestRefType_ChangeRefInMethodReturn = 0;
export function TestRefType_ChangeRefInMethodReturn(){

    function func(arg1, arg2){
        arg1 = arg2;
        return arg1;
    }
    
    var par1 = {v:1};
    var par2 = {v:2};
    
    par1 = func(par1, par2);

    return par1.v;
}

//加分题 通过这些问题 请回答 引用类型和值类型的根本区别是什么

//深拷贝 浅拷贝


// function getAllMethods(object) {
//     return Object.getOwnPropertyNames(object).filter(function(property) {
//         return typeof object[property] == 'function';
//     });
// }



// function CheckAnswer(func, answer){
//     var result = func();
//     if(answer == 0){
//         //证明该题目尚未回答
//         return 0;
//     }

//     if(result != answer){
//         throw `${func.name} 答错了, 再想想`;
//     }
// }

//NEXT: 深拷贝 浅拷贝
//NEXT: 理论说清楚

// function TestRoot(){
//     try{
//         CheckAnswer( TestValueType,  Answer_TestValueType)
//         CheckAnswer( TestRefType,  Answer_TestRefType)
//         CheckAnswer( TestRefType_ChangeValue,  Answer_TestRefType_ChangeValue)
//         CheckAnswer( TestRefType_ValueField,  Answer_TestRefType_ValueField)
//         CheckAnswer( TestRefType_ChangeRef,  Answer_TestRefType_ChangeRef)
//         CheckAnswer( TestRefType_ChangeRefInMethod,  Answer_TestRefType_ChangeRefInMethod)
//         CheckAnswer( TestRefType_ChangeRefInMethodReturn,  Answer_TestRefType_ChangeRefInMethodReturn)
//         CheckAnswer( TestRefType_ChangeObjRef,  Answer_TestRefType_ChangeObjRef)
//         CheckAnswer( TestRefType_ValueField_Return,  Answer_TestRefType_ValueField_Return)


//         console.log("对啦 真棒");
//     }catch(err){
//         console.error(err);
//     }    
// }
// TestRoot();
