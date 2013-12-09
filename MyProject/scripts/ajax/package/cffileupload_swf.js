/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.FileUpload){
ColdFusion.FileUpload={};
}
var $FS=ColdFusion.FileUpload;
$FS.defaultSWFLocation="/CFIDE/scripts/ajax/resources/cf/assets/MultiFileUpload.swf";
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
var defaultAddButtonLabel="Add Files";
var defaultUploadButtonLabel="Upload";
var defaultClearButtonLabel="Clear All";
var defaultDeleteButtonLabel="Delete";
var defaultAddIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/addfile.png";
var defaultUploadIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/upload.png";
var defaultClearIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/clear.gif";
var defaultDeleteIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/delete.png";
var defaultUploadSize=10*1024*1024;
var fileUploadPrefix="cf_fileUpload_";
ColdFusion.FileUpload.create=function(_39e,_39f,_3a0,_3a1,_3a2,_3a3,_3a4,_3a5,_3a6,_3a7,_3a8,_3a9,_3aa,_3ab,_3ac,_3ad,_3ae,_3af,_3b0,_3b1,_3b2,_3b3,_3b4,_3b5,_3b6,_3b7,_3b8,_3b9,_3ba,_3bb){
var _3bc={};
_3bc.uploadDivId=_39e;
_3bc.fileUploadName=fileUploadPrefix+_39e;
_3bc.url_withoutQuery=_39f;
_3bc.url_queryString=_3a0;
_3bc.url_CF_cookie=_3a1;
_3bc.url=$FS.constructUrl(_39f,_3a0,_3a1);
_3bc.onCompleteHandler=_3a9;
_3bc.onUploadCompleteHandler=_3aa;
_3bc.onErrorHandler=_3ab;
_3bc.progressbar=_3b6;
if(_3ae==null){
_3ae="";
}
_3bc.bgcolor=_3ae;
if(_3af==null){
_3af="";
}
_3bc.selectcolor=_3af;
if(_3b0==null){
_3b0="";
}
_3bc.rollovercolor=_3b0;
if(_3b1==null){
_3b1="";
}
_3bc.textcolor=_3b1;
if(_3b4==null){
_3b4="left";
}
_3bc.titletextalign=_3b4;
if(_3b2==null){
_3b2="";
}
_3bc.titletextcolor=_3b2;
if(_3b3==null){
_3b3="";
}
_3bc.headercolor=_3b3;
_3bc.bgcolor=_3ae;
_3bc.bgcolor=_3ae;
if(_3b5==null){
_3b5="";
}
_3bc.fileFilter=_3b5;
_3bc.disableUploadButton=_3b8;
if(_3ba==null||typeof _3ba=="undefined"){
_3ba="window";
}
_3bc.wmode=_3ba;
_3bc.stopOnError=_3b9;
if(_3a2==null||typeof _3a2==="undefined"){
_3a2=defaultAddButtonLabel;
}
if(_3b7!=null&&typeof (_3b7)!="undefined"&&_3b7!="/"){
_3bc.addIcon=_3b7+defaultAddIcon;
}else{
_3bc.addIcon=defaultAddIcon;
}
_3bc.addButtonLabel=_3a2;
if(_3a4==null||typeof _3a4==="undefined"){
_3a4=defaultUploadButtonLabel;
}
var _3bd;
if(_3b7!=null&&typeof (_3b7)!="undefined"&&_3b7!="/"){
_3bd=_3b7+defaultUploadIcon;
}else{
_3bd=defaultUploadIcon;
}
_3bc.uploadButtonLabel=_3a4;
_3bc.uploadIcon=_3bd;
if(_3a6==null||typeof _3a6==="undefined"){
_3a6="File Upload ";
}
_3bc.title=_3a6;
if(_3b7!=null&&typeof (_3b7)!="undefined"&&_3b7!="/"){
_3bc.swfLocation=_3b7+$FS.defaultSWFLocation;
}else{
_3bc.swfLocation=$FS.defaultSWFLocation;
}
if(_3a3==null||typeof _3a3==="undefined"){
_3a3=defaultClearButtonLabel;
}
var _3be;
if(_3b7!=null&&typeof (_3b7)!="undefined"&&_3b7!="/"){
_3be=_3b7+_3be;
}else{
_3be=_3be;
}
_3bc.clearButtonLabel=_3a3;
_3bc.clearIcon=_3be;
if(_3a5==null||typeof _3a5==="undefined"){
_3a5=defaultDeleteButtonLabel;
}
_3bc.deleteButtonLabel=_3a5;
var _3bf;
if(_3b7!=null&&typeof (_3b7)!="undefined"&&_3b7!="/"){
_3bf=_3b7+defaultDeleteIcon;
}else{
_3bf=defaultDeleteIcon;
}
_3bc.deleteIcon=_3bf;
if(_3a7==null||!typeof _3a7==="Number"){
_3a7=-1;
}
_3bc.maxFileSelect=_3a7;
if(_3a8==null||!typeof _3a8==="number"){
_3a8=defaultUploadSize;
}
_3bc.maxUploadSize=_3a8;
if(_3ac==null||typeof _3ac==="undefined"){
_3ac=420;
}
_3bc.widthInPx=_3ac+"px";
_3bc.width=_3ac;
if(_3ad==null||typeof _3ad==="undefined"){
_3ad=300;
}
_3bc.heightInPx=_3ad+"px";
_3bc.height=_3ad;
_3bc.align=_3bb;
ColdFusion.objectCache[_39e]=_3bc;
ColdFusion.objectCache[_3bc.fileUploadName]=_3bc;
var _3c0=$FS.constructMarkup(_3bc);
var _3c1=document.getElementById(_39e);
_3c1.innerHTML=_3c0;
ColdFusion.Log.info("fileupload.initialized","widget",[_39e]);
};
$FS.constructMarkup=function(_3c2){
var str="";
if(isIE&&isWin&&!isOpera){
str+="<object width=\""+_3c2.width+"\" height=\""+_3c2.height+"\"";
str+=" id=\""+_3c2.fileUploadName+"\" name=\""+_3c2.playerName+"\" type=\"application/x-shockwave-flash\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" ";
str+=" data=\""+_3c2.swfLocation+"\">";
str+="<param name=\"movie\" value=\""+_3c2.swfLocation+"\" />";
str+="<param name=\"quality\" value=\""+_3c2.quality+"\" />";
str+="<param name=\"allowFullScreen\" value=\""+_3c2.fullScreen+"\" />";
str+="<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
str+="<param name=\"wmode\" value=\""+_3c2.wmode+"\" />";
str+="<param name=\"flashvars\" value=\"uniqueid="+_3c2.fileUploadName+"&url="+_3c2.url+"&addLabel="+_3c2.addButtonLabel+"&deleteLabel="+_3c2.deleteButtonLabel;
str+="&clearLabel="+_3c2.clearButtonLabel+"&uploadLabel="+_3c2.uploadButtonLabel+"&maxUploadSize="+_3c2.maxUploadSize+"&maxFileSelect="+_3c2.maxFileSelect+"&progress="+_3c2.progressbar;
str+="&stopOnError="+_3c2.stopOnError+"&hideUpload="+_3c2.disableUploadButton+"&bgcolor="+_3c2.bgcolor+"&fileFilter="+_3c2.fileFilter+"&deleteIcon="+_3c2.deleteIcon+"&title="+_3c2.title;
str+="&uploadIcon="+_3c2.uploadIcon+"&textcolor="+_3c2.textcolor+"&titletextcolor="+_3c2.titletextcolor+"&headercolor="+_3c2.headercolor+"&titletextalign="+_3c2.titletextalign+"&rollovercolor="+_3c2.rollovercolor+"&selectcolor="+_3c2.selectcolor+"\" />";
str+="</object>";
}else{
str="<embed src=\""+_3c2.swfLocation+"\" allowScriptAccess=\"samedomain\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" wmode=\""+_3c2.wmode+"\"";
str+=" name=\""+_3c2.fileUploadName+"\" width=\""+_3c2.width+"\" height=\""+_3c2.height+"\" quality=\" "+_3c2.quality+"\"";
str+=" flashvars=\"uniqueid="+_3c2.fileUploadName+"&url="+_3c2.url+"&addLabel="+_3c2.addButtonLabel+"&deleteLabel="+_3c2.deleteButtonLabel;
str+="&clearLabel="+_3c2.clearButtonLabel+"&uploadLabel="+_3c2.uploadButtonLabel+"&maxUploadSize="+_3c2.maxUploadSize+"&maxFileSelect="+_3c2.maxFileSelect+"&progress="+_3c2.progressbar;
str+="&stopOnError="+_3c2.stopOnError+"&hideUpload="+_3c2.disableUploadButton+"&bgcolor="+_3c2.bgcolor+"&fileFilter="+_3c2.fileFilter+"&deleteIcon="+_3c2.deleteIcon+"&title="+_3c2.title;
str+="&uploadIcon="+_3c2.uploadIcon+"&textcolor="+_3c2.textcolor+"&titletextcolor="+_3c2.titletextcolor+"&headercolor="+_3c2.headercolor+"&titletextalign="+_3c2.titletextalign+"&rollovercolor="+_3c2.rollovercolor+"&selectcolor="+_3c2.selectcolor+"\" />";
}
return str;
};
$FS.constructUrl=function(_3c4,_3c5,_3c6){
var url=_3c4;
if(_3c5!=null){
url+="?"+_3c5;
if(_3c6!=null){
url+="%26"+_3c6;
}
}else{
if(_3c6!=null){
url+="?"+_3c6;
}
}
return url;
};
coldfusion_FileUploadSwf_complete=function(name,_3c9){
var _3ca=$FS.getFileUploadComponent(name);
var _3cb=ColdFusion.objectCache[name];
var _3cc=_3cb.onCompleteHandler;
if(_3cc!=null&&typeof _3cc=="function"){
_3cc.call(this,_3c9);
}
$FS.addResultToArray(_3c9,_3cb);
};
coldfusion_FileUploadSwf_onError=function(name,_3ce){
var _3cf=$FS.getFileUploadComponent(name);
var _3d0=ColdFusion.objectCache[name];
var _3d1=_3d0.onErrorHandler;
if(_3d1!=null&&typeof _3d1=="function"){
_3d1.call(this,_3ce);
}
$FS.addResultToArray(_3ce,_3d0);
};
coldfusion_FileUploadSwf_UploadCompete=function(name){
var _3d3=$FS.getFileUploadComponent(name);
var _3d4=ColdFusion.objectCache[name];
var _3d5=_3d4.onUploadCompleteHandler;
var _3d6=_3d4.resultArray;
if(_3d5!=null&&typeof _3d5=="function"){
_3d5.call(this,_3d6);
}
_3d4.resultArray=new Array();
};
$FS.addResultToArray=function(_3d7,_3d8){
var _3d9=_3d8.resultArray;
if(_3d9==null||typeof _3d9=="undefined"){
_3d9=_3d8.resultArray=new Array();
}
_3d9.push(_3d7);
};
$FS.cancelUpload=function(name){
var _3db=fileUploadPrefix+name;
var _3dc=$FS.getFileUploadComponent(_3db);
if(_3dc!=null){
_3dc.cancelFileUpload();
}else{
ColdFusion.handleError(null,"fileupload.cancelupload.notfound","widget",[name],null,null,true);
}
ColdFusion.Log.info("fileupload.cancelupload.cancelled","widget",[name]);
};
$FS.getSelectedFiles=function(name){
var _3de=fileUploadPrefix+name;
var _3df=$FS.getFileUploadComponent(_3de);
if(_3df!=null){
return _3df.getSelectedFileArray();
}else{
ColdFusion.handleError(null,"fileupload.getSelectedFiles.notfound","widget",[name],null,null,true);
}
ColdFusion.Log.info("fileupload.getSelectedFiles.selected","widget",[name]);
};
$FS.clearAllFiles=function(name){
var _3e1=fileUploadPrefix+name;
var _3e2=$FS.getFileUploadComponent(_3e1);
if(_3e2!=null){
_3e2.clearAllUpload();
}else{
ColdFusion.handleError(null,"fileupload.clearallfiles.notfound","widget",[name],null,null,true);
}
ColdFusion.Log.info("fileupload.clearallfiles.cleared","widget",[name]);
};
$FS.setURL=function(name,src){
var _3e5=$FS.getFileUploadComponent(fileUploadPrefix+name);
var _3e6=ColdFusion.objectCache[name];
if(_3e6==null||typeof (_3e6)=="undefined"){
ColdFusion.handleError(null,"fileupload.setURL.notfound","widget",[name],null,null,true);
}
if(!src||src.length==0){
ColdFusion.handleError(null,"fileupload.setURL.invalidurl","widget",[name],null,null,true);
}
var _3e7=null;
if(src.indexOf("?")>0){
_3e7=src.substring(src.indexOf("?")+1);
_3e7=escape(_3e7);
src=src.substring(0,src.indexOf("?"));
}
if(src.charAt(0)!="/"&&src.indexOf("://")<0){
var _3e8=_3e6.url_withoutQuery;
_3e8=unescape(_3e8);
var _3e9="";
if(_3e8||_3e8.indexOf("/")>-1){
_3e9=_3e8.substring(0,_3e8.lastIndexOf("/")+1);
}
var _3ea=_3e9+src;
var _3eb=_3ea.split("/");
var _3ec=new Array();
var _3ed=0;
for(var i=0;i<_3eb.length;i++){
if(_3eb[i]==".."){
_3ec[--_3ed]="";
}else{
_3ec[_3ed++]=_3eb[i];
}
}
src=_3ec[0];
for(var i=1;i<_3ed;i++){
src=src+"/"+_3ec[i];
}
}
var _3ef=$FS.constructUrl(src,_3e7,_3e6.url_CF_cookie);
_3e6.url=_3ef;
_3e5.setSrc(_3ef);
ColdFusion.Log.info("fileupload.setURL.urlset","widget",[name,_3ef]);
};
$FS.startUpload=function(name){
var _3f1=fileUploadPrefix+name;
var _3f2=$FS.getFileUploadComponent(_3f1);
if(_3f2!=null){
_3f2.submitUploadForm();
}else{
ColdFusion.handleError(null,"fileupload.startupload.notfound","widget",[name],null,null,true);
}
ColdFusion.Log.info("fileupload.startupload.started","widget",[name]);
};
$FS.getFileUploadComponent=function(name){
if(navigator.appName.indexOf("Microsoft")!=-1){
if(window[name]!=null){
return window[name];
}else{
return document[name];
}
}else{
return document[name];
}
};
