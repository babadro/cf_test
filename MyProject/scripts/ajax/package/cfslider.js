/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Slider){
ColdFusion.Slider={};
}
var $SL=ColdFusion.Slider;
ColdFusion.Slider.init=function(_228,name,_22a,_22b,_22c,_22d,_22e,_22f,_230,_231,tip,_233,_234){
var _235={renderTo:_228,id:name};
if(_230!=null&&typeof (_230)!="undefined"){
_235.ClicktoChange=_230;
}else{
_235.ClicktoChange=false;
}
if(_231!=null&&typeof (_231)!="undefined"){
_235.increment=_231;
}else{
_235.increment=1;
}
if(_22e!=null&&typeof (_22e)!=undefined){
_235.minValue=_22e;
}else{
_235.minValue=0;
}
if(_22d!=null&&typeof (_22d)!=undefined){
_235.value=_22d;
}else{
_235.value=_235.minValue;
}
if(_22b!=null&&typeof (_22b)!=undefined){
_235.width=_22b;
}else{
_235.width=200;
}
if(_22c!=null&&typeof (_22c)!="undefined"){
_235.height=_22c;
}else{
_235.height=100;
}
if(_22f!=null&&typeof (_22f)!=undefined){
_235.maxValue=_22f;
}else{
_235.maxValue=100;
}
if(_22a!=null&&typeof (_22a)!=undefined){
_235.vertical=_22a;
}else{
_235.vertical=false;
}
if(_233!=null&&typeof (_233)=="function"){
_235.onChange=_233;
}
if(_234!=null&&typeof (_234)!="undefined"){
_235.onDrg=_234;
}
Ext.ux.ST=Ext.extend(Ext.Tip,{minWidth:10,offsets:[0,-10],init:function(_236){
_236.on("dragstart",this.onSlide,this);
_236.on("drag",this.onSlide,this);
_236.on("dragend",this.hide,this);
_236.on("destroy",this.destroy,this);
},onSlide:function(_237){
this.show();
this.body.update(this.getText(_237));
this.el.alignTo(_237.thumb,"b-t?",this.offsets);
this.doAutoWidth();
},getText:function(_238){
return _238.getValue()==0?"0":_238.getValue();
}});
if(tip!=null&&typeof (tip)!="undefined"){
if(tip){
_235.plugins=new Ext.ux.ST();
}
}
var _239=new Ext.Slider(_235);
_239.on("drag",$SL.onDragHandler,_235);
_239.on("changecomplete",$SL.onChangeHandler,_235);
_235.sliderComp=_239;
ColdFusion.objectCache[name]=_235;
ColdFusion.Log.info("slider.initialized","widget",[name]);
};
$SL.onDragHandler=function(_23a,_23b){
var _23c=this.onDrg;
if(_23c!=null&&typeof (_23c)=="function"){
_23c.call(this,_23a,_23b);
}
};
$SL.onChangeHandler=function(_23d,_23e){
var _23f=this.onChange;
if(_23f!=null&&typeof (_23f)=="function"){
_23f.call(this,_23d,_23e);
}
};
$SL.getValue=function(_240){
var _241=ColdFusion.objectCache[_240];
if(_241!=null||typeof (_241)!="undefined"){
var _242=_241.sliderComp;
if(_242){
return _242.getValue();
}
}else{
ColdFusion.handleError(null,"slider.getvalue.notfound","widget",[_240],null,null,true);
}
};
$SL.getSliderObject=function(_243){
var _244=ColdFusion.objectCache[_243];
if(_244!=null||typeof (_244)!="undefined"){
return _244.sliderComp;
}else{
return null;
}
};
$SL.setValue=function(_245,_246){
var _247=ColdFusion.objectCache[_245];
if(_247!=null||typeof (_247)!="undefined"){
var _248=_247.sliderComp;
if(_248){
return _248.setValue(_246,true);
}
}else{
ColdFusion.handleError(null,"slider.setvalue.notfound","widget",[_245],null,null,true);
}
};
$SL.show=function(_249){
var _24a=ColdFusion.objectCache[_249];
if(_24a!=null||typeof (_24a)!="undefined"){
var _24b=_24a.sliderComp;
if(_24b){
return _24b.show();
}
}else{
ColdFusion.handleError(null,"slider.show.notfound","widget",[_249],null,null,true);
}
ColdFusion.Log.info("slider.show.shown","widget",[_249]);
};
$SL.hide=function(_24c){
var _24d=ColdFusion.objectCache[_24c];
if(_24d!=null||typeof (_24d)!="undefined"){
var _24e=_24d.sliderComp;
if(_24e){
return _24e.hide();
}
}else{
ColdFusion.handleError(null,"slider.hide.notfound","widget",[_24c],null,null,true);
}
ColdFusion.Log.info("slider.hide.hidden","widget",[_24c]);
};
$SL.enable=function(_24f){
var _250=ColdFusion.objectCache[_24f];
if(_250!=null||typeof (_250)!="undefined"){
var _251=_250.sliderComp;
if(_251){
return _251.enable();
}
}else{
ColdFusion.handleError(null,"slider.enable.notfound","widget",[_24f],null,null,true);
}
ColdFusion.Log.info("slider.enable.enabled","widget",[_24f]);
};
$SL.disable=function(_252){
var _253=ColdFusion.objectCache[_252];
if(_253!=null||typeof (_253)!="undefined"){
var _254=_253.sliderComp;
if(_254){
return _254.disable();
}
}else{
ColdFusion.handleError(null,"slider.disable.notfound","widget",[_252],null,null,true);
}
ColdFusion.Log.info("slider.disable.disabled","widget",[_252]);
};
