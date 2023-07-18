export var TestName = "extends";

export var Answer_TestExtend = "85";
export function TestExtend(){
    class A {
        v = 10;

        constructor(v) {
            this.v = v;
            this.v++;
        }
        fun() {
            this.v++;
        }
        getresult(){
            return this.v;
        }
    }
    
    class B extends A {

        constructor(v) {    
            super(v);       
            this.v --;
        }
        fun() {
            this.v--;
        }
    }
    
    let result = "";
    let a = new A(6);
    let b = new B(6);

    a.fun();
    result +=a.getresult();
    b.fun();
    result += b.getresult();
    
    return result;
}

export var Answer_TestExtend_Override = "88";
export function TestExtend_Override(){
    class A {
        v = 10;

        constructor(v) {
            this.v = v;
            this.v++;
        }
        fun() {
            this.v++;
        }
        getresult(){
            return this.v;
        }
    }
    
    class B extends A {
        v = 10;

        constructor(v) {    
            super(v);       
            this.v --;
        }
        fun() {
            this.v--;
        }
    }
    
    let result = "";
    let a = new A(6);
    let b = new B(6);

    a.fun();
    result +=a.getresult();
    b.fun();
    result += b.getresult();
    
    return result;
}

export var Answer_TestStatic = "73";
export function TestStatic(){
    class A {
        static v = 0;
        other = 8;
        fun(){
            v++;
            other++;
        }

        static staticFun(){
            v++;
        }
    }
    
    class B extends A {
        
        fun(){
            other--;
        }

    }
    
    let result = "";
    let a = new A();
    a.fun();
    result += a.other;
    result += A.v;
    let b = new B();
        b.fun();
    result += b.other;
    result += A.v;

    A.staticFun();
    result += A.v;
    
    return result;
}

/**
 * 现在有一个自产自销的农场, 有两位员工, 小张和小王. 他们两个有一个经理, 小李.
 * 小张和小王的工资是每周200块, 小李的工资是每周300块
 * 农场每天都会产出若干份菜, 数量不固定, 作为老板的你当然希望都卖光, 而且挣越多钱越好
 * 当天卖不出去的菜就扔了, 不会第二天再卖
 * 小张善于卖菜, 一份菜赚50块钱, 但卖的慢, 一天只能卖2份
 * 小王卖的快, 一天能卖5份, 但一份只赚15块钱
 * 小李作为领导, 小张小王忙不过来时候也会帮忙卖, 一天能卖3份, 每份赚20块钱
 * 
 * 作为老板, 你只和小李沟通, 跟他说每天产出了多少份菜, 由他安排销售
 * 第一天产出了2份
 * 第二天产出了5份
 * 第三天产出了1份
 * 第四天产出了12份
 * 第五天产出了10份
 * 第六天产出了3份
 * 第七天产出了1份
 * 问这一个周卖了多少份菜, 流水多少, 盈利多少?
 * 
 * 提示:
 * 1. 可以先考虑分类和对象, 这个例子里应该有几类, 有几个对象?
 * 2. 小张和小王肯定是一类, 他们有什么行为, 什么属性? 
 *    小张和小王是不是可以算是Worker? 至少有基本方法比如GetSalary, 
 *    获得挣了多少钱, GetSelledCount, 卖了多少, 
 *    还可以有个方法叫Sell, 用于卖货
 * 3. 小李怎么归类? 他和小张小王有什么异同? 小李是不是可以是Worker的子类, 叫做Manager, 
 *    有管理协调员工的方法, 比如AddWorker, SellCount
 */
export function FillIn_Employ(){

    var li = null;
    var wang = null;
    var zhang = null;

    if(li == null || wang == null || zhang == null){
        return;
    }

    return  li.GetName()=="小李" && li.GetSalary() == 200 && li.GetSelledCount()==6 &&
            zhang.GetName()=="小张" && zhang.GetSalary() == 100 && zhang.GetSelledCount()==12 &&
            wang.GetName() == "小王" && wang.GetSalary() == 100 && wang.GetSelledCount()==14 &&
            li.GetTotalEarning() == 930 && //流水
            li.GetTotalNetEarning() == 430 && //净赚
            li.GetTotalSelledCount() == 32
}

// Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().

//各种车的情况 时间 耗油 耗电 Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.

//学生和老师做自我介绍

//动物 鱼 狗 鸟 问有几条腿 时间 鸟问飞了多高

//先通过选择题来判断对理解不理解