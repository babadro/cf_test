/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.ProgressBar){
ColdFusion.ProgressBar={};
}
var $P=ColdFusion.ProgressBar;
ColdFusion.ProgressBar.create=function(_330,_331,_332,_333,_334,_335,_336,_337,_338,_339){
var _33a={renderTo:_330,interval:_333,onComplete:_337,autodisplay:_336,onError:_339};
var _33b={renderTo:_330};
if(_335!=null&&typeof (_335)!=undefined){
_33a.width=_335;
_33b.width=_335;
}else{
_33b.width=400;
}
if(_334!=null&&typeof (_334)!=undefined){
_33a.height=_334;
_33b.height=_334;
}else{
_33a.autoHeight=true;
_33b.autoHeight=true;
}
if(_331!=null){
_33a.manual=true;
_33a.status_retrieval_fn=_331;
}else{
_33a.manual=false;
_33a.duration=_332;
}
_33a.hidden=!_336;
_33b.hidden=_33a.hidden;
if(_338!=null&&typeof _338!="undefined"){
_33a.cls=_338;
_33b.cls=_338;
}
var _33c=new Ext.ProgressBar(_33b);
_33a.progressBarComp=_33c;
ColdFusion.objectCache[_330]=_33a;
ColdFusion.Log.info("progressbar.create.created","widget",[_330]);
};
$P.start=function(_33d){
var _33e=$P.getProgressBarObject(_33d);
var _33f=ColdFusion.objectCache[_33d];
if(!_33e.isVisible()){
_33e=_33e.show();
}
_33f.started=true;
if(_33f.manual==false){
var _340=_33f.interval;
var _341=_33f.duration;
var _342=_341/_340;
_33e.wait({interval:_340,duration:_341,increment:_342,fn:$P.automaticPBCompleteHandler,scope:_33f});
}else{
var _343=setInterval(_33f.status_retrieval_fn,_33f.interval);
_33f.processId=_343;
}
ColdFusion.Log.info("progressbar.start.started","widget",[_33d]);
};
$P.stop=function(_344,_345){
var pBar=$P.getProgressBarObject(_344);
var _347=ColdFusion.objectCache[_344];
var _348=_347.processId;
if(typeof _347.started!="undefined"&&_347.started==true){
_347.started=false;
}else{
ColdFusion.Log.info("progressbar.stop.nonrunning","widget",[_344]);
return;
}
if(_348!=null&&typeof (_348)!="undefined"){
clearInterval(_348);
}
if(typeof _347.manual!="undefined"&&_347.manual==false){
pBar.reset();
}
if(_345&&_345==true){
var _349=_347.onComplete;
if(_349!=null&&_349.call){
_349.call();
}
}
ColdFusion.Log.info("progressbar.stop.stopped","widget",[_344]);
};
$P.hide=function(_34a){
var pBar=$P.getProgressBarObject(_34a);
if(pBar.isVisible()){
pBar.hide();
}
ColdFusion.Log.info("progressbar.hide.hidden","widget",[_34a]);
};
$P.show=function(_34c){
var pBar=$P.getProgressBarObject(_34c);
if(!pBar.isVisible()){
pBar.show();
}
ColdFusion.Log.info("progressbar.show.shown","widget",[_34c]);
};
$P.reset=function(_34e){
var pBar=$P.getProgressBarObject(_34e);
if(typeof pBar!="undefined"){
pBar.reset();
}
ColdFusion.Log.info("progressbar.reset.reset","widget",[_34e]);
};
$P.updateStatus=function(_350,_351,_352){
var pBar=$P.getProgressBarObject(_350);
if(typeof (_351)=="undefined"||typeof (_351)!="number"){
ColdFusion.handleError(null,"progressbar.updatestatus.invalidstatus","widget",[_350,_351],null,null,true);
return;
}
if(typeof pBar!="undefined"){
pBar.updateProgress(_351,_352);
}
ColdFusion.Log.info("progressbar.updatestatus.updated","widget",[_350]);
};
$P.update=function(_354,_355){
var _356={};
var _357=ColdFusion.objectCache[_354];
if(_357==null||typeof (_357)=="undefined"){
ColdFusion.handleError(null,"progressbar.update.notfound","widget",[_354],null,null,true);
return;
}
if(_355.duration){
if(typeof _355.duration==="number"||typeof _355.duration=="object"){
_356.duration=_355.duration;
}else{
ColdFusion.handleError(null,"progressbar.update.invalidduration","widget",[_354],null,null,true);
return;
}
}
if(_355.interval){
if(typeof _355.interval==="number"||typeof _355.interval=="object"){
_356.interval=_355.interval;
}else{
ColdFusion.handleError(null,"progressbar.update.invalidinterval","widget",[_354],null,null,true);
return;
}
}
if(_355.oncomplete){
if(typeof _355.oncomplete==="function"||typeof _355.oncomplete=="object"){
_356.onComplete=_355.oncomplete;
}else{
ColdFusion.handleError(null,"progressbar.update.invalidoncomplete","widget",[_354],null,null,true);
return;
}
}
for(key in _356){
_357[key]=_356[key];
}
ColdFusion.Log.info("progressbar.update.updated","widget",[_354]);
};
$P.loadStatus=function(data,_359){
var _35a=ColdFusion.AjaxProxy.JSON.decode(data);
var _35b=_35a.MESSAGE;
var _35c=_35a.STATUS;
var pBar=$P.getProgressBarObject(_359._cf_progressbarid);
pBar.updateProgress(_35c,_35b);
if(_35c&&(_35c===1||_35c==1||_35c>1)){
$P.stop(_359._cf_progressbarid,true);
}
};
$P.automaticPBCompleteHandler=function(){
var _35e=this.progressBarComp;
_35e.updateProgress(1);
if(this.onComplete&&typeof this.onComplete=="function"){
this.onComplete.call(_35e,_35e);
}
};
$P.errorHandler=function(_35f,_360,_361){
var pbId=_361.bindToParams._cf_progressbarid;
var _363=ColdFusion.objectCache[pbId];
var _364=_363.onError;
if(_364!=null&&typeof _364==="function"){
_364.call(null,_35f,_360);
}
$P.stop(pbId);
};
$P.getProgressBarObject=function(_365){
var _366=ColdFusion.objectCache[_365];
if(_366==null||typeof (_366)=="undefined"){
ColdFusion.handleError(null,"progressbar.getProgressBarObject.missingprogressbarid","widget",[_365],null,null,true);
return;
}
if(_366.progressBarComp&&typeof _366.progressBarComp!="undefined"){
return _366.progressBarComp;
}else{
ColdFusion.handleError(null,"progressbar.getProgressBarObject.missingprogressbarcomponent","widget",[_365],null,null,true);
return;
}
};
