/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.MessageBox){
ColdFusion.MessageBox={};
}
var $MB=ColdFusion.MessageBox;
var $XB=Ext.MessageBox;
var DEFAULT_OK=$XB.buttonText.ok;
var DEFAULT_NO=$XB.buttonText.no;
var DEFAULT_CANCEL=$XB.buttonText.cancel;
var DEFAULT_YES=$XB.buttonText.yes;
var DEFAULT_ALERT_BUTTON_TYPE=$XB.OK;
var DEFAULT_CONFIRM_BUTTON_TYPE=$XB.YESNO;
var DEFAULT_PROMPT_BUTTON_TYPE=$XB.OKCANCEL;
var CF_BEFORE_SHOW_HANDLER_ADDED=false;
var CURRENT_MESSAGEBOX_ID;
ColdFusion.MessageBox.init=function(_5ac,type,_5ae,_5af,_5b0,_5b1,_5b2,_5b3,_5b4,_5b5,_5b6,icon,_5b8,x,y,_5bb,_5bc){
var _5bd={messageBoxId:_5ac,type:type,callBack_Fn:_5b6,multiline:_5b4,modal:_5b5,width:_5b8,bodyStyle:_5bc};
if(_5ae==null||typeof (_5ae)=="undefined"){
_5ae="";
}
_5ae=ColdFusion.Util.replaceAll(_5ae,"\n","<br>");
_5bd.messageText=_5ae;
if(_5b0!=null&&typeof (_5b0)!="undefined"){
_5bd.label_OK=_5b0;
}
if(_5b1!=null&&typeof (_5b1)!="undefined"){
_5bd.label_NO=_5b1;
}
if(_5b3!=null&&typeof (_5b3)!="undefined"){
_5bd.label_YES=_5b3;
}
if(_5b2!=null&&typeof (_5b2)!="undefined"){
_5bd.label_CANCEL=_5b2;
}
if(_5af==null||typeof (_5af)=="undefined"){
type=type.toLowerCase();
if(type=="alert"){
_5af="Alert";
}else{
if(type=="confirm"){
_5af="Confirm";
}else{
if(type=="prompt"){
_5af="Prompt";
}
}
}
}
_5bd.title=_5af;
if(_5bb&&typeof (_5bb)=="string"){
_5bd.buttonType=_5bb;
}
if(icon&&typeof (icon)=="string"){
_5bd.icon=icon;
}
if(typeof x=="number"&&x>=0){
_5bd.x=x;
}
if(typeof y=="number"&&y>=0){
_5bd.y=y;
}
ColdFusion.objectCache[_5ac]=_5bd;
};
$MB.show=function(_5be){
var _5bf=$MB.getMessageBoxObject(_5be);
var type=_5bf.type;
type=(new String(type)).toLowerCase();
if(!CF_BEFORE_SHOW_HANDLER_ADDED){
var _5c1=Ext.MessageBox.getDialog();
_5c1.addListener("beforeshow",$MB.beforeShowHandler,_5bf);
CF_BEFORE_SHOW_HANDLER_ADDED=true;
}
CURRENT_MESSAGEBOX_ID=_5be;
var _5c2=_5bf.buttonType;
var _5c3={ok:DEFAULT_OK,no:DEFAULT_NO,cancel:DEFAULT_CANCEL,yes:DEFAULT_YES};
if(_5bf.label_OK){
_5c3.ok=_5bf.label_OK;
}
if(_5bf.label_YES){
_5c3.yes=_5bf.label_YES;
}
if(_5bf.label_NO){
_5c3.no=_5bf.label_NO;
}
if(_5bf.label_CANCEL){
_5c3.cancel=_5bf.label_CANCEL;
}
Ext.MessageBox.buttonText=_5c3;
if(typeof _5c2!="undefined"){
_5c2=_5c2.toUpperCase();
if(_5c2&&_5c2!=="OKCANCEL"&&_5c2!=="OK"&&_5c2!=="YESNOCANCEL"&&_5c2!=="YESNO"){
ColdFusion.handleError(null,"messagebox.show.invalidbuttontype","widget",[messagebox,_5c2],null,null,true);
}
switch(_5c2){
case "OK":
_5c2=$XB.OK;
break;
case "OKCANCEL":
_5c2=$XB.OKCANCEL;
break;
case "YESNOCANCEL":
_5c2=$XB.YESNOCANCEL;
break;
case "YESNO":
_5c2=$XB.YESNO;
break;
}
}
var icon=_5bf.icon;
var _5c5="";
if(icon&&typeof (icon)==="string"){
icon=icon.toUpperCase();
switch(icon){
case "ERROR":
_5c5=$XB.ERROR;
break;
case "INFO":
_5c5=$XB.INFO;
break;
case "QUESTION":
_5c5=$XB.QUESTION;
break;
case "WARNING":
_5c5=$XB.WARNING;
break;
}
}
var _5c6={title:_5bf.title,msg:_5bf.messageText,fn:_5bf.callBack_Fn,modal:_5bf.modal,icon:_5c5,scope:null};
if(_5bf.width){
_5c6.width=_5bf.width;
if(_5c6.width>600){
_5c6.maxWidth=_5c6.width;
}
if(_5c6.width<100){
_5c6.minWidth=_5c6.width;
}
}
if(type==="alert"){
if(!_5c2){
_5c2=DEFAULT_ALERT_BUTTON_TYPE;
}
_5c6.buttons=_5c2;
$XB.show(_5c6);
}
if(type==="confirm"){
if(!_5c2){
_5c2=DEFAULT_CONFIRM_BUTTON_TYPE;
}
_5c6.buttons=_5c2;
$XB.show(_5c6);
}
if(type==="prompt"){
if(!_5c2){
_5c2=DEFAULT_PROMPT_BUTTON_TYPE;
}
_5c6.buttons=_5c2;
_5c6.prompt=true;
_5c6.multiline=_5bf.multiline;
_5c6.value="",$XB.show(_5c6);
}
ColdFusion.Log.info("messagebox.show.shown","widget",[_5be]);
};
$MB.create=function(_5c7,type,_5c9,_5ca,_5cb,_5cc){
if(_5c7&&typeof _5c7!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidname","widget",null,null,null,true);
return;
}
if(!_5c7||ColdFusion.trim(_5c7)==""){
ColdFusion.handleError(null,"messagebox.create.invalidname","widget",null,null,null,true);
return;
}
var _5cd=ColdFusion.objectCache[_5c7];
if(_5cd!=null||typeof _5cd!="undefined"){
ColdFusion.handleError(null,"messagebox.create.duplicatename","widget",[_5c7],null,null,true);
return;
}
if(_5ca&&typeof _5ca!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidmessage","widget",[_5c7],null,null,true);
return;
}
if(!_5ca||ColdFusion.trim(_5ca)==""){
ColdFusion.handleError(null,"messagebox.create.invalidmessage","widget",[_5c7],null,null,true);
return;
}
if(_5c9&&typeof _5c9!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidtitle","widget",[_5c7],null,null,true);
return;
}
if(type&&typeof type!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidtype","widget",[_5c7],null,null,true);
return;
}
if(!type||ColdFusion.trim(type)==""){
ColdFusion.handleError(null,"messagebox.create.emptytype","widget",[_5c7],null,null,true);
return;
}
if(_5cb&&typeof _5cb!=="function"){
ColdFusion.handleError(null,"messagebox.create.invalidcallback","widget",[_5c7],null,null,true);
return;
}
var _5ce=DEFAULT_CANCEL;
var _5cf=DEFAULT_NO;
var _5d0=DEFAULT_OK;
var _5d1=DEFAULT_YES;
var _5d2=true;
var _5d3=null;
var _5d4=false;
var icon;
var _5d6;
var x;
var y;
var _5d9;
if(_5cc&&_5cc.labelok){
_5d0=_5cc.labelok;
}
if(_5cc&&_5cc.labelno){
_5cf=_5cc.labelno;
}
if(_5cc&&_5cc.labelyes){
_5d1=_5cc.labelyes;
}
if(_5cc&&_5cc.labelcancel){
_5ce=_5cc.labelcancel;
}
if(_5cc&&typeof _5cc.multiline==="boolean"){
_5d4=_5cc.multiline;
}
if(_5cc&&typeof _5cc.modal==="boolean"){
_5d2=_5cc.modal;
}
if(_5cc&&_5cc.buttontype){
_5d3=_5cc.buttontype;
if(type.toUpperCase()!=="CONFIRM"){
ColdFusion.handleError(null,"messagebox.create.invalidtypeandbuttontypecombination","widget",[_5c7],null,null,true);
}else{
if(_5d3.toUpperCase()!="YESNO"&&_5d3.toUpperCase()!="YESNOCANCEL"){
ColdFusion.handleError(null,"messagebox.create.invalidbuttontype","widget",[_5c7,_5d3],null,null,true);
}
}
}
if(_5cc&&_5cc.width){
_5d6=_5cc.width;
if(_5d6&&typeof _5d6!="number"){
ColdFusion.handleError(null,"messagebox.create.widthnotnumeric","widget",[_5c7,_5d6],null,null,true);
}
}
if(_5cc&&typeof _5cc.x!="undefined "){
if(_5cc.x&&typeof _5cc.x!="number"){
ColdFusion.handleError(null,"messagebox.create.xnotnumeric","widget",[_5c7,_5cc.x],null,null,true);
return;
}
x=_5cc.x;
}
if(_5cc&&typeof _5cc.y!="undefined"){
if(_5cc.y&&typeof _5cc.y!="number"){
ColdFusion.handleError(null,"messagebox.create.ynotnumeric","widget",[_5c7,_5cc.y],null,null,true);
return;
}
y=_5cc.y;
}
if(_5cc&&_5cc.icon){
icon=_5cc.icon;
if(icon){
icon=icon.toUpperCase();
if(icon!="ERROR"&&icon!="INFO"&&icon!="QUESTION"&&icon!="WARNING"){
ColdFusion.handleError(null,"messagebox.create.invalidicon","widget",[_5c7,icon],null,null,true);
}
}
}
if(_5cc&&_5cc.bodystyle){
_5d9=_5cc.bodystyle;
}
$MB.init(_5c7,type,_5ca,_5c9,_5d0,_5cf,_5ce,_5d1,_5d4,_5d2,_5cb,icon,_5d6,x,y,_5d3,_5d9);
ColdFusion.Log.info("messagebox.create.created","widget",[_5c7,type]);
};
$MB.updateMessage=function(_5da,_5db){
var _5dc=$MB.getMessageBoxObject(_5da);
_5dc.messageText=_5db;
ColdFusion.Log.info("messagebox.updatemessage.updated","widget",[_5da]);
};
$MB.updateTitle=function(_5dd,_5de){
var _5df=$MB.getMessageBoxObject(_5dd);
_5df.title=_5de;
ColdFusion.Log.info("messagebox.updatetitle.updated","widget",[_5dd]);
};
$MB.update=function(_5e0,_5e1){
var _5e2=$MB.getMessageBoxObject(_5e0);
var _5e3={};
if(!_5e1||typeof _5e1!="object"){
ColdFusion.handleError(null,"messagebox.update.invalidconfigobject","widget",[_5e0],null,null,true);
return;
}
if(_5e1.name&&typeof _5e1.name=="string"){
ColdFusion.handleError(null,"messagebox.update.nameupdatenotallowed","widget",[_5e0],null,null,true);
return;
}
if(_5e1.type&&typeof _5e1.type=="string"){
ColdFusion.handleError(null,"messagebox.update.typeupdatenotallowed","widget",[_5e0],null,null,true);
return;
}
if(_5e1.message){
if(typeof _5e1.message==="string"||typeof _5e1.message=="object"){
_5e3.messageText=_5e1.message;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidmessage","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.title){
if(typeof _5e1.title==="string"||typeof _5e1.title=="object"){
_5e3.title=_5e1.title;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidtitle","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.labelok!=null||typeof _5e1.labelok!="undefined"){
if(typeof _5e1.labelok==="string"||typeof _5e1.labelok=="object"){
_5e3.label_OK=_5e1.labelok;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelok","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.labelno!=null||typeof _5e1.labelno!="undefined"){
if(typeof _5e1.labelno==="string"||typeof _5e1.labelno=="object"){
_5e3.label_NO=_5e1.labelno;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelno","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.labelyes!=null||typeof _5e1.labelyes!="undefined"){
if(typeof _5e1.labelyes==="string"||typeof _5e1.labelyes=="object"){
_5e3.label_YES=_5e1.labelyes;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelyes","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.labelcancel!=null||typeof _5e1.labelcancel!="undefined"){
if(typeof _5e1.labelcancel==="string"||typeof _5e1.labelcancel=="object"){
_5e3.label_CANCEL=_5e1.labelcancel;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelcancel","widget",[_5e0],null,null,true);
return;
}
}
if(typeof _5e1.modal=="boolean"){
_5e3.modal=_5e1.modal;
}
if(typeof _5e1.multiline==="boolean"){
if(_5e2.type.toLowerCase()!="prompt"){
ColdFusion.handleError(null,"messagebox.update.invalidtypeformultiline","widget",[_5e0],null,null,true);
return;
}
_5e3.multiline=_5e1.multiline;
}
if(_5e1&&_5e1.width){
if(typeof _5e1.width==="number"||typeof _5e1.width=="object"){
_5e3.width=_5e1.width;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidwidth","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.icon!=null||typeof _5e1.icon!="undefined"){
if(typeof _5e1.icon==="string"){
icon=_5e1.icon.toUpperCase();
if(icon!="ERROR"&&icon!="INFO"&&icon!="QUESTION"&&icon!="WARNING"){
ColdFusion.handleError(null,"messagebox.update.invalidicon","widget",[_5e0],null,null,true);
return;
}
_5e3.icon=_5e1.icon;
}else{
if(typeof _5e1.icon=="object"&&_5e1.icon==null){
_5e3.icon=null;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidicon","widget",[_5e0],null,null,true);
return;
}
}
}
if(_5e1.callbackhandler!=null||typeof _5e1.callbackhandler!="undefined"){
if(typeof _5e1.callbackhandler==="function"||typeof _5e1.callbackhandler==="object"){
_5e3.callBack_Fn=_5e1.callbackhandler;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidcallbackhandler","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.x!=null||typeof _5e1.x!="undefined"){
if(typeof _5e1.x==="number"||typeof _5e1.x=="object"){
_5e3.x=_5e1.x;
}else{
ColdFusion.handleError(null,"messagebox.update.xnotnumeric","widget",[_5e0,_5e1.x],null,null,true);
return;
}
}
if(_5e1.y!=null||typeof _5e1.y!="undefined"){
if(typeof _5e1.y==="number"||typeof _5e1.y=="object"){
_5e3.y=_5e1.y;
}else{
ColdFusion.handleError(null,"messagebox.update.ynotnumeric","widget",[_5e0,_5e1.y],null,null,true);
return;
}
}
if(_5e1.bodystyle!=null||typeof _5e1.bodystyle!="undefined"){
if(typeof _5e1.bodystyle==="string"||typeof _5e1.bodystyle=="object"){
_5e3.bodyStyle=_5e1.bodystyle;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidbodystyle","widget",[_5e0],null,null,true);
return;
}
}
if(_5e1.buttontype!=null||typeof _5e1.buttontype!="undefined"){
if(typeof _5e1.buttontype==="string"||typeof _5e1.buttontype==="object"){
buttonType=_5e1.buttontype;
if(_5e2.type.toUpperCase()!=="CONFIRM"){
ColdFusion.handleError(null,"messagebox.update.invalidtypeandbuttontypecombination","widget",[_5e0],null,null,true);
return;
}else{
if(buttonType.toUpperCase()!="YESNO"&&buttonType.toUpperCase()!="YESNOCANCEL"){
ColdFusion.handleError(null,"messagebox.update.invalidbuttontype","widget",[_5e0],null,null,true);
return;
}
}
_5e3.buttonType=_5e1.buttontype;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidbuttontype","widget",[_5e0],null,null,true);
return;
}
}
for(key in _5e3){
_5e2[key]=_5e3[key];
}
ColdFusion.Log.info("messagebox.update.updated","messagebox",[_5e0]);
};
$MB.getMessageBoxObject=function(_5e4){
var _5e5=ColdFusion.objectCache[_5e4];
if(_5e5==null||typeof (_5e5)=="undefined"){
ColdFusion.handleError(null,"messagebox.getmessageboxobject.missingmessageboxid","widget",[_5e4],null,null,true);
}
return _5e5;
};
$MB.isMessageBoxDefined=function(_5e6){
var _5e7=ColdFusion.objectCache[_5e6];
if(_5e7==null||typeof (_5e7)=="undefined"){
return false;
}else{
return true;
}
};
$MB.beforeShowHandler=function(_5e8){
var _5e9=$MB.getMessageBoxObject(CURRENT_MESSAGEBOX_ID);
var _5ea=_5e9.x;
var _5eb=_5e9.y;
var _5ec=_5e9.bodyStyle;
var _5ed=_5e8.body.parent();
var id=_5ed.id;
var ele=document.getElementById(id);
ele.style.cssText=_5ec;
if(_5ea&&_5eb&&typeof _5ea=="number"&&typeof _5eb=="number"&&_5ea>=0&&_5eb>=0){
_5e8.setPosition(_5ea,_5eb);
}else{
_5e8.center();
}
};
