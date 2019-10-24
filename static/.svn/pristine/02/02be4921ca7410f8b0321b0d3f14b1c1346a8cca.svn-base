// @ts-nocheck
/**
 *获取当前时间
 *format=1精确到天
 *format=2精确到分
*/

function getCurrentDate(format) {
	  var now = new Date();
	  var year = now.getFullYear(); //得到年份
	  var month = now.getMonth();//得到月份
	  var date = now.getDate();//得到日期
	  var day = now.getDay();//得到周几
	  var hour = now.getHours();//得到小时
	  var minu = now.getMinutes();//得到分钟
	  var sec = now.getSeconds();//得到秒
	  month = month + 1;
	  if (month < 10) month = "0" + month;
	  if (date < 10) date = "0" + date;
	  if (hour < 10) hour = "0" + hour;
	  if (minu < 10) minu = "0" + minu;
	  if (sec < 10) sec = "0" + sec;
	  var time = "";
	  //精确到天
	  if(format==1){
		time = year + "-" + month + "-" + date;
	  }
	  //精确到分
	  else if(format==2){
		time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
	  }
	  return time;
	}
 
//判断日期，时间大小  开始时间小于结束时间则输出显示msg
function compareTimeStr(startDate, endDate , msg) { 
	var bool = compareTime(startDate, endDate);
	if(!bool){
		layer.msg(msg, {time: 2000});
	}
	return bool;
}
//判断日期，时间大小 
function compareTime(startDate, endDate) { 
 if (startDate.length > 0 && endDate.length > 0) {  
    var startDateTemp = startDate.split(" ");   
    var endDateTemp = endDate.split(" ");   

    var arrStartDate = startDateTemp[0].split("-");   
    var arrEndDate = endDateTemp[0].split("-");   

    var arrStartTime = startDateTemp[1].split(":");   
    var arrEndTime = endDateTemp[1].split(":");   

	var allStartDate = new Date(arrStartDate[0], arrStartDate[1], arrStartDate[2], arrStartTime[0], arrStartTime[1], arrStartTime[2]);   
	var allEndDate = new Date(arrEndDate[0], arrEndDate[1], arrEndDate[2], arrEndTime[0], arrEndTime[1], arrEndTime[2]);   
	
	if (allStartDate.getTime() >= allEndDate.getTime()) {
	        //alert("startTime不能大于endTime，不能通过");  
		
	        return false;   
	} else {   
	    //alert("startTime小于endTime，所以通过了");   
	    return true;   
	       }   
	} else {
		//alert("时间不能为空");   
		return false;   
	}   
}   
//判断非负整数
function isIntNum(val){
	if(val === "" || val ==null){
        return false;
    }
	if(!isNaN(val)){
        return true;
    }else{
        return false;
    }
}
//form序列化为json
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
function dateFtt(fmt,date)   
{ //author: meizz   
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}
//获取url后的参数值
function getUrlParam(key) {
	var href = window.location.href;
	var url = href.split("?");
	if(url.length <= 1){
		return "";
	}
	var params = url[1].split("&");
	
	for(var i=0; i<params.length; i++){
		var param = params[i].split("=");
		if(key == param[0]){
			return param[1];
		}
	}
    return "";
}

function storeStatus(status)   
{ 
	if(status=="success"){
		return "审核通过"
	}
	else if(status=="fail"){
		return "审核拒绝"
	}else{
		return "等待审核"
	}
	 
}

function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] === "object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

//防浮点乘法运算
function accMul(arg1){
	var m=0;
	var s1=arg1.toString();
	var s2=100;
  	try{
  		m+=s1.split(".")[1].length
  	}catch(e){}
  	return Number(s1.replace(".",""))*Number(100)/Math.pow(10,m);
}
//防浮点除法运算
function accDiv(arg1){
	var arg2 = "100";
	var t1=0,t2=0,r1,r2;
	try{
		t1=arg1.toString().split(".")[1].length
	}catch(e){}
	
	if(t1 != 0){
		arg2 = "100.";
		for(var i =0;i<t1;i++){
			arg2 += "0";
		}
	}
	
	with(Math){
		r1=Number(arg1.toString().replace(".",""))
		r2=Number(arg2.toString().replace(".",""))
	return (r1/r2);
	}
}

