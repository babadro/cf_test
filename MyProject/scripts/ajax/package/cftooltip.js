/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Tooltip){
ColdFusion.Tooltip={};
}
ColdFusion.Tooltip.setToolTipOut=function(_1,_2){
var _3=_2.tooltip;
_3.tooltipout=true;
};
ColdFusion.Tooltip.getToolTip=function(_4,_5){
var _6=ColdFusion.objectCache[_5.context];
if(!_6){
if(_5.style){
_5.styleObj=ColdFusion.Tooltip.parseStyle(_5.style);
}
_6=new YAHOO.widget.Tooltip(_5.context+"_cf_tooltip",_5);
ColdFusion.objectCache[_5.context]=_6;
_6.doShow(_4,_5.context);
if(_5._cf_url){
var _7=function(_8,_9){
_9.tooltip.cfg.setProperty("text",_8.responseText);
if(_9.tooltip.tooltipout==false){
_9.tooltip.doShow(_9.event,_9.id);
}
};
YAHOO.util.Event.addListener(_5.context,"mouseout",ColdFusion.Tooltip.setToolTipOut,{"tooltip":_6});
_6.cfg.setProperty("text",_cf_loadingtexthtml);
_6.doShow(_4,_5.context);
try{
ColdFusion.Log.info("tooltip.gettooltip.fetch","widget",[_5.context]);
ColdFusion.Ajax.sendMessage(_5._cf_url,"GET",_5._cf_query,true,_7,{tooltip:_6,event:_4,id:_5.context});
}
catch(e){
tooltipdiv=ColdFusion.DOM.getElement(_5.context);
tooltipdiv.innerHTML="";
ColdFusion.globalErrorHandler(null,e,tooltipdiv);
}
}
}
_6.tooltipout=false;
};
ColdFusion.Tooltip.parseStyle=function(_a){
var _b={};
if(_a&&typeof _a==="string"){
var _c=_a.split(";");
for(var i=0;i<_c.length;i++){
var _e=_c[i];
tempArray=_e.split(":");
if(tempArray.length===2){
var _f=tempArray[0];
_f=_f.toLowerCase();
var _10=tempArray[1];
switch(_f){
case "width":
_b.width=_10;
break;
case "color":
_b.color=_10;
break;
case "background-color":
_b[_f]=_10;
break;
case "padding":
_b.padding=_10;
break;
default:
_b[_f]=_10;
}
}
}
}
return _b;
};
