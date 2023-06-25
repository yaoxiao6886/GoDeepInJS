import * as testSet from './test/memory.js';

function CheckAnswer(func, answer){
    var result = func();
    if(answer == 0){
        //证明该题目尚未回答
        return 0;
    }

    if(result != answer){
        throw `${func.name} 答错了, 再想想`;
    }
}

function getAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == 'function';
    });
}


function TestRoot(){
    try{
        var functionNameSet =  getAllMethods(testSet);

        for(var i=0; i<functionNameSet.length; i++){
            var funcName = functionNameSet[i];
            CheckAnswer( testSet[funcName], testSet["Answer_"+funcName]);
        }
      

        // CheckAnswer( TestValueType,  Answer_TestValueType)
        // CheckAnswer( TestRefType,  Answer_TestRefType)
        // CheckAnswer( TestRefType_ChangeValue,  Answer_TestRefType_ChangeValue)
        // CheckAnswer( TestRefType_ValueField,  Answer_TestRefType_ValueField)
        // CheckAnswer( TestRefType_ChangeRef,  Answer_TestRefType_ChangeRef)
        // CheckAnswer( TestRefType_ChangeRefInMethod,  Answer_ChangeRefInMethod)
        // CheckAnswer( TestRefType_ChangeRefInMethodReturn,  Answer_ChangeRefInMethodReturn)

        console.log("对啦 真棒");
    }catch(err){
        console.error(err);
    }    
}
TestRoot();