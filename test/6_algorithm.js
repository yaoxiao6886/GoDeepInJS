
export var TEST_NAME = "algorithm"

//排序
export function FillIn_Sort(){
    function sort(arr){

    }

    var array=[3,2,5,7,9,1,6];
    sort(array);
    if(array[0] == 3 && array[6] == 6){//为什么这里要再写一遍[3,2,5,7,9,1,6] 而不是array？
        return;
    } 

    return array[0] == 1 && array[6] == 9;
}



//斐波那契数列 fib(n) = fib(n-1) + fib(n-2) 即fib(0 或者<0 )=0 fib(1)=1 fib(2)=fib(1)+fib(0)=1 fib(3)=fib(2)+fib(1)=2 fib(4)=fib(3)+fib(2)=3
//提示：是不是可以用递归解？
export function FillIn_Fibonacci(){
    function fib(num){

    }

    if(fib(0)==null){
        return;
    }

    return fib(4)==3 && fib(5)==5;
}

//求n的阶乘 即f(1)=1 f(2)=2*1 f(3)=3*2*1 f(4)=4*3*2*1
export function FillIn_Factorial(){
    function fac(num){

    }

    if(fac(0)==null){
        return;
    }

    return fac(5)==120;
}

//倒叙输出数字 假设一个数字是123 倒序输出就是321
//如果不使用字符串操作呢?
export function FillIn_ReverseNum(){
    var num = 12346;

    if(num == 12346){
        return;
    }

    return num == 64321;
}

//现在有数组 [1,2,3] [a,b,c] 现在要合并为[{n:1,v:a},{n:2,v:b},{n:3,v:c}]
export function FillIn_Array(){
    var arr = [1,2,3];
    var arr2 = ["a","b","c"]

    var combined = null;
    if(combined == null){
        return;
    }

    return combined[0].v == "a" && combined[0].n == 1 &&
           combined[2].v == "c" && combined[2].n == 3
}

