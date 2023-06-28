//本课用于说明
//1. 如何构造对象 以及面向对象编程

export var TestName = "object";

export function FillIn_Object(){

    var constructStudent = function(name, chinese, math, english){
        //请填空, 使测试可以通过
    }

    var a = new constructStudent("张三", 90, 20, 50);
    if(a.name == undefined){
        return
    }
    
    return JSON.stringify(a) == `{"name":"张三","chinese":90,"math":20,"english":50}`;
}


//在上一题的基础上添加Sum函数和选择专业函数
//Sum函数: 对传入的语文 数学 英语成绩求和
//SelectMajor函数: 语文高的返回汉语言 数学高的返回计算机 英语高的返回同声传译
export function FillIn_ObjectFunctions(){
    var constructStudent = function(name, chinese, math, english){
    
    }

    var a = new constructStudent("张三", 90, 20, 50);
    if(a.Sum == undefined){
        return
    }

    return a.Sum() == 160 && a.SelectMajor() == "汉语言"
}

//在上一题的基础上添加Revard函数
//Revard函数: 学生在竞赛中获奖, 在考试中可以给对应科目加分
export function FillIn_ObjectFunctions(){
    var constructStudent = function(name, chinese, math, english){
    
    }

    var a = new constructStudent("张三", 90, 20, 50);
    a.Revard("english", 50); //英语科目竞赛获奖, 加50分
    if(a.Sum == undefined){
        return
    }

    return a.Sum() == 210 && a.SelectMajor() == "同声传译"
}

export function FillIn_SchoolSelect(){

    //请填空, 按照上面两题构造学生
    var constructStudent = function(name, chinese, math, english){
    
    }

    var studeng_a = new constructStudent("张三", 90, 20, 50);
    var studeng_b = new constructStudent("李四", 90, 100, 50);
    var studeng_c = new constructStudent("王五", 90, 20, 100);
    var studeng_d = new constructStudent("赵六", 90, 80, 80);
    var studeng_e = new constructStudent("乔峰", 30, 20, 50);
    var studeng_f = new constructStudent("段誉", 50, 60, 50);
    var studeng_g = new constructStudent("虚竹", 80, 20, 70);
    var studeng_h = new constructStudent("慕容复", 10, 20, 30);

    studeng_g.Revard("math", 80);

    var students = [studeng_a, studeng_b, studeng_c, studeng_d, studeng_e, studeng_f, studeng_g, studeng_h ];

    //请填空, 根据学生筛选出专业最高的人以录取(返回该对象)
    var acceptStudent = function( students, major){

    }

    var chineseStudent = acceptStudent(students, "汉语言");
    var mathStudent = acceptStudent(students, "计算机");
    var englishStudent = acceptStudent(students, "同声传译");

    if(chineseStudent == null){
        return;
    }

    return chineseStudent.name == "赵六" && mathStudent.name == "虚竹" && englishStudent.name == "王五";
}