function autoTextarea(obj){
	$(obj).height($(obj)[0].scrollHeight);
}
//内容类型过滤
Vue.filter('sourceTypeFilter', function (value) {
	if(value == "1"){
    	return "图文";
    }else if(value == "2"){
    	return "视频";
    }else if(value == "3"){
    	return "小视频";
    }else if(value == "4"){
    	return "图集";
    }else if(value == "5"){
    	return "其它";
    }
});
//内容类型过滤
Vue.filter('forwardStatusFilter', function (value) {
	if(value == "1"){
    	return "待审核";
    }else if(value == "2"){
    	return "未通过";
    }else if(value == "3"){
    	return "已发布";
    }
});
//内容类型过滤
Vue.filter('forwardFirstFilter', function (value) {
	if(value == "1"){
    	return "首发";
    }else if(value == "2"){
    	return "非首发";
    }
});
//退款状态
Vue.filter('refundStatusFilter', function (value) {
	if(value == "1"){
    	return "待处理";
    }else if(value == "2"){
    	return "已退款";
    }else if(value == "3"){
    	return "退款失败";
    }else if(value == "4"){
    	return "拒绝退款";
    }else if(value == "5"){
    	return "取消退款";
    }
});
//优惠券使用状态
Vue.filter('couponUseStatusFilter', function (value) {
	if(value == "1"){
    	return "未使用";
    }else if(value == "2"){
    	return "已使用";
    }
});
//优惠券上下架
Vue.filter('couponStatusFilter', function (value) {
	if(value == "1"){
    	return "上架";
    }else if(value == "2"){
    	return "下架";
    }
});


//数组重复数据去重		[{name:1:val:""},{name:1:val:""}] => [{name:1:val:""}]
function removeRepeat(arr, key){
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++) {
			if(arr[i][key] === arr[j][key]){
				arr.splice(j, 1);
				j = j-1;  // 关键，因为splice()删除元素之后，会使得数组长度减小，此时如果没有j=j-1的话，会导致相同id项在重复两次以上之后无法进行去重，且会错误删除id没有重复的项。
			}
		}
	}
}


let switchTime = (val = +new Date(), dateType = 'YYYY-MM-DD hh:mm:ss') => {
    // 将字符串转换成数字
    const timeStamp = +new Date(val)

    // 如果转换成数字出错
    if (!timeStamp) {
      return val
    }
    let str
    // 得到时间字符串
    const dateStr = new Date(timeStamp)
    str = dateType.replace('YYYY', dateStr.getFullYear());
    str = str.replace('MM', (dateStr.getMonth() + 1 < 10 ? '0' : '') + (dateStr.getMonth() + 1))
    str = str.replace('DD', (dateStr.getDate() < 10 ? '0' : '') + dateStr.getDate())
    str = str.replace('hh', (dateStr.getHours() < 10 ? '0' : '') + dateStr.getHours())
    str = str.replace('mm', (dateStr.getMinutes() < 10 ? '0' : '') + dateStr.getMinutes())
    str = str.replace('ss', (dateStr.getSeconds() < 10 ? '0' : '') + dateStr.getSeconds())
    return str
  }

// js获取url传递参数，js获取url？号后面的参数
  function GetRequest() {  
	var url = location.search; //获取url中"?"符后的字串  
	var theRequest = new Object();  
	if (url.indexOf("?") != -1) {  
	   var str = url.substr(1);  
	   strs = str.split("&");  
	   for(var i = 0; i < strs.length; i ++) {  
		  theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
	   }  
	}  
	return theRequest;  
 } 


