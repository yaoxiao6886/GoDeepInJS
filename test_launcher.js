import * as memorySet from './test/1_memory.js';
import * as functionSet from './test/2_function.js';
import * as objectSet from './test/3_object.js';

function CheckAnswer(func, answer, errorlist){
    var result = func();
    if(answer == 0){
        //证明该题目尚未回答
        return 0;
    }

    if(result != answer){
        
        return 1;
    }

    return 2;
}

function GetAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == 'function';
    });
}

/**
 * 
 * @param {Object} set 试卷
 */
function TestSet(set){
    var functionNameSet =  GetAllMethods(set);
    var errorList = [];
    var ignoreCount = 0;
    var errorCount = 0;
    var correctCount = 0;

    for(var i=0; i<functionNameSet.length; i++){
        var funcName = functionNameSet[i];
        var result = -1;
        
        if(funcName.indexOf("FillIn_")!=-1){
            var fillInResult = set[funcName]();
            switch(fillInResult){
                case true:
                    result = 2;
                    break;
                case false:
                    result = 1;
                    break;
                default:
                    result = 0;
                    break;
            }
        }else{
            result = CheckAnswer( set[funcName], set["Answer_"+funcName], errorList);
        }
       
        switch(result){
            case 0:
                ignoreCount++;
                break;
            case 1:
                errorCount++;
                errorList.push(`${funcName}`);
                break;
            case 2:
                correctCount++;
                break;
            default:
                throw `Error CheckAnswer Result ${result}`;
        }        
    }

    return {errorList: errorList, ignoreCount : ignoreCount, correctCount : correctCount, errorCount: errorList.length, questionsCount:functionNameSet.length };
}


/**
 * 
 * @param {Array[Object]} sets 试卷集
 */
function TestSets(sets){
    var infoList = [];

    for(var i=0; i<sets.length; i++){
        var result = TestSet(sets[i]);        

        //处理错误
        if(result.errorList.length > 0){
            var info = `测试 ${sets[i].TestName}: `;
            for(var j=0; j<result.errorList.length; j++){
                info += result.errorList[j];

                if(j != result.errorList.length-1){
                    info+=","
                }
            }
            info += "回答错误, 再想想"
            infoList.push(info);
        }

        //打印综述
        if(result.ignoreCount < result.questionsCount && result.errorList.length == 0 ){
            //证明题目开始答了

            if(result.correctCount == result.questionsCount){
                infoList.push(`测试 ${sets[i].TestName}: 全部答对啦, 真棒!`);
            }else{
                infoList.push(`测试 ${sets[i].TestName}: 答对啦! 已答对 ${result.correctCount} 道, 还有 ${result.ignoreCount} 道没答, 继续加油欧! `);
            }
        }
    }

    if(infoList.length == 0){
        infoList.push("请开始作答^_^")
    }

    for(var i=0; i<infoList.length; i++){
        var color = infoList[i].indexOf('回答错误') != -1 ? '\x1B[31m' : '\x1B[34m';
        console.log(color, infoList[i]);        
    }
}

TestSets([memorySet, functionSet, objectSet]);