export var TestName = "Object Oriented Programming";

//本测试主要用于联系面向对象编程
//面向对象不是一种语法 是一种简化问题的方法 避免成为老过
//面向对象 什么是对象? 类=属性+行为 比如 车 属性有电量 行为有开始跑  跑的行为会减少电量 而对象是类的实例
//练习面向对象时 先要想我这个案例里可以把哪些抽象成对象 这些对象都属于什么类(其实就是分类)
//有了对象 问题自然而然也就解决了


/**
 * 动物案例
 * 现在有这样几种动物 牛 羊 猴 猫 狗
 * 需要根据描述构造出对象
 * 来满足后续对其属性和方法的判断
 * 
 * 提示:
 *      不要将所有逻辑写在一起 那就是老过 要把逻辑分散到对象里 
 *      这道题练习的是如何构建对象, 构建对象的逻辑应该放在哪里, 如何与上层逻辑分离
 *      构造对象的方法可以放在构造函数(new function)里 比如if(牛)则属性中脚=4 手=0 叫声=哞
 */
export function FillIn_AnimalCall(){
    var animalStrings = ["牛", "麻雀", "猴"]

    //需要构造好的对象放在这里
    var animals = []

    if(animals.length == 0){
        return;
    }
    
    return  animals[0].feetNum == 4 && animals[0].handNum == 0 && animals[0].Call() == "哞" && 
            animals[1].feetNum == 2 && animals[1].handNum == 0 && animals[1].Call() == "叽叽喳喳" &&
            animals[2].feetNum == 2 && animals[2].handNum == 2 && animals[2].Call() == "吱吱吱"

}

/**
 * 电动车案例
 * 现在有这样几辆电动车
 * 比亚迪汉 电量 60w 每公里耗电0.6w
 * 埃安     电量 70w 每公里耗电0.55w
 * 欧拉好猫 电量 30w 每公里耗电0.25w
 * 
 * 现在让这三辆车都跑120公里 中途可能有些车跑不了这么远 那就停在哪算哪 问最终这些车跑了多少公里 还剩多少电?
 * 
 * 提示:
 *      不要将所有逻辑写在一起 那就是老过 要把逻辑分散到对象里 
 *      这道题练习的是对象里的方法应操作属性 最终不同的对象有不同的表现
 *      在这道题中 很明显 车可以作为一种类 属性有电量 每公里耗电 那么我们的计算是不是放在类里的方法就好了?
 */
export function FillIn_CarDrive(){
    //将构造好的对象放到cars里
    var cars = []

    //可以在此处让每辆车向150公里的目标跑, 提示: 调用个对象的方法?

    if(cars.length == 0){
        return;
    }
    
    return  cars[0].name == "比亚迪汉"  && cars[0].distance == 100 && cars[0].electric == 0 &&
            cars[1].name == "埃安"      && cars[1].distance == 120 && cars[1].electric == 4 &&
            cars[2].name == "欧拉好猫"  && cars[2].distance == 120 && cars[2].electric == 0

}

/**
 * 买东西案例
 * 现在有一个商店 三个顾客
 * 顾客A: 带了10块钱 要买面包 火腿肠 薯片
 * 顾客B: 带了50块钱 要买薯片 可乐 纸巾
 * 顾客C: 带了5块钱 要买可乐
 * 
 * 商店的情况是这样:
 * 面包 剩2个 售价5块一个
 * 火腿肠 剩2个 售价3块一个
 * 薯片 剩2个 售价10块一个
 * 可乐 剩1瓶 售价5块
 * 纸巾 剩1份 售价2块
 * 
 * 现在三个顾客按先后顺序购买 A先买 B再买 C最后买 问最后三个顾客都买到了什么 还剩多少钱 商店还剩什么货物 挣了多少钱
 * 
 * 提示:
 *      不要将所有逻辑写在一起 那就是老过 要把逻辑分散到对象里 
 *      这道题练习的是综合能力 如何用面向对象解决实际问题 中间可能带有一点简单的算法
 *      在这道题中 很明显 顾客可以作为一类 商品是一类 商店是一类 
 *      其中一个难点在 顾客买东西时 未必能买成功 一是商店得有货 二是顾客得有钱
 *      上面这个问题 顾客是不是可以有个方法叫Want(想要啥) 商店拿到顾客want的结果是不是可以有一个方法叫CanSell(能不能卖 也就是能不能卖) 如果能卖 那顾客就可以Buy(扣钱 获得商品) 商店就可以Sell(增加钱 减商品)
 */
export function FillIn_Buy(){
    //将构造好的顾客放在customers里 商店为shop
    var customers = []
    var shop = null;

    //可以在此让每个顾客买东西

    if(shop==null){
        return;
    }
    
    return  customers[0].name == "A"  && customers[0].money == 2 && customers[0].GetItems() == ["面包", "火腿肠"] &&
            customers[1].name == "B"  && customers[1].money == 33 && customers[1].GetItems() == ["薯片", "可乐", "纸巾"] &&
            customers[2].name == "C"  && customers[2].money == 5 && customers[2].GetItems() == [] &&
            shop.money == 25
}