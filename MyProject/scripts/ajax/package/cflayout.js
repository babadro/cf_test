/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Layout){
ColdFusion.Layout={};
}
var ACCORDION_TITLE_ICON_CSS_TEMPLATE=".{0} { background-image:url({1}); }";
ColdFusion.Layout.initializeTabLayout=function(id,_271,_272,_273,_274){
Ext.QuickTips.init();
var _275;
if(_272){
_275={renderTo:id,height:_272};
}else{
_275={renderTo:id,autoHeight:true};
}
if(_273&&_273!="undefined"){
_275.width=_273;
}else{
_275.autoWidth=true;
}
if(_271){
_275.tabPosition="bottom";
}else{
_275.enableTabScroll=true;
}
_275.plain=!_274;
var _276=new Ext.TabPanel(_275);
ColdFusion.objectCache[id]=_276;
return _276;
};
ColdFusion.Layout.getTabLayout=function(_277){
var _278=ColdFusion.objectCache[_277];
if(!_278||!(_278 instanceof Ext.TabPanel)){
ColdFusion.handleError(null,"layout.gettablayout.notfound","widget",[_277],null,null,true);
}
return _278;
};
ColdFusion.Layout.onTabActivate=function(tab){
tab._cf_visible=true;
if(tab._cf_dirtyview){
var _27a=ColdFusion.bindHandlerCache[tab.contentEl];
if(_27a){
_27a();
}
tab._cf_dirtyview=false;
}
var el=Ext.get(tab.contentEl);
el.move("left",1);
el.move("right",1);
};
ColdFusion.Layout.onTabDeactivate=function(tab){
tab._cf_visible=false;
if(tab._cf_refreshOnActivate){
tab._cf_dirtyview=true;
}
};
ColdFusion.Layout.onTabClose=function(tab){
tab._cf_visible=false;
};
ColdFusion.Layout.addTab=function(_27e,_27f,name,_281,_282,_283,_284,_285,_286){
if(_282!=null&&_282.length==0){
_282=null;
}
var _287=_27e.initialConfig.autoHeight;
if(typeof _287=="undefined"){
_287=false;
}
var _288=new Ext.Panel({title:_281,contentEl:_27f,_cf_body:_27f,id:name,closable:_283,tabTip:_282,autoScroll:_286,autoShow:true,autoHeight:_287});
var tab=_27e.add(_288);
if(_285){
_288.setDisabled(true);
}
tab._cf_visible=false;
tab._cf_dirtyview=true;
tab._cf_refreshOnActivate=_284;
tab.addListener("activate",ColdFusion.Layout.onTabActivate);
tab.addListener("deactivate",ColdFusion.Layout.onTabDeactivate);
tab.addListener("close",ColdFusion.Layout.onTabClose);
ColdFusion.objectCache[name]=tab;
var _28a=tab.height;
if(_28a&&_28a>1){
var _28b=document.getElementById(_27f);
_28b.style.height=_28a;
}
};
ColdFusion.Layout.enableTab=function(_28c,_28d){
var _28e=ColdFusion.objectCache[_28c];
var _28f=ColdFusion.objectCache[_28d];
if(_28e&&(_28e instanceof Ext.TabPanel)&&_28f){
_28f.setDisabled(false);
ColdFusion.Log.info("layout.enabletab.enabled","widget",[_28d,_28c]);
}else{
ColdFusion.handleError(null,"layout.enabletab.notfound","widget",[_28c],null,null,true);
}
};
ColdFusion.Layout.disableTab=function(_290,_291){
var _292=ColdFusion.objectCache[_290];
var _293=ColdFusion.objectCache[_291];
if(_292&&(_292 instanceof Ext.TabPanel)&&_293){
_293.setDisabled(true);
ColdFusion.Log.info("layout.disabletab.disabled","widget",[_291,_290]);
}else{
ColdFusion.handleError(null,"layout.disabletab.notfound","widget",[_290],null,null,true);
}
};
ColdFusion.Layout.selectTab=function(_294,_295){
var _296=ColdFusion.objectCache[_294];
var tab=ColdFusion.objectCache[_295];
if(_296&&(_296 instanceof Ext.TabPanel)&&tab){
_296.setActiveTab(tab);
ColdFusion.Log.info("layout.selecttab.selected","widget",[_295,_294]);
}else{
ColdFusion.handleError(null,"layout.selecttab.notfound","widget",[_294],null,null,true);
}
};
ColdFusion.Layout.hideTab=function(_298,_299){
var _29a=ColdFusion.objectCache[_298];
if(_29a&&(_29a instanceof Ext.TabPanel)){
var _29b=ColdFusion.objectCache[_299];
var _29c=false;
if(_29b){
if(_29a.getActiveTab()&&_29a.getActiveTab().getId()==_299){
var i;
for(i=0;i<_29a.items.length;i++){
var _29e=_29a.getComponent(i);
if(_29e.hidden==false){
_29c=true;
_29e.show();
break;
}
}
if(_29c==false){
document.getElementById(_299).style.display="none";
}
}
_29a.hideTabStripItem(_29b);
ColdFusion.Log.info("layout.hidetab.hide","widget",[_299,_298]);
}
}else{
ColdFusion.handleError(null,"layout.hidetab.notfound","widget",[_298],null,null,true);
}
};
ColdFusion.Layout.showTab=function(_29f,_2a0){
var _2a1=ColdFusion.objectCache[_29f];
var _2a2=ColdFusion.objectCache[_2a0];
if(_2a1&&(_2a1 instanceof Ext.TabPanel)&&_2a2){
_2a1.unhideTabStripItem(_2a2);
ColdFusion.Log.info("layout.showtab.show","widget",[_2a0,_29f]);
}else{
ColdFusion.handleError(null,"layout.showtab.notfound","widget",[_29f],null,null,true);
}
};
ColdFusion.Layout.disableSourceBind=function(_2a3){
var _2a4=ColdFusion.objectCache[_2a3];
if(_2a4==null||_2a4=="undefined"){
ColdFusion.handleError(null,"layout.disableSourceBind.notfound","widget",[_2a3],null,null,true);
}
_2a4._cf_dirtyview=false;
};
ColdFusion.Layout.enableSourceBind=function(_2a5){
var _2a6=ColdFusion.objectCache[_2a5];
if(_2a6==null||_2a6=="undefined"){
ColdFusion.handleError(null,"layout.enableSourceBind.notfound","widget",[_2a5],null,null,true);
}
_2a6._cf_dirtyview=true;
};
ColdFusion.Layout.createTab=function(_2a7,_2a8,_2a9,_2aa,_2ab){
var _2ac=ColdFusion.objectCache[_2a7];
var _2ad=_2a8;
if(_2a7&&typeof (_2a7)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidname","widget",null,null,null,true);
return;
}
if(!_2a7||ColdFusion.trim(_2a7)==""){
ColdFusion.handleError(null,"layout.createtab.emptyname","widget",null,null,null,true);
return;
}
if(_2a8&&typeof (_2a8)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidareaname","widget",null,null,null,true);
return;
}
if(!_2a8||ColdFusion.trim(_2a8)==""){
ColdFusion.handleError(null,"layout.createtab.emptyareaname","widget",null,null,null,true);
return;
}
if(_2a9&&typeof (_2a9)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidtitle","widget",null,null,null,true);
return;
}
if(!_2a9||ColdFusion.trim(_2a9)==""){
ColdFusion.handleError(null,"layout.createtab.emptytitle","widget",null,null,null,true);
return;
}
if(_2aa&&typeof (_2aa)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidurl","widget",null,null,null,true);
return;
}
if(!_2aa||ColdFusion.trim(_2aa)==""){
ColdFusion.handleError(null,"layout.createtab.emptyurl","widget",null,null,null,true);
return;
}
_2a8="cf_layoutarea"+_2a8;
if(_2ac&&(_2ac instanceof Ext.TabPanel)){
var _2ae=null;
var ele=document.getElementById(_2a8);
if(ele!=null){
ColdFusion.handleError(null,"layout.createtab.duplicateel","widget",[_2a8],null,null,true);
return;
}
var _2b0=false;
var _2b1=false;
var _2b2=false;
var _2b3=false;
var _2b4=false;
var _2b5=null;
if((_2ac.items.length<=0)){
_2b2=true;
}
if(_2ab!=null){
if(typeof (_2ab)!="object"){
ColdFusion.handleError(null,"layout.createtab.invalidconfig","widget",null,null,null,true);
return;
}
if(typeof (_2ab.closable)!="undefined"&&_2ab.closable==true){
_2b0=true;
}
if(typeof (_2ab.disabled)!="undefined"&&_2ab.disabled==true){
_2b1=true;
}
if(typeof (_2ab.selected)!="undefined"&&_2ab.selected==true){
_2b2=true;
}
if(typeof (_2ab.inithide)!="undefined"&&_2ab.inithide==true){
_2b3=true;
}
if(typeof (_2ab.tabtip)!="undefined"&&_2ab.tabtip!=null){
_2b5=_2ab.tabtip;
}
}
var _2b6=document.getElementById(_2a7);
if(_2b6){
var _2b7=document.getElementById(_2a7);
var _2b8=document.createElement("div");
_2b8.id=_2a8;
_2b8.className="ytab";
if(_2ab!=null&&typeof (_2ab.align)!="undefined"){
_2b8.align=_2ab.align;
}
var _2b9="";
if(_2ac.tabheight){
_2b9="height:"+_2ac.tabheight+";";
}
if(_2ab!=null&&typeof (_2ab.style)!="undefined"){
var _2ba=new String(_2ab.style);
_2ba=_2ba.toLowerCase();
_2b9=_2b9+_2ba;
}
if(_2ab!=null&&typeof (_2ab.overflow)!="undefined"){
var _2bb=new String(_2ab.overflow);
_2bb=_2bb.toLowerCase();
if(_2bb!="visible"&&_2bb!="auto"&&_2bb!="scroll"&&_2bb!="hidden"){
ColdFusion.handleError(null,"layout.createtab.invalidoverflow","widget",null,null,null,true);
return;
}
if(_2bb.toLocaleLowerCase()==="hidden"){
_2b4=false;
}
_2b9=_2b9+"overflow:"+_2bb+";";
}else{
_2b9=_2b9+"; overflow:auto;";
}
_2b8.style.cssText=_2b9;
_2b7.appendChild(_2b8);
}
ColdFusion.Layout.addTab(_2ac,_2a8,_2ad,_2a9,_2b5,_2b0,false,_2b1,_2b4);
ColdFusion.Log.info("layout.createtab.success","http",[_2a8,_2a7]);
if(_2b2==true){
ColdFusion.Layout.selectTab(_2a7,_2ad);
}
if(_2b3==true){
ColdFusion.Layout.hideTab(_2a7,_2ad);
}
if(_2aa!=null&&typeof (_2aa)!="undefined"&&_2aa!=""){
if(_2aa.indexOf("?")!=-1){
_2aa=_2aa+"&";
}else{
_2aa=_2aa+"?";
}
var _2bc;
var _2bd;
if(_2ab){
_2bc=_2ab.callbackHandler;
_2bd=_2ab.errorHandler;
}
ColdFusion.Ajax.replaceHTML(_2a8,_2aa,"GET",null,_2bc,_2bd);
}
}else{
ColdFusion.handleError(null,"layout.createtab.notfound","widget",[_2a7],null,null,true);
}
};
ColdFusion.Layout.getBorderLayout=function(_2be){
var _2bf=ColdFusion.objectCache[_2be];
if(!_2bf){
ColdFusion.handleError(null,"layout.getborderlayout.notfound","widget",[_2be],null,null,true);
}
return _2bf;
};
ColdFusion.Layout.showArea=function(_2c0,_2c1){
var _2c2=ColdFusion.Layout.convertPositionToDirection(_2c1);
var _2c3=ColdFusion.objectCache[_2c0];
var _2c4;
if(_2c3){
var _2c5=_2c3.items;
for(var i=0;i<_2c5.getCount();i++){
var _2c7=_2c5.itemAt(i);
if(_2c7 instanceof Ext.Panel&&_2c7.region==_2c2){
_2c4=_2c7;
break;
}
}
if(_2c4){
_2c4.show();
_2c4.expand();
ColdFusion.Log.info("layout.showarea.shown","widget",[_2c1,_2c0]);
}else{
ColdFusion.handleError(null,"layout.showarea.areanotfound","widget",[_2c1],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.showarea.notfound","widget",[_2c0],null,null,true);
}
};
ColdFusion.Layout.hideArea=function(_2c8,_2c9){
var _2ca=ColdFusion.Layout.convertPositionToDirection(_2c9);
var _2cb=ColdFusion.objectCache[_2c8];
var _2cc;
if(_2cb){
var _2cd=_2cb.items;
for(var i=0;i<_2cd.getCount();i++){
var _2cf=_2cd.itemAt(i);
if(_2cf instanceof Ext.Panel&&_2cf.region==_2ca){
_2cc=_2cf;
break;
}
}
if(_2cc){
_2cc.hide();
ColdFusion.Log.info("layout.hidearea.hidden","widget",[_2c9,_2c8]);
}else{
ColdFusion.handleError(null,"layout.hidearea.areanotfound","widget",[_2c9],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.hidearea.notfound","widget",[_2c8],null,null,true);
}
};
ColdFusion.Layout.collapseArea=function(_2d0,_2d1){
var _2d2=ColdFusion.Layout.convertPositionToDirection(_2d1);
var _2d3=ColdFusion.objectCache[_2d0];
var _2d4;
if(_2d3){
var _2d5=_2d3.items;
for(var i=0;i<_2d5.getCount();i++){
var _2d7=_2d5.itemAt(i);
if(_2d7 instanceof Ext.Panel&&_2d7.region==_2d2){
_2d4=_2d7;
break;
}
}
if(_2d4){
_2d4.collapse(true);
ColdFusion.Log.info("layout.collpasearea.collapsed","widget",[_2d1,_2d0]);
}else{
ColdFusion.handleError(null,"layout.collpasearea.areanotfound","widget",[_2d1],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.collpasearea.notfound","widget",[_2d1],null,null,true);
}
};
ColdFusion.Layout.expandArea=function(_2d8,_2d9){
var _2da=ColdFusion.Layout.convertPositionToDirection(_2d9);
var _2db=ColdFusion.objectCache[_2d8];
var _2dc;
if(_2db){
var _2dd=_2db.items;
for(var i=0;i<_2dd.getCount();i++){
var _2df=_2dd.itemAt(i);
if(_2df instanceof Ext.Panel&&_2df.region==_2da){
_2dc=_2df;
break;
}
}
if(_2dc){
_2dc.expand();
ColdFusion.Log.info("layout.expandarea.expanded","widget",[_2d9,_2d8]);
}else{
ColdFusion.handleError(null,"layout.expandarea.areanotfound","widget",[_2d9],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.expandarea.notfound","widget",[_2d9],null,null,true);
}
};
ColdFusion.Layout.printObject=function(obj){
var str="";
for(key in obj){
str=str+"  "+key+"=";
value=obj[key];
if(typeof (value)==Object){
value=$G.printObject(value);
}
str+=value;
}
return str;
};
ColdFusion.Layout.InitAccordion=function(_2e2,_2e3,_2e4,_2e5,_2e6,_2e7,_2e8,_2e9){
var _2ea=false;
if(_2e4.toUpperCase()=="LEFT"){
_2ea=true;
}
if(_2e7==null||typeof (_2e7)=="undefined"){
_2e6=false;
}
var _2eb={activeOnTop:_2e3,collapseFirst:_2ea,titleCollapse:_2e5,fill:_2e6};
var _2ec={renderTo:_2e2,layoutConfig:_2eb,items:_2e9,layout:"accordion"};
if(_2e7==null||typeof (_2e7)=="undefined"){
_2ec.autoHeight=true;
}else{
_2ec.height=_2e7;
}
if(_2e8==null||typeof (_2e8)=="undefined"){
_2ec.autoWidth=true;
}else{
_2ec.width=_2e8;
}
var _2ed=new Ext.Panel(_2ec);
ColdFusion.objectCache[_2e2]=_2ed;
ColdFusion.Log.info("layout.accordion.initialized","widget",[_2e2]);
return _2ed;
};
ColdFusion.Layout.InitAccordionChildPanel=function(_2ee,_2ef,_2f0,_2f1,_2f2,_2f3,_2f4,_2f5){
if(_2f0==null||typeof (_2f0)==undefined||_2f0.length==0){
_2f0="  ";
}
var _2f6={contentEl:_2ee,id:_2ef,title:_2f0,collapsible:_2f1,closable:_2f2,animate:true,autoScroll:_2f3,_cf_body:_2ee};
if(_2f4&&typeof _2f4=="string"){
_2f6.iconCls=_2f4;
}
var _2f7=new Ext.Panel(_2f6);
_2f7._cf_visible=false;
_2f7._cf_dirtyview=true;
_2f7._cf_refreshOnActivate=_2f5;
_2f7.on("expand",ColdFusion.Layout.onAccordionPanelExpand,this);
_2f7.on("collapse",ColdFusion.Layout.onAccordionPanelCollapse,this);
_2f7.on("hide",ColdFusion.Layout.onAccordionPanelHide,this);
_2f7.on("show",ColdFusion.Layout.onAccordionPanelExpand,this);
ColdFusion.objectCache[_2ef]=_2f7;
ColdFusion.Log.info("layout.accordion.childinitialized","widget",[_2ef]);
return _2f7;
};
ColdFusion.Layout.getAccordionLayout=function(_2f8){
var _2f9=ColdFusion.objectCache[_2f8];
if(!_2f9||!(_2f9 instanceof Ext.Panel)){
ColdFusion.handleError(null,"layout.getaccordionlayout.notfound","widget",[_2f8],null,null,true);
}
return _2f9;
};
ColdFusion.Layout.onAccordionPanelExpand=function(_2fa){
_2fa._cf_visible=true;
if(_2fa._cf_dirtyview){
var _2fb=ColdFusion.bindHandlerCache[_2fa.contentEl];
if(_2fb){
_2fb();
}
_2fa._cf_dirtyview=false;
}
var el=Ext.get(_2fa.contentEl);
el.move("left",1);
el.move("right",1);
};
ColdFusion.Layout.onAccordionPanelCollapse=function(_2fd){
_2fd._cf_visible=false;
if(_2fd._cf_refreshOnActivate){
_2fd._cf_dirtyview=true;
}
};
ColdFusion.Layout.onAccordionPanelHide=function(_2fe){
_2fe._cf_visible=false;
};
ColdFusion.Layout.hideAccordion=function(_2ff,_300){
var _301=ColdFusion.objectCache[_2ff];
var _302=ColdFusion.objectCache[_300];
if(!_301||!_301 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.hideaccordion.layoutnotfound","widget",[_2ff],null,null,true);
}
if(!_302||!_302 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.hideaccordion.panelnotfound","widget",[_300],null,null,true);
}
_302.hide();
ColdFusion.Log.info("layout.hideaccordion.hidden","widget",[_300,_2ff]);
};
ColdFusion.Layout.showAccordion=function(_303,_304){
var _305=ColdFusion.objectCache[_303];
var _306=ColdFusion.objectCache[_304];
if(!_305||!_305 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.showaccordion.layoutnotfound","widget",[_303],null,null,true);
}
if(!_306||!_306 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.showaccordion.panelnotfound","widget",[_304],null,null,true);
}
_306.show();
ColdFusion.Log.info("layout.showaccordion.shown","widget",[_304,_303]);
};
ColdFusion.Layout.expandAccordion=function(_307,_308){
var _309=ColdFusion.objectCache[_307];
var _30a=ColdFusion.objectCache[_308];
if(!_309||!_309 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.expandaccordion.layoutnotfound","widget",[_307],null,null,true);
}
if(!_30a||!_30a instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.expandaccordion.panelnotfound","widget",[_308],null,null,true);
}
_30a.expand();
ColdFusion.Log.info("layout.expandaccordion.expanded","widget",[_308,_307]);
};
ColdFusion.Layout.selectAccordion=function(_30b,_30c){
return ColdFusion.Layout.expandAccordion(_30b,_30c);
};
ColdFusion.Layout.collapseAccordion=function(_30d,_30e){
var _30f=ColdFusion.objectCache[_30d];
var _310=ColdFusion.objectCache[_30e];
if(!_30f||!_30f instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.collapseaccordion.layoutnotfound","widget",[_30d],null,null,true);
}
if(!_310||!_310 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.collapseaccordion.panelnotfound","widget",[_30e],null,null,true);
}
_310.collapse();
ColdFusion.Log.info("layout.collapseaccordion.collapsed","widget",[_30e,_30d]);
};
ColdFusion.Layout.createAccordionPanel=function(_311,_312,_313,url,_315){
var _316=ColdFusion.objectCache[_311];
var _317=_312;
if(_311&&typeof (_311)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidname","widget",[_311],null,null,true);
return;
}
if(!_311||ColdFusion.trim(_311)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.emptyname","widget",[_311],null,null,true);
return;
}
if(_312&&typeof (_312)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidaccordionpanelname","widget",[_312],null,null,true);
return;
}
if(!_312||ColdFusion.trim(_312)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.emptyaccordionpanelname","widget",[_312],null,null,true);
return;
}
if(_313&&typeof (_313)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidtitle","widget",[_312],null,null,true);
return;
}
if(!_313||ColdFusion.trim(_313)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidtitle","widget",[_312],null,null,true);
return;
}
if(url&&typeof (url)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidurl","widget",[_312],null,null,true);
return;
}
if(!url||ColdFusion.trim(url)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidurl","widget",[_312],null,null,true);
return;
}
_312="cf_layoutarea"+_317;
if(_316&&(_316 instanceof Ext.Panel)){
var _318=null;
var ele=document.getElementById(_312);
if(ele!=null){
ColdFusion.handleError(null,"layout.createaccordionpanel.duplicateel","widget",[_312],null,null,true);
return;
}
var _31a=true;
var _31b;
var _31c=false;
var _31d=null;
if(_315!=null){
if(typeof (_315)!="object"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidconfig","widget",[_312],null,null,true);
return;
}
}
if(_315&&typeof (_315.selected)!="undefined"&&_315.selected==true){
_31c=true;
}
if(_315&&_315.titleicon){
if(typeof _315.titleicon!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidtitleicon","widget",[_312],null,null,true);
return;
}
var _31e=String.format(ACCORDION_TITLE_ICON_CSS_TEMPLATE,_312,_315.titleicon);
Ext.util.CSS.createStyleSheet(_31e,_312+"_cf_icon");
_31d=_312;
}
var _31f=_316.layoutConfig;
var _320=true;
if(_31f&&typeof _31f.fill!="undefined"){
_320=_31f.fill;
}
if(_315!=null&&typeof (_315.overflow)!="undefined"){
var _31b=new String(_315.overflow);
_31b=_31b.toLowerCase();
if(_31b!="visible"&&_31b!="auto"&&_31b!="scroll"&&_31b!="hidden"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidoverflow","widget",[_312],null,null,true);
return;
}
if(!_320&&(_31b=="auto"||_31b=="scroll")){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidoverflowforfillheight","widget",[_312],null,null,true);
return;
}
if(_31b=="hidden"){
_31a=false;
}
}else{
_31b="auto";
_31a=true;
}
var _321=document.getElementById(_311);
if(_321){
var _322=document.getElementById(_311);
var _323=document.createElement("div");
_323.id=_312;
if(_315!=null&&typeof (_315.align)!="undefined"){
_323.align=_315.align;
}
var _324="";
if(_316.height){
_324="height:"+_316.height+";";
}
if(_315!=null&&typeof (_315.style)!="undefined"){
var _325=new String(_315.style);
_325=_325.toLowerCase();
_324=_324+_325;
}
_324=_324+"overflow:"+_31b+";";
_323.style.cssText=_324;
_322.appendChild(_323);
}
var _326=true;
var _327=true;
itemobj=ColdFusion.Layout.InitAccordionChildPanel(_312,_317,_313,_327,_326,_31a,_31d,false);
_316.add(itemobj);
if(url!=null&&typeof (url)!="undefined"&&url!=""){
if(url.indexOf("?")!=-1){
url=url+"&";
}else{
url=url+"?";
}
var _328;
var _329;
if(_315){
_328=_315.callbackHandler;
_329=_315.errorHandler;
}
ColdFusion.Ajax.replaceHTML(_312,url,"GET",null,_328,_329);
}
_316.doLayout();
if(_31c){
ColdFusion.Layout.expandAccordion(_311,_317);
}
ColdFusion.Log.info("layout.createaccordionpanel.created","widget",[_312]);
}else{
ColdFusion.handleError(null,"layout.createaccordionpanel.layoutnotfound","widget",[_311],null,null,true);
}
};
ColdFusion.Layout.initViewport=function(_32a,item){
var _32c=new Array();
_32c[0]=item;
var _32d={items:_32c,layout:"fit",name:_32a};
var _32e=new Ext.Viewport(_32d);
return _32e;
};
ColdFusion.Layout.convertPositionToDirection=function(_32f){
if(_32f.toUpperCase()=="LEFT"){
return "west";
}else{
if(_32f.toUpperCase()=="RIGHT"){
return "east";
}else{
if(_32f.toUpperCase()=="CENTER"){
return "center";
}else{
if(_32f.toUpperCase()=="BOTTOM"){
return "south";
}else{
if(_32f.toUpperCase()=="TOP"){
return "north";
}
}
}
}
}
};
