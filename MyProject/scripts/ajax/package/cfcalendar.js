/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Calendar){
ColdFusion.Calendar={};
}
ColdFusion.Calendar.monthNamesShort=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
ColdFusion.Calendar.monthNamesLong=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
ColdFusion.Calendar.dayNamesShort=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
ColdFusion.Calendar.dayNamesLong=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
ColdFusion.Calendar.calTableIdCounter=0;
if(navigator.userAgent.toLowerCase().indexOf("safari")>-1){
var set_month=Date.prototype.setMonth;
Date.prototype.setMonth=function(num){
if(num<=-1){
var n=Math.ceil(-num);
var _13=Math.ceil(n/12);
var _14=(n%12)?12-n%12:0;
this.setFullYear(this.getFullYear()-_13);
return set_month.call(this,_14);
}else{
return set_month.apply(this,arguments);
}
};
}
if(!String.escape){
String.escape=function(_15){
return _15.replace(/('|\\)/g,"\\$1");
};
}
ColdFusion.Calendar.setUpCalendar=function(_16,_17,_18,_19,_1a,_1b,_1c){
var _1d=ColdFusion.DOM.getElement(_16+_1b+"_cf_button",_1b);
var _1e=ColdFusion.DOM.getElement(_16,_1b);
var _1f=null;
var _20=null;
if(_1e.value!=""){
_1f=_1e.value;
_20=_1f.split("/");
}
var _21=_16+"_cf_calendar"+ColdFusion.Calendar.calTableIdCounter;
ColdFusion.Calendar.calTableIdCounter++;
var _22=ColdFusion.DOM.getElement(_16+_1b+"_cf_container",_1b);
var _23=_1e.offsetLeft;
ColdFusion.DOM.getElement(_16+_1b+"_cf_container",_1b).style.left=_23;
YAHOO.widget.Calendar.IMG_ROOT=_cf_ajaxscriptsrc+"/resources/yui/";
var _24;
if(_20&&_20[0]&&_20[2]){
_24=new YAHOO.widget.Calendar(_21,_16+_1b+"_cf_container",{close:true,pagedate:_20[0]+"/"+_20[2]});
}else{
_24=new YAHOO.widget.Calendar(_21,_16+_1b+"_cf_container",{close:true});
}
_24.calendarinputid=_16;
_24.calendarinput=_1e;
_24.mask=_17;
_24.formname=_1b;
_24.cfg.setProperty("MONTHS_LONG",_1a);
_24.cfg.setProperty("WEEKDAYS_SHORT",_19);
_24.cfg.setProperty("START_WEEKDAY",_18);
ColdFusion.objectCache[_21+_1b]=_24;
_24.select(_1f);
_24.render();
_24.hide();
_24.selectEvent.subscribe(ColdFusion.Calendar.handleDateSelect,_24,true);
YAHOO.util.Event.addListener(_16+_1b+"_cf_button","click",ColdFusion.Calendar.handleCalendarLinkClick,_24,true);
if(_1c!=null){
var _25=_1c.year;
var _26=_1c.month;
var day=_1c.day;
var _28=new Date(_25,_26.valueOf()-1,day);
_1e.value=ColdFusion.Calendar.createFormattedOutput(_16,_17,_25,_26,day,_28);
}
};
ColdFusion.Calendar.openedCalendarInstance=null;
ColdFusion.Calendar.handleCalendarLinkClick=function(_29,_2a){
var _2b=_2a;
if(ColdFusion.Calendar.openedCalendarInstance){
ColdFusion.Calendar.openedCalendarInstance.hide();
}
if(!_2b.extMask){
var _2c=ColdFusion.Calendar.convertToExtMask(_2b.mask);
_2b.extMask=_2c;
}
var _2d=ColdFusion.DOM.getElement(_2a.calendarinputid,_2b.formname).value;
var _2e=null;
if(typeof (_2d)!="undefined"&&ColdFusion.trim(_2d)!=""){
_2e=Date.parseDate(_2d,_2b.extMask);
}
if(_2e!=null){
_2b.setMonth(_2e.getMonth());
_2b.setYear(_2e.getFullYear());
_2b.select(_2e);
_2b.render();
}
ColdFusion.Calendar.openedCalendarInstance=_2b;
_2b.show();
};
ColdFusion.Calendar.handleDateSelect=function(_2f,_30,_31){
var _32=_30[0];
var _33=_32[0];
var _34=_33[0],month=_33[1],day=_33[2];
var _35=new Date(_34,month.valueOf()-1,day);
_31.calendarinput.value=ColdFusion.Calendar.createFormattedOutput(_31.calendarinputid,_31.mask,_34,month,day,_35);
ColdFusion.Event.callBindHandlers(_31.calendarinputid,null,"change");
_31.hide();
};
ColdFusion.Calendar.convertToExtMask=function(_36){
_36=_36.toUpperCase();
if(_36.indexOf("DD")!=-1){
_36=_36.replace(/DD/g,"d");
}
if(_36.indexOf("D")!=-1){
_36=_36.replace(/D/g,"d");
}
if(_36.indexOf("MMMM")!=-1){
_36=_36.replace(/MMMM/g,"F");
}else{
if(_36.indexOf("MMM")!=-1){
_36=_36.replace(/MMM/g,"M");
}else{
if(_36.indexOf("MM")!=-1){
_36=_36.replace(/MM/g,"m");
}else{
if(_36.indexOf("M")!=-1){
_36=_36.replace(/M/g,"m");
}
}
}
}
if(_36.indexOf("YYYY")!=-1){
_36=_36.replace(/YYYY/g,"Y");
}
if(_36.indexOf("YY")!=-1){
_36=_36.replace(/YY/g,"y");
}
if(_36.indexOf("EEEE")!=-1){
_36=_36.replace(/EEEE/g,"l");
}
if(_36.indexOf("EEE")!=-1){
_36=_36.replace(/EEE/g,"D");
}
if(_36.indexOf("E")!=-1){
_36=_36.replace(/E/g,"w");
}
return _36;
};
ColdFusion.Calendar.createFormattedOutput=function(_37,_38,_39,_3a,day,_3c){
_38=_38.toUpperCase();
_39=new String(_39);
_3a=new String(_3a);
day=new String(day);
var _3d=_3c.getDay();
if(_38.indexOf("DD")!=-1){
if(day.length==1){
day="0"+day;
}
_38=_38.replace(/DD/g,day);
}
if(_38.indexOf("D"!=-1)){
if(day.length!=-1&&day.charAt(0)=="0"){
day=day.charAt(1);
}
_38=_38.replace(/D/g,day);
}
if(_38.indexOf("MMMM")!=-1){
_3a=ColdFusion.Calendar.monthNamesLong[_3a.valueOf()-1];
_38=_38.replace(/MMMM/g,_3a);
}else{
if(_38.indexOf("MMM")!=-1){
_3a=ColdFusion.Calendar.monthNamesShort[_3a.valueOf()-1];
_38=_38.replace(/MMM/g,_3a);
}else{
if(_38.indexOf("MM")!=-1){
if(_3a.length==1){
_3a="0"+_3a;
}
_38=_38.replace(/MM/g,_3a);
}else{
if(_38.indexOf("M")!=-1){
if(_3a.length!=-1&&_3a.charAt(0)=="0"){
_3a=_3a.charAt(1);
}
_38=_38.replace(/M/g,_3a);
}
}
}
}
if(_38.indexOf("YYYY")!=-1){
_38=_38.replace(/YYYY/g,_39);
}
if(_38.indexOf("YY")!=-1){
_39=_39.substring(2);
_38=_38.replace(/YY/g,_39);
}
if(_38.indexOf("EEEE")!=-1){
_3d=ColdFusion.Calendar.dayNamesLong[_3d.valueOf()];
_38=_38.replace(/EEEE/g,_3d);
}
if(_38.indexOf("EEE")!=-1){
_3d=ColdFusion.Calendar.dayNamesShort[_3d.valueOf()];
_38=_38.replace(/EEE/g,_3d);
}
if(_38.indexOf("E")!=-1){
_3d=_3d.valueOf();
_3d=new String(_3d);
if(_3d.length!=-1&&_3d.charAt(0)=="0"&&_3d.charAt(1)){
_3d=_3d.charAt(1);
}
_38=_38.replace(/E/g,_3d);
}
return _38;
};
