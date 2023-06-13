var topic = [    "往生",    "頭七",    "第14天",    "第21天",    "第28天",    "第35天",  "第42天",  "第49天(接近50天)",  "第56天",  "第63天",  "第70天",  "第77天",  "第84天",  "第91天",  "第98天(接近百日喔)"];
var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(2,21);
