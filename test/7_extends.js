export var TestName = "extends";

export var Answer_TestExtend = "0";
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

export var Answer_TestExtend_Override = "0";
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

export var Answer_TestStatic = "0";
export function TestStatic(){
    class A {
        static v = 0;
        other = 8;
        fun(){
            A.v++;
            this.other++;
        }

        static staticFun(){
            A.v++;
        }
    }
    
    class B extends A {
        
        fun(){
            A.v--;
            this.other--;
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
    try{
        B.staticFun();
    }catch(e){

    }
    result += B.v;
    
    return result;
}

//各种车的情况 时间 耗油 耗电 Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.

/**
 * 现在有几种车 特斯拉 埃安 大众 宝马 捷安特
 * 其中 特斯拉时速 100km/h 耗电量1w/100km  
 *      埃安时速   80km/h 耗电量0.5w/100km
 *      大众时速    50km/h 耗油量0.5L/100km
 *      宝马时速   100km/h 耗油量1L/100km
 *      捷安特     10km/h  耗饭量10碗米饭/100km
 * 
 * 问现在几种交通工具都行驶500km, 问各自耗费的时间和消耗
 */
export function FillIn_Cars(){
    var tesla = null;
    var aion = null;
    var vorks  =null;
    var BMW = null;
    var giant = null;

    if(tesla==null || aion==null || vorks==null || BMW==null || giant == null){
        return;
    }

    var drives = [tesla, aion, vorks, BMW, giant]
    for(var i =0; i<drives.length; i++){
        drives[i].drive(500);
    }

    return tesla.GetHours() == 5 && tesla.GetElec() == 5 && tesla.GetWheelCount() == 4 /* 轮子数 */ && tesla.GetEneryType() == "Ele" /* 能量类型 */&&
            aion.GetHours() == 6.25 && aion.GetElec() == 2.5 && aion.GetWheelCount() == 4 && aion.GetEneryType() == "Ele" &&
            vorks.GetHours() == 10 && vorks.GetOil() == 2.5 && vorks.GetWheelCount() == 4 && vorks.GetEneryType() == "Oil" &&
            BMW.GetHours() == 5 && BMW.GetElec() == 5 && BMW.GetWheelCount() == 4 && BMW.GetEneryType() == "Oil" &&
            giant.GetHours() == 50 && giant.GetRice() == 50 && giant.GetWheelCount() == 2 && giant.GetEneryType() == "Person"
}
//可选题 动物 鱼 狗 鸟 问有几条腿 时间 鸟问飞了多高



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

/**
 * 现在有三个窗口 个人信息 最新消息 以及公司通知
 * 其中 个人信息有一个方法叫做GetPersonInfo 可以获知用户名字叫"Hello"
 *      最新消息有一个方法叫GetNews 可以获知消息为"工资条"
 *      公司通知有一个方法叫GetNotice 可以知道通知为"涨工资了"
 * 
 *      窗口可以打开, 关闭. 窗口分为普通窗口和全屏窗口两类, 
 *      普通窗口谁后打开谁就在最前, 打开的普通窗口可以切换前后顺序, 即Foreground哪个窗口, 哪个窗口就在队列最前面
 *      全屏窗口打开时 其他窗口需要关闭 即窗口状态为close 全屏窗口关闭时 需要把之前关闭的窗口打开 而且保持原来的顺序
 */
export function FillIn_Window(){

    //-----------------------修改此部分, 让后续逻辑正常运行--------------------------
    var personInfoWindow = null;
    var newsWindow = null;
    var noticeWindow = null;
    
    class WindowManager{

        static Open(window){

        }

        static Close(window){

        }

        static GetWindow(sequence){

        }

    }
    //---------------------------------------------------------------

    if(personInfoWindow==null || newsWindow == null || noticeWindow == null){
        return;
    }

    if(personInfoWindow.GetState() != "Closed" && newsWindow.GetState()!="Closed"){
        return false;
    }

    WindowManager.Open(personInfoWindow);
    WindowManager.Open(newsWindow);
    if(WindowManager.GetWindow(0)!=newsWindow || WindowManager.GetWindow(1)!=personInfoWindow){
        return false;
    }
    if(personInfoWindow.GetState() != "Opened" && newsWindow.GetState()!="Opened"){
        return false;
    }

    WindowManager.Foreground(personInfoWindow)
    if(WindowManager.GetWindow(0)!=personInfoWindow || WindowManager.GetWindow(1)!=newsWindow){
        return false;
    }

    WindowManager.Open(noticeWindow);
    if(personInfoWindow.GetState() != "Closed" && newsWindow.GetState()!="Closed"){
        return false;
    }
    if(WindowManager.GetWindow(0)!=noticeWindow ){
        return false;
    }
    
    WindowManager.Close(noticeWindow);
    if(personInfoWindow.GetState() != "Opened" && newsWindow.GetState()!="Opened"){
        return false;
    }
    if(WindowManager.GetWindow(0)!=personInfoWindow || WindowManager.GetWindow(1)!=newsWindow){
        return false;
    }

    return true;
}