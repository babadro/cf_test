/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Autosuggest){
ColdFusion.Autosuggest={};
}
var staticgifpath=_cf_ajaxscriptsrc+"/resources/cf/images/static.gif";
var dynamicgifpath=_cf_ajaxscriptsrc+"/resources/cf/images/loading.gif";
ColdFusion.Autosuggest.loadAutoSuggest=function(_255,_256){
var _257=ColdFusion.objectCache[_256.autosuggestid];
if(typeof (_255)=="string"){
_255=_255.split(",");
}else{
var _258=false;
if(_255&&ColdFusion.Util.isArray(_255)){
_258=true;
if(_255.length>0&&(typeof (_255[0])!="string"&&typeof (_255[0])!="number")){
_258=false;
}
}
if(!_258){
ColdFusion.handleError(_257.onbinderror,"autosuggest.loadautosuggest.invalidvalue","widget",[_256.autosuggestid]);
return;
}
}
var _259=document.getElementById(_256.autosuggestid).value;
if(_259.length==1&&_255.length==0){
var _25a=new Array();
_257.dataSource.flushCache();
_257.dataSource=new YAHOO.widget.DS_JSArray(_25a);
_257.autosuggestitems=_25a;
}
if(_255.length>0){
var i=0;
var _25c=false;
var _25a=new Array();
for(i=0;i<_255.length;i++){
if(_255[i]){
if(typeof (_255[i])=="string"){
_25a[i]=_255[i];
}else{
if(typeof (_255[i])=="number"){
_25a[i]=_255[i]+"";
}else{
_25a[i]=new String(_255[i]);
}
}
if(_25a[i].indexOf(_259)==0){
_25c=true;
}
}
}
if(_25c==false&&_257.showloadingicon==true){
document.getElementById(_256.autosuggestid+"_cf_button").src=staticgifpath;
}
_257.dataSource.flushCache();
_257.dataSource=new YAHOO.widget.DS_JSArray(_25a);
_257.autosuggestitems=_25a;
if(_257.queryMatchContains){
_257.dataSource.queryMatchContains=_257.queryMatchContains;
}
_257._sendQuery(_259);
}else{
if(_257.showloadingicon==true){
document.getElementById(_256.autosuggestid+"_cf_button").src=staticgifpath;
_257.showloadingicon==false;
}
}
};
ColdFusion.Autosuggest.checkToMakeBindCall=function(arg,_25e,_25f,_260,_261){
var _260=document.getElementById(_25e).value;
if(!_25f.isContainerOpen()&&_260.length>0&&arg.keyCode!=39&&(arg.keyCode>31||(arg.keyCode==8&&_25f.valuePresent==true))){
_25f.valuePresent=false;
if(_25f.showloadingicon==true){
document.getElementById(_25e+"_cf_button").src=dynamicgifpath;
}
ColdFusion.Log.info("autosuggest.checktomakebindcall.fetching","widget",[_25e,_260]);
if(_25f.cfqueryDelay>0){
var _262=setTimeout(_261,_25f.cfqueryDelay*1000,this);
if(_25f._nDelayID!=-1){
clearTimeout(_25f._cf_nDelayID);
}
_25f._cf_nDelayID=_262;
}else{
_261.call(this);
}
}
};
ColdFusion.Autosuggest.checkValueNotInAutosuggest=function(_263,_264){
if(_263.autosuggestitems){
for(var i=0;i<_263.autosuggestitems.length;i++){
if(_264==_263.autosuggestitems[i]){
return false;
}
}
}
return true;
};
ColdFusion.Autosuggest.triggerOnChange=function(type,args){
var _268=args[0];
var _269=document.getElementById(_268.id);
ColdFusion.Event.callBindHandlers(_268.id,null,"change");
};
ColdFusion.Autosuggest.init=function(_26a,_26b,_26c){
return new YAHOO.widget.AutoComplete(_26a,_26b,_26c);
};
ColdFusion.Autosuggest.getAutosuggestObject=function(_26d){
var _26e=ColdFusion.objectCache[_26d];
if(_26e==null||typeof (_26e)=="undefined"){
ColdFusion.handleError(null,"autosuggest.getAutosuggestObject.notfound","widget",[_26d],null,null,true);
}
return _26e;
};
ColdFusion.Autosuggest.initJS_ARRAY=function(_26f){
return new YAHOO.widget.DS_JSArray(_26f);
};
