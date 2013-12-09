/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Mediaplayer){
ColdFusion.Mediaplayer={};
}
var $MP=ColdFusion.Mediaplayer;
$MP.defaultSWFLocation="/CFIDE/scripts/ajax/resources/cf/assets/mediaplayer.swf";
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
ColdFusion.Mediaplayer.init=function(_3e,_3f,_40,_41,_42,_43,_44,_45,_46,_47,_48,_49,_4a,_4b,_4c,_4d,_4e,_4f,_50,_51,_52,_53,_54,_55,_56,_57,_58,_59,_5a){
var _5b={divId:_3e,playerName:_3f,source:_40,align:_43,quality:_44,fullScreen:_45,onFinish:_47,onLoad:_48,onStart:_49,hideControlBar:_4a,hideBorder:_4b,hideTitle:_59,autoplay:_4d,pageURL:_5a};
if(_42!=null&&typeof (_42)!="undefined"){
_5b.width=_42;
}else{
_5b.width=480;
}
if(_4e==null||typeof _4e=="undefined"){
_4e="window";
}
_5b.wmode=_4e;
_5b.wmode=_4e;
if(_41!=null&&typeof (_41)!="undefined"){
_5b.height=_41;
}else{
_5b.height=360;
}
if(_43!=null&&typeof (_43)!="undefined"){
_5b.align=_43;
}else{
_5b.align="center";
}
if(_44!=null&&typeof (_44)!="undefined"){
_5b.quality=_44;
}else{
_5b.quality="high";
}
if(_46==null||typeof _46=="undefined"){
_46="#4444444";
}
if(_4c!=null&&typeof (_4c)!="undefined"&&_4c!="/"){
_5b.swfLocation=_4c+$MP.defaultSWFLocation;
}else{
_5b.swfLocation=$MP.defaultSWFLocation;
}
if(_4f==null){
_4f="";
}
if(_50==null){
_50="";
}
if(_51==null){
_51="";
}
if(_52==null){
_52="";
}
if(_53==null){
_53="";
}
if(_54==null){
_54="";
}
if(_55==null){
_55="";
}
if(_56==null){
_56="";
}
if(_57==null){
_57="";
}
if(_58==null){
_58="";
}
_5b.bgcolor=_46;
_5b.controlscolor=_4f;
_5b.controlbarbgcolor=_50;
_5b.titletextcolor=_51;
_5b.titlebgcolor=_52;
_5b.progresscolor=_53;
_5b.progressbgcolor=_54;
_5b.bordertop=_55;
_5b.borderleft=_57;
_5b.borderright=_58;
_5b.borderbottom=_56;
ColdFusion.objectCache[_3f]=_5b;
var _5c=$MP.constructMarkup(_5b);
var _5d=document.getElementById(_3e);
_5d.innerHTML=_5c;
ColdFusion.Log.info("mediaplayer.initialized","widget",[_3f]);
};
var defaultURL="";
$MP.constructMarkup=function(_5e){
var str="";
if(isIE&&isWin&&!isOpera){
str+="<object width=\""+_5e.width+"\" height=\""+_5e.height+"\"";
str+=" id=\""+_5e.playerName+"\" name=\""+_5e.playerName+"\" type=\"application/x-shockwave-flash\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" ";
str+=" data=\""+_5e.swfLocation+"\">";
str+="<param name=\"movie\" value=\""+_5e.swfLocation+"\" />";
str+="<param name=\"quality\" value=\""+_5e.quality+"\" />";
str+="<param name=\"backgroundColor\" value=\""+_5e.bgcolor+"\" />";
str+="<param name=\"allowFullScreen\" value=\""+_5e.fullScreen+"\" />";
str+="<param name=\"wmode\" value=\""+_5e.wmode+"\" />";
str+="<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
str+="<param name=\"flashvars\" value=\"uniqueid="+_5e.playerName+"&autoPlay="+_5e.autoplay+"&bgcolor="+_5e.bgcolor+"&src="+_5e.source+"&hideBorder="+_5e.hideBorder+"&hideControlBar="+_5e.hideControlBar+"&allowFullScreen="+_5e.fullScreen;
str+="&controlscolor="+_5e.controlscolor+"&controlbarbgcolor="+_5e.controlbarbgcolor+"&titletextcolor="+_5e.titletextcolor+"&titlebgcolor="+_5e.titlebgcolor+"&progresscolor="+_5e.progresscolor+"&progressbgcolor="+_5e.progressbgcolor;
str+="&bordertop="+_5e.bordertop+"&borderbottom="+_5e.borderbottom+"&borderleft="+_5e.borderleft+"&borderright="+_5e.borderright+"&hideTitle="+_5e.hideTitle+"\" />";
str+="</object>";
}else{
str="<embed src=\""+_5e.swfLocation+"\" allowScriptAccess=\"samedomain\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" wmode=\""+_5e.wmode+"\" "+"allowFullScreen=\""+_5e.fullScreen+"\"";
str+=" name=\""+_5e.playerName+"\" width=\""+_5e.width+"\" height=\""+_5e.height+"\" quality=\" "+_5e.quality+"\"";
str+=" flashvars=\"uniqueid="+_5e.playerName+"&autoPlay="+_5e.autoplay+"&bgcolor="+_5e.bgcolor+"&src="+_5e.source+"&hideBorder="+_5e.hideBorder+"&hideControlBar="+_5e.hideControlBar+"&allowFullScreen="+_5e.fullScreen;
str+="&controlscolor="+_5e.controlscolor+"&controlbarbgcolor="+_5e.controlbarbgcolor+"&titletextcolor="+_5e.titletextcolor+"&titlebgcolor="+_5e.titlebgcolor+"&progresscolor="+_5e.progresscolor+"&progressbgcolor="+_5e.progressbgcolor;
str+="&bordertop="+_5e.bordertop+"&borderbottom="+_5e.borderbottom+"&borderleft="+_5e.borderleft+"&borderright="+_5e.borderright+"&hideTitle="+_5e.hideTitle+"\" />";
}
return str;
};
$MP.setSource=function(_60,src){
var _62=$MP.getVideoComponent(_60);
if(_62==null||typeof (_62)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.setsource.notfound","widget",[_60],null,null,true);
}
if(!src||src.length==0){
ColdFusion.handleError(null,"mediaplayer.setsource.invalidsource","widget",[_60],null,null,true);
}
var _63=ColdFusion.objectCache[_60];
if(src.charAt(0)!="/"&&src.indexOf("://")<0){
var _64=_63.pageURL;
var _65="";
if(_64||_64.indexOf("/")>-1){
_65=_64.substring(0,_64.lastIndexOf("/")+1);
}
var _66=_65+src;
var _67=_66.split("/");
var _68=new Array();
var _69=0;
for(var i=0;i<_67.length;i++){
if(_67[i]==".."){
_68[--_69]="";
}else{
_68[_69++]=_67[i];
}
}
src=_68[0];
for(var i=1;i<_69;i++){
src=src+"/"+_68[i];
}
}
_62.setSrc(src);
ColdFusion.Log.info("mediaplayer.setsource.sourceset","widget",[_60,src]);
};
$MP.resize=function(_6b,_6c,_6d){
var _6e=$MP.getVideoComponent(_6b);
var _6f=ColdFusion.objectCache[_6b];
if(_6e==null||typeof (_6e)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.resize.notfound","widget",[_6b],null,null,true);
}
if(_6f==null||typeof (_6f)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.resize.notfound","widget",[_6b],null,null,true);
}
var _70=_6f.divId;
if(_70==null||typeof (_70)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.resize.divnotfound","widget",[_6b,_70],null,null,true);
}
var _71=document.getElementById(_70);
var _72;
if(navigator.appName.indexOf("Microsoft")!=-1){
_72=_71.getElementsByTagName("object")[0];
}else{
_72=_71.getElementsByTagName("embed")[0];
}
_72.height=_6c;
_72.width=_6d;
};
$MP.stopPlay=function(_73){
var _74=$MP.getVideoComponent(_73);
if(_74==null||typeof (_74)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.stopplay.notfound","widget",[_73],null,null,true);
}
_74.stopVideo(true);
};
$MP.setMute=function(_75,_76){
var _77=$MP.getVideoComponent(_75);
if(_77==null||typeof (_77)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.setmute.notfound","widget",[_75],null,null,true);
}
_77.setVideoMute(_76);
};
$MP.setVolume=function(_78,_79){
var _7a=$MP.getVideoComponent(_78);
if(_7a==null||typeof (_7a)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.setvolume.playerNotFound","widget",[_78],null,null,true);
}
_7a.setVideoVolume(_79);
};
$MP.startPlay=function(_7b){
var _7c=$MP.getVideoComponent(_7b);
if(_7c==null||typeof (_7c)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.startplay.playerNotFound","widget",[_7b],null,null,true);
}
_7c.startVideo();
};
coldfusion_mediaplayer_initPlayer=function(_7d){
var _7e=$MP.getVideoComponent(_7d);
var _7f=ColdFusion.objectCache[_7d];
var _80=_7f.onLoad;
if(_80!=null&&typeof _80=="function"){
_80.call(this);
}
ColdFusion.Log.info("mediaplayer.onload.called","widget",[_7d]);
};
$MP.getVideoComponent=function(_81){
if(navigator.appName.indexOf("Microsoft")!=-1){
return window[_81];
}else{
return document[_81];
}
};
coldfusion_FileUploadSwf_videoReadyHandler=function(_82){
var _83=$MP.getVideoComponent(_82);
var _84=ColdFusion.objectCache[_82];
var _85=_84.onStart;
if(_85!=null&&typeof _85=="function"){
_85.call(this);
}
ColdFusion.Log.info("mediaplayer.onstart.called","widget",[_82]);
};
coldfusion_mediaplayer_videoCompleteHandler=function(_86){
var _87=$MP.getVideoComponent(_86);
var _88=ColdFusion.objectCache[_86];
var _89=_88.onFinish;
if(_89!=null&&typeof _89=="function"){
_89.call(this);
}
ColdFusion.Log.info("mediaplayer.onfinish.called","widget",[_86]);
};
