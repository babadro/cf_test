/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Button){
ColdFusion.Button={};
}
var $BT=ColdFusion.Button;
ColdFusion.Button.init=function(_3fd,_3fe,icon,tips,_401,_402,_403,_404,_405){
var _406={renderTo:_3fd,enableToggle:_405,text:_3fe,onClick:_401,onToggle:_402,onMouseOver:_403,onMouseout:_404,tooltip:tips,icon:icon};
var _407={renderTo:_3fd,enableToggle:_405,text:_3fe};
if(tips!=null&&typeof tips!="undefined"){
_407.tooltip=tips;
Ext.QuickTips.init();
}
if(icon!=null&&typeof icon!="undefined"){
_407.icon=icon;
}
if(icon&&_3fe){
_407.iconCls="x-btn-text-icon";
}else{
if(icon&&!_3fe){
_407.iconCls="x-btn-icon";
}
}
var _408=new Ext.Button(_407);
if(_401!=null&&typeof _401=="function"){
_408.on("click",_401,_406);
}
if(_402!=null&&typeof _402=="function"){
_408.on("toggle",_402,_406);
}
if(_403!=null&&typeof _403=="function"){
_408.on("mouseover",_403,_406);
}
if(_404!=null&&typeof _404=="function"){
_408.on("mouseout",_404,_406);
}
_406.buttonComp=_408;
ColdFusion.objectCache[_3fd]=_406;
ColdFusion.Log.info("button.initialized","widget",[_3fd]);
};
$BT.show=function(_409){
var _40a=$BT.getButtonObject(_409);
if(_40a!=null){
_40a.show();
}
ColdFusion.Log.info("button.show.shown","widget",[_409]);
};
$BT.hide=function(_40b){
var _40c=$BT.getButtonObject(_40b);
if(_40c!=null){
_40c.hide();
}
ColdFusion.Log.info("button.hide.hidden","widget",[_40b]);
};
$BT.disable=function(_40d){
var _40e=$BT.getButtonObject(_40d);
if(_40e!=null){
_40e.disable();
}
ColdFusion.Log.info("button.disable.disabled","widget",[_40d]);
};
$BT.enable=function(_40f){
var _410=$BT.getButtonObject(_40f);
if(_410!=null){
_410.enable();
}
ColdFusion.Log.info("button.enable.enabled","widget",[_40f]);
};
$BT.getButtonObject=function(_411){
var _412=$BT.getButtonConfigObj(_411);
if(_412!=null){
return _412.buttonComp;
}else{
ColdFusion.handleError(null,"button.component.notFound","widget",[_411],null,null,true);
}
};
$BT.setLabel=function(_413,_414){
var _415=$BT.getButtonObject(_413);
if(_415!=null){
_415.text=_414;
}
};
$BT.getButtonConfigObj=function(_416){
var _417=ColdFusion.objectCache[_416];
if(_417==null||typeof (_417)=="undefined"){
ColdFusion.handleError(null,"button.component.notFound","widget",[_416],null,null,true);
}
return _417;
};
$BT.toggle=function(_418){
var _419=$BT.getButtonObject(_418);
if(_419!=null){
_419.toggle();
}
};
