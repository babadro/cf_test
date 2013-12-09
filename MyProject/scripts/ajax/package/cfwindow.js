/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Window){
ColdFusion.Window={};
}
ColdFusion.Window.windowIdCounter=1;
ColdFusion.Window.TITLE_BGCOLOR_TEMPLATE="WINDOW_DIV_ID .x-window-tc , WINDOW_DIV_ID .x-window-tl, WINDOW_DIV_ID .x-window-tr, WINDOW_DIV_ID .x-window-bc, WINDOW_DIV_ID .x-window-br, WINDOW_DIV_ID"+" .x-window-bl, WINDOW_DIV_ID  .x-window-ml, WINDOW_DIV_ID .x-window-mr { background-image: none; background-color: COLOR_ID; }";
ColdFusion.Window.create=function(_61b,_61c,url,_61e){
if(_61b==null){
ColdFusion.handleError(null,"window.create.nullname","widget",null,null,null,true);
return;
}
if(_61b==""){
ColdFusion.handleError(null,"window.create.emptyname","widget",null,null,null,true);
return;
}
var _61f=ColdFusion.objectCache[_61b];
var _620=false;
if(typeof (_61f)!="undefined"&&_61f!=null){
if(_61f.callfromtag){
ColdFusion.handleError(null,"window.create.duplicatename","widget",[_61b]);
}
if(typeof (_61f.isConfObj)!="undefined"&&_61f.isConfObj==true){
_620=true;
if(_61e!=null&&typeof (_61e.initshow)!="undefined"){
if(_61e.initshow==false){
return;
}
}
}else{
if(!_61e||(_61e&&_61e.initshow!==false)){
ColdFusion.Window.show(_61b);
}
return;
}
}
if(!_61f){
ColdFusion.Log.info("window.create.creating","widget",[_61b]);
}
var _621=ColdFusion.Window.createHTML(_61b,_61c,url,_61e,_620);
var _622=ColdFusion.objectCache[_61b];
if(_622!=null&&typeof (_622.isConfObj)!="undefined"&&_622.isConfObj==true){
return;
}
return ColdFusion.Window.createJSObj(_61b,url,_621);
};
ColdFusion.Window.createHTML=function(_623,_624,url,_626,_627){
var _628=null;
var _629=null;
if(_626&&_626.divid){
_628=document.getElementById(_626.divid);
}
if(_628==null){
_628=document.createElement("div");
_629="cf_window"+ColdFusion.Window.windowIdCounter;
ColdFusion.Window.windowIdCounter++;
_628.id=_629;
_628.className="x-hidden";
}
document.body.appendChild(_628);
var _62a=false;
var _62b=null;
if(_626!=null&&typeof (_626.headerstyle)!="undefined"&&_626.headerstyle!=null){
var _62c=new String(_626.headerstyle);
_62c=_62c.toLowerCase();
var _62d=_62c.indexOf("background-color");
if(_62d>=0){
_62a=true;
var _62e=_62c.indexOf(";",_62d+17);
if(_62e<0){
_62e=_62c.length;
}
_62b=_62c.substring(_62d+17,_62e);
}
}
var _62f=document.getElementById(_623+"_title");
if(_62a==true&&_62b){
var _630="#"+_626.divid;
var _631="NAME_ID .x-window-tc , NAME_ID .x-window-tl, NAME_ID .x-window-tr, NAME_ID .x-window-bc, NAME_ID .x-window-br, NAME_ID .x-window-bl,NAME_ID .x-window-ml, NAME_ID .x-window-mr { background-image: none; background-color: COLOR_ID; }";
var _632=ColdFusion.Util.replaceAll(ColdFusion.Window.TITLE_BGCOLOR_TEMPLATE,"WINDOW_DIV_ID",_630);
var _632=ColdFusion.Util.replaceAll(_632,"COLOR_ID",_62b);
Ext.util.CSS.createStyleSheet(_632);
}
if(_62f==null){
_62f=document.createElement("div");
_62f.id=_623+"_title";
var _633="x-window-header";
_62f.className=_633;
if(_624){
_62f.innerHTML=_624;
}else{
_62f.innerHTML="&nbsp;";
}
_628.appendChild(_62f);
}
var _634=document.getElementById(_623+"_body");
if(_634==null){
_634=document.createElement("div");
_634.id=_623+"_body";
_634.className="x-window-body";
_628.appendChild(_634);
}
var _635;
_635=ColdFusion.Window.getUpdatedConfigObj(_626,_623);
if(typeof (_635)=="undefined"){
_628.innerHTML="";
return;
}
if(_629){
_635.divid=_629;
}
_635.title=_624;
if(typeof (_635.initshow)!="undefined"&&_635.initshow===false){
_635.url=url;
ColdFusion.objectCache[_623]=_635;
ColdFusion.objectCache[_623+"_body"]=_635;
}
return _635;
};
ColdFusion.Window.createJSObj=function(_636,url,_638){
var _639;
var _63a=false;
if(typeof (_638.childlayoutid)&&_638.childlayoutid!=null){
_63a=true;
_638.layout="border";
_638.items=ColdFusion.objectCache[_638.childlayoutid];
}else{
_638.layout="fit";
}
if(typeof (_638.autoScroll)=="undefined"){
_638.autoScroll=true;
}
_638.el=_638.divid;
if(_638.onShow){
_638._cf_onShow=_638.onShow;
_638.onShow=null;
}
if(_638.onHide){
_638._cf_onHide=_638.onHide;
_638.onHide=null;
}
_639=new Ext.Window(_638);
_639.cfwindowname=_636;
_639.tempx=_638.tempx;
_639.tempy=_638.tempy;
_639.divid=_638.divid;
if(typeof (_638.headerstyle)!="undefined"&&_638.headerstyle!=null){
var _63b=document.getElementById(_636+"_title");
if(_63b!=null){
_63b.style.cssText="background:none;"+_638.headerstyle;
}
}
if(typeof (_638.bodystyle)!="undefined"&&_638.bodystyle!=null){
var _63c=document.getElementById(_636+"_body");
var _63d=_63c.parentNode;
if(_63d!=null){
_63d.style.cssText=_638.bodystyle;
}
}
_639.isConfObj=false;
_639._cf_body=_636+"_body";
ColdFusion.objectCache[_636]=_639;
if(_63a){
var _63e=_639.getLayout();
var _63f=ColdFusion.objectCache[_638.childlayoutid];
}
_639.addListener("beforeclose",ColdFusion.Window.beforeCloseHandler);
var _640=null;
if(typeof (url)!="undefined"&&url!=""){
_640=url;
}
if(_640==null){
if(typeof (_638.initshow)=="undefined"||_638.initshow==true){
_639.addListener("beforeshow",ColdFusion.Window.beforeShowHandler);
ColdFusion.Window.showandhide(_639,_638);
}
return;
}
ColdFusion.objectCache[_636+"_body"]=_639;
if(typeof (_638.callfromtag)=="undefined"){
var _641;
var _642;
_639._cf_visible=false;
_639._cf_dirtyview=true;
_639.addListener("show",ColdFusion.Window.showHandler);
_639.addListener("hide",ColdFusion.Window.hideHandler);
_639.url=_640;
if(_638){
if(typeof (_638.initshow)=="undefined"||_638.initshow==true){
ColdFusion.Window.showandhide(_639,_638);
}
_641=_638.callbackHandler;
_642=_638.errorHandler;
}
}else{
_639.callfromtag=true;
_639._cf_visible=false;
_639._cf_dirtyview=true;
_639.addListener("show",ColdFusion.Window.showHandler);
_639.addListener("beforeshow",ColdFusion.Window.beforeShowHandler);
_639.addListener("hide",ColdFusion.Window.hideHandler);
if(typeof (_638.initshow)=="undefined"||_638.initshow==true){
ColdFusion.Window.showandhide(_639,_638);
}
}
};
ColdFusion.Window.showandhide=function(_643,_644){
if(typeof (_644.tempinitshow)!="undefined"&&_644.tempinitshow==false){
var _645=Ext.Element.get(_643.el);
if(typeof _645!="undefined"){
_645.show();
}
_645.hide();
}else{
_643.show();
}
};
ColdFusion.Window.destroy=function(_646,_647){
if(_646){
var _648=ColdFusion.Window.getWindowObject(_646);
if(_648){
if(_647===true){
_648.destroy(true);
}else{
_648.destroy();
}
ColdFusion.objectCache[_646]=null;
}
}
};
ColdFusion.Window.resizeHandler=function(_649,_64a,_64b){
if(typeof (_649.fixedcenter)!="undefined"&&_649.fixedcenter==true){
_649.center();
}
};
ColdFusion.Window.beforeShowHandler=function(_64c){
if(typeof (_64c.fixedcenter)!="undefined"&&_64c.fixedcenter==true){
_64c.center();
}
};
ColdFusion.Window.beforeCloseHandler=function(_64d){
if(_64d.destroyonclose!="undefined"&&_64d.destroyonclose==true){
ColdFusion.objectCache[_64d.cfwindowname]=null;
return true;
}else{
_64d.hide();
return false;
}
};
ColdFusion.Window.showHandler=function(_64e){
_64e._cf_visible=true;
if(_64e._cf_dirtyview){
if(typeof (_64e.callfromtag)=="undefined"){
ColdFusion.Ajax.replaceHTML(_64e._cf_body,_64e.url,"GET",null,_64e.callbackHandler,_64e.errorHandler);
}else{
var _64f=ColdFusion.bindHandlerCache[_64e._cf_body];
if(_64f){
_64f();
}
}
_64e._cf_dirtyview=false;
}
};
ColdFusion.Window.hideHandler=function(_650){
_650._cf_visible=false;
if(_650._cf_refreshOnShow){
_650._cf_dirtyview=true;
}
};
ColdFusion.Window.xPosition=50;
ColdFusion.Window.yPosition=50;
ColdFusion.Window.resetHTML=function(_651){
var _652=document.getElementById(_651);
if(_652){
_652.innerHTML="";
}
};
ColdFusion.Window.getUpdatedConfigObj=function(_653,_654){
var _655={};
if(_653!=null){
if(typeof (_653)!="object"){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidconfig","widget",[_654],null,null,true);
return;
}
for(var key in _653){
if(key=="center"&&ColdFusion.Util.isBoolean(_653["center"])){
_655["fixedcenter"]=_653["center"];
}else{
_655[key]=_653[key];
}
}
}
if(typeof (_655.initshow)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.initshow)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidinitshow","widget",[_654],null,null,true);
return;
}else{
_655.initshow=ColdFusion.Util.castBoolean(_655.initshow);
_655._cf_visible=_655.initshow;
}
}
_655.tempcenter=null;
if(typeof (_655.fixedcenter)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.fixedcenter)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidcenter","widget",[_654],null,null,true);
return;
}else{
_655.fixedcenter=ColdFusion.Util.castBoolean(_655.fixedcenter);
}
}
if(typeof (_655.resizable)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.resizable)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidresizable","widget",[_654],null,null,true);
return;
}else{
_655.resizable=ColdFusion.Util.castBoolean(_655.resizable);
}
}
if(typeof (_655.draggable)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.draggable)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invaliddraggable","widget",[_654],null,null,true);
return;
}else{
_655.draggable=ColdFusion.Util.castBoolean(_655.draggable);
}
}
if(typeof (_655.closable)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.closable)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidclosable","widget",[_654],null,null,true);
return;
}else{
_655.closable=ColdFusion.Util.castBoolean(_655.closable);
}
}
if(typeof (_655.modal)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.modal)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidmodal","widget",[_654],null,null,true);
return;
}else{
_655.modal=ColdFusion.Util.castBoolean(_655.modal);
}
}
if(typeof (_655.refreshonshow)!="undefined"){
if(ColdFusion.Util.isBoolean(_655.refreshonshow)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidrefreshonshow","widget",[_654],null,null,true);
return;
}else{
_655._cf_refreshOnShow=ColdFusion.Util.castBoolean(_655.refreshonshow);
}
}
_655.shadow=true;
if(!_655.height){
_655.height=300;
}else{
if(ColdFusion.Util.isInteger(_655.height)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidheight","widget",[_654],null,null,true);
return;
}
}
if(!_655.width){
_655.width=500;
}else{
if(ColdFusion.Util.isInteger(_655.width)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidwidth","widget",[_654],null,null,true);
return;
}
}
var _657=false;
if(_655.minwidth){
if(ColdFusion.Util.isInteger(_655.minwidth)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidminwidth","widget",[_654],null,null,true);
return;
}
var _658=_655.minwidth;
var _659=_655.width;
if(typeof (_658)!="number"){
_658=parseInt(_658);
}
if(typeof (_659)!="number"){
_659=parseInt(_659);
}
if(_658>_659){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidminwidth","widget",[_654],null,null,true);
return;
}
_655.minWidth=_655.minwidth;
_657=true;
}
if(_655.minheight){
if(ColdFusion.Util.isInteger(_655.minheight)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidminheight","widget",[_654],null,null,true);
return;
}
var _65a=_655.minheight;
var _65b=_655.height;
if(typeof (_65a)!="number"){
_65a=parseInt(_65a);
}
if(typeof (_65b)!="number"){
_65b=parseInt(_65b);
}
if(_65a>_65b){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidheightvalue","widget",[_654],null,null,true);
return;
}
_655.minHeight=_655.minheight;
_657=true;
}
if(_655.x){
if(ColdFusion.Util.isInteger(_655.x)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidx","widget",[_654],null,null,true);
return;
}
}
if(_655.y){
if(ColdFusion.Util.isInteger(_655.y)==false){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidy","widget",[_654],null,null,true);
return;
}
}
if(typeof (_655.x)=="undefined"&&(typeof (_655.fixedcenter)=="undefined"||_655.fixedcenter==false)){
_655.x=ColdFusion.Window.xPosition;
ColdFusion.Window.xPosition+=15;
}
if(typeof (_655.y)=="undefined"&&(typeof (_655.fixedcenter)=="undefined"||_655.fixedcenter==false)){
_655.y=ColdFusion.Window.yPosition;
ColdFusion.Window.yPosition+=15;
}
if(typeof (_655.initshow)!="undefined"&&_655.initshow===false){
_655.tempinitshow=false;
if(typeof (_655.fixedcenter)!="undefined"&&_655.fixedcenter===true){
_655.tempcenter=_655.fixedcenter;
_655.fixedcenter=null;
}else{
_655.tempx=_655.x;
_655.tempy=_655.y;
}
_655.x=-10000;
_655.y=-10000;
}
_655.constraintoviewport=true;
_655.initshow=true;
if(_655.resizable!=null&&_655.resizable==false&&_657==true){
ColdFusion.Window.resetHTML(_654);
ColdFusion.handleError(null,"window.getupdatedconfigobject.minhwnotallowed","widget",[_654],null,null,true);
return;
}
_655.collapsible=false;
_655.shadow=true;
_655.isConfObj=true;
return _655;
};
ColdFusion.Window.show=function(_65c){
var _65d=ColdFusion.objectCache[_65c];
if(typeof (_65d)!="undefined"&&_65d!=null){
if(typeof (_65d.isConfObj)!="undefined"&&_65d.isConfObj==true){
_65d.initshow=true;
var _65e=ColdFusion.Window.createHTML(_65c,null,_65d.url,_65d,true);
ColdFusion.Window.createJSObj(_65c,_65d.url,_65e);
}else{
if(_65d.isVisible()==false){
_65d.show();
ColdFusion.Log.info("window.show.shown","widget",[_65c]);
}
if(_65d.tempcenter!=null){
_65d.center();
_65d.tempcenter=null;
}else{
if(_65d.getEl()&&_65d.getEl().getX()>0&&_65d.getEl().getY()>0){
_65d.tempx=null;
_65d.tempy=null;
}else{
if(_65d.tempx!=null&&_65d.tempy!=null){
_65d.setPosition(_65d.tempx,_65d.tempy);
_65d.tempx=null;
_65d.tempy=null;
}else{
var x=_65d.getEl().getX();
var y=_65d.getEl().getY();
_65d.setPosition(x+1,y+1);
_65d.setPosition(x,y);
}
}
}
}
}else{
ColdFusion.handleError(null,"window.show.notfound","widget",[_65c],null,null,true);
}
};
ColdFusion.Window.hide=function(_661){
var _662=ColdFusion.objectCache[_661];
if(_662){
if(_662.isVisible&&_662.isVisible()==true){
_662.hide();
ColdFusion.Log.info("window.hide.hidden","widget",[_661]);
}
}else{
ColdFusion.handleError(null,"window.hide.notfound","widget",[_661],null,null,true);
}
};
ColdFusion.Window.onShow=function(_663,_664){
var _665=ColdFusion.objectCache[_663];
if(typeof (_665)!="undefined"&&_665!=null){
_665._cf_onShow=_664;
if(_665.addListener){
_665.addListener("show",ColdFusion.Window.onShowWrapper);
}
}else{
ColdFusion.handleError(null,"window.onshow.notfound","widget",[_663],null,null,true);
}
};
ColdFusion.Window.onShowWrapper=function(_666){
_666._cf_onShow.call(null,_666.cfwindowname);
};
ColdFusion.Window.onHide=function(_667,_668){
var _669=ColdFusion.objectCache[_667];
if(typeof (_669)!="undefined"&&_669!=null){
_669._cf_onHide=_668;
if(_669.addListener){
_669.addListener("hide",ColdFusion.Window.onHideWrapper);
}
}else{
ColdFusion.handleError(null,"window.onhide.notfound","widget",[_667],null,null,true);
}
};
ColdFusion.Window.onHideWrapper=function(_66a){
_66a._cf_onHide.call(null,_66a.cfwindowname);
};
ColdFusion.Window.getWindowObject=function(_66b){
if(!_66b){
ColdFusion.handleError(null,"window.getwindowobject.emptyname","widget",null,null,null,true);
return;
}
var _66c=ColdFusion.objectCache[_66b];
if(_66c==null||(typeof (_66c.isConfObj)=="undefined"&&Ext.Window.prototype.isPrototypeOf(_66c)==false)){
ColdFusion.handleError(null,"window.getwindowobject.notfound","widget",[_66b],null,null,true);
return;
}
if(typeof (_66c.isConfObj)!="undefined"&&_66c.isConfObj==true){
_66c.initshow=true;
var _66d=ColdFusion.Window.createHTML(_66b,null,_66c.url,_66c,true);
ColdFusion.Window.createJSObj(_66b,_66c.url,_66d);
ColdFusion.Window.hide(_66b);
_66c=ColdFusion.objectCache[_66b];
}
return _66c;
};
