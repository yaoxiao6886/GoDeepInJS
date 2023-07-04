
export var TEST_NAME = "algorithm"

//排序
export function FillIn_Sort(){
    function sort(arr){

    }

    var array=[3,2,5,7,9,1,6];
    sort(arr);
    if(arr == [3,2,5,7,9,1,6]){//为什么这里要再写一遍[3,2,5,7,9,1,6] 而不是array？
        return;
    } 

    return arr == [1,2,3,5,6,7,9];
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