/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Map){
ColdFusion.Map={};
}
var coldFusion_markerObjCache=new Array();
var $MAP=ColdFusion.Map;
$MAP.statusCodeObject={code200:"A directions request could not be successfully parsed. For example, the request may have been rejected if it contained more than the maximum number of waypoints allowed.",code400:"A directions request could not be successfully parsed. For example, the request may have been rejected if it contained more than the maximum number of waypoints allowed.",code500:"A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known",code601:"The HTTP query parameter was either missing or had no value. For geocoding requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input",code602:"No corresponding geographic location could be found for the specified address. This may be due to the fact that the address is relatively new, or it may be incorrect",code603:"The geocode for the given address or the route for the given directions query cannot be returned due to legal or contractual reasons",code604:"The GDirections object could not compute directions between the points mentioned in the query. This is usually because there is no route available between the two points, or because we do not have data for routing in that region",code610:"The given key is either invalid or does not match the domain for which it was given",code620:"The given key has gone over the requests limit in the 24 hour period or has submitted too many requests in too short a period of time. If you are sending multiple requests in parallel or in a tight loop, use a timer or pause in your code to make sure you do not send the requests too quickly"};
ColdFusion.Map.init=function(_549,_54a,_54b,type,_54d,_54e,_54f,_550,_551,_552,_553,_554,_555,_556,_557,_558,_559,_55a,_55b,_55c,_55d,_55e,_55f,_560,_561,_562,_563,_564,_565,_566){
var _567={divName:_549,type:type,layout:"fit",renderTo:_549,centerAddress:_55b,centerLatitude:_55c,centerLongitude:_55d,markerItems:_561,onLoad:_562,onError:_563,showCenterMarker:_556,showAllMarker:_557,markerColor:_55f,markerIcon:_560,markerBindListener:_565,initShow:_550};
if(_54b!=null&&typeof (_54b)!="undefined"){
_567.width=_54b;
}else{
_567.width=400;
}
if(_54a!=null&&typeof (_54a)!="undefined"){
_567.height=_54a;
}else{
_567.height=400;
}
if(_54d!=null&&typeof (_54d)!="undefined"){
_567.zoomLevel=_54d;
}else{
_567.zoomLevel=3;
}
_567.hideBorders=_54f;
if(!_54f){
if(_54e==null||typeof _54e==="undefined"||_54e.length==0){
_54e=" ";
}
_567.title=_54e;
_567.collapsible=_551;
}
if(_55f==null&&_560==null){
_567.markerColor="#00FF00";
}
var _568=new Ext.Panel(_567);
ColdFusion.objectCache[_549]=_567;
_567.mapPanel=_568;
var _569=["enableDragging"];
if(_552){
_569.push("enableScrollWheelZoom");
}else{
_569.push("disableScrollWheelZoom");
}
if(_553){
_569.push("enableDoubleClickZoom");
}else{
_569.push("disableDoubleClickZoom");
}
if(_554){
_569.push("enableContinuousZoom");
}else{
_569.push("disableContinuousZoom");
}
var _56a=$MAP.parseControlProperties(_555,_558,_559,_55a);
var _56b=[];
for(i=0;i<_567.markerItems.length;i++){
var _56c=$MAP.parseMarker(_567.markerItems[i],_549);
_56b.push(_56c);
}
if(_55e==null||typeof _55e==="undefined"){
_55e="";
}
var _56d={marker:{title:_55e}};
if(_567.markerColor!=null&&typeof _567.markerColor!="undefined"){
_56d.marker.markercolor=_567.markerColor;
}else{
if(_567.markerIcon!=null&&typeof _567.markerIcon!="undefined"){
_56d.marker.markericon=_567.markerIcon;
}
}
if(_564===true){
_56d.listeners={click:$MAP.markerOnClickHandler};
if(_566!=null){
_56d.marker.markerwindowcontent=_566;
}else{
_56d.marker.bindcallback=_565;
}
_56d.marker.name=_549;
}
if(_567.centerAddress!=null&&typeof _567.centerAddress==="string"){
_56d.geoCodeAddr=_567.centerAddress;
_56d.marker.address=_567.centerAddress;
}else{
_56d.lat=_567.centerLatitude;
_56d.lng=_567.centerLongitude;
_56d.marker.address=_567.centerAddress;
}
var _56e=false;
if(_559!=null&&typeof _559=="string"&&_559.toUpperCase()=="ADVANCED"){
_56e=true;
}
var _56f=new Ext.ux.GMapPanel({xtype:"gmappanel",region:"center",zoomLevel:_567.zoomLevel,gmapType:_567.type,mapConfOpts:_569,mapControls:_56a,setCenter:_56d,markers:_56b,border:!_567.hideBorders,onLoadhandler:$MAP.onLoadCompleteHandler,onErrorhandler:$MAP.onErrorHandler,name:_567.divName,noCenterMarker:!_556,showAllMarker:_557,advanceMapTypeControl:_56e});
_568.add(_56f);
_567.mapPanelObject=_56f;
if(_550===false){
_568.hide();
}else{
_568.doLayout();
}
ColdFusion.Log.info("map.initialized","widget",[_549]);
return _568;
};
$MAP.addMarker=function(name,_571){
var _572=$MAP.getMapPanelObject(name);
var _573=$MAP.parseMarker(_571,name);
var _574=[];
_574.push(_573);
_572.addMarkers(_574);
ColdFusion.Log.info("map.addmarker.markeradded","widget",[name,_574.length]);
};
$MAP.setCenter=function(name,_576){
var _577=$MAP.getMapPanelObject(name);
var lat;
var lng;
if(_576.latitude&&_576.longitude){
if(typeof _576.latitude!="number"||typeof _576.longitude!="number"){
ColdFusion.handleError(null,"map.setcenter.latlngnonnumeric","widget",[name,_576.latitude,_576.longitude],null,null,true);
}else{
lat=_576.latitude;
lng=_576.longitude;
}
var _57a=new GLatLng(lat,lng);
_577.getMap().setCenter(_57a,_577.zoomLevel,_577.parsedMapType);
}else{
if(_576.address){
if(typeof _576.address!="string"){
ColdFusion.handleError(null,"map.setcenter.addressnotstring","widget",[name,_576.address],null,null,true);
}else{
_577.geoCodeLookup(_576.address);
}
}else{
ColdFusion.handleError(null,"map.setcenter.invalidcenter","widget",[name],null,null,true);
}
}
ColdFusion.Log.info("map.setcenter.centerset","widget",[name]);
};
$MAP.getLatitudeLongitude=function(_57b,_57c){
geocoder=new GClientGeocoder();
if(_57c==null||!typeof _57c==="function"){
_57c=$MAP.LatitudeLongitudeHanlder;
}
geocoder.getLatLng(_57b,_57c);
};
$MAP.addEvent=function(name,_57e,_57f,_580){
var _581=$MAP.getMapPanelObject(name);
_581.addEventToMap(_57e,_57f,_580);
};
$MAP.setZoomLevel=function(name,_583){
var _584=$MAP.getMapPanelObject(name);
_584.zoomLevel=_583;
_584.getMap().setZoom(_583);
};
$MAP.getMapObject=function(name){
var _586=$MAP.getMapPanelObject(name);
if(_586!=null){
return _586.getMap();
}
};
$MAP.parseMarker=function(_587,_588){
var _589={};
if(_587.latitude&&_587.longitude){
if(typeof _587.latitude!="number"||typeof _587.longitude!="number"){
ColdFusion.handleError(null,"map.marker.latlngnonnumeric","widget",[_587.latitude,_587.longitude],null,null,true);
}else{
_589.lat=_587.latitude;
_589.lng=_587.longitude;
}
}else{
if(_587.address!=null){
if(typeof _587.address!="string"){
ColdFusion.handleError(null,"map.marker.addressnotstring","widget",[_587.address],null,null,true);
}else{
_589.address=_587.address;
}
}
}
var _58a={};
if(_587.tip==null){
_58a.title="";
}else{
_58a.title=_587.tip;
}
if(_587.markercolor!=null&&typeof _587.markercolor!="undefined"){
_58a.markercolor=_587.markercolor;
}else{
if(_587.markericon!=null&&typeof _587.markericon!="undefined"){
_58a.markericon=_587.markericon;
}
}
if(_587.showmarkerwindow===true||_587.markerwindowcontent!=null){
var _58b=ColdFusion.objectCache[_588];
var _58c;
if(_58b!=null||typeof (_58b)!="undefined"){
_58c=_58b.markerBindListener;
}
if(_58c!=null||_587.markerwindowcontent!=null){
_589.listeners={click:$MAP.markerOnClickHandler};
if(_587.markerwindowcontent!=null){
_58a.markerwindowcontent=_587.markerwindowcontent;
}else{
_58a.bindcallback=_58c;
}
_58a.name=_587.name;
}
}
_589.marker=_58a;
return _589;
};
$MAP.parseControlProperties=function(_58d,_58e,_58f,_590){
var _591=["NonExistantControl"];
if(_58d){
_591.push("GScaleControl");
}
if(_58f&&_58f.toUpperCase()=="BASIC"){
_591.push("GMapTypeControl");
}else{
if(_58f&&_58f.toUpperCase()=="ADVANCED"){
_591.push("GMenuMapTypeControl");
}
}
if(_58e){
_591.push("GOverviewMapControl");
}
if(_590!=null&&_590!="undefined"){
_590=_590.toUpperCase();
switch(_590){
case "SMALL":
_591.push("GSmallMapControl");
break;
case "SMALL3D":
_591.push("GSmallZoomControl3D");
break;
case "LARGE":
_591.push("GLargeMapControl");
break;
case "LARGE3D":
_591.push("GLargeMapControl3D");
break;
}
}
return _591;
};
$MAP.onErrorHandler=function(name,_593){
var _594=ColdFusion.objectCache[name];
var _595=$MAP.statusCodeObject;
var _596=$MAP.retrieveStatueMessage(_593);
var _597=_594.onError;
if(_597!=null&&typeof _597==="function"){
_597.call(null,_593,_596);
}else{
alert("Error: "+_596);
}
ColdFusion.handleError(null,"map.loadMap.error","map",[name,_593,_596],null,null,true);
};
$MAP.onLoadCompleteHandler=function(name){
var _599=ColdFusion.objectCache[name];
var _59a=_599.onLoad;
if(_59a!=null&&typeof _59a==="function"){
_59a.call();
}
};
$MAP.retrieveStatueMessage=function(code){
var _59c;
switch(code){
case 200:
_59c=$MAP.statusCodeObject.code200;
break;
case 400:
_59c=$MAP.statusCodeObject.code400;
break;
case 500:
_59c=$MAP.statusCodeObject.code500;
break;
case 601:
_59c=$MAP.statusCodeObject.code601;
break;
case 602:
_59c=$MAP.statusCodeObject.code602;
break;
case 603:
_59c=$MAP.statusCodeObject.code603;
break;
case 604:
_59c=$MAP.statusCodeObject.code604;
break;
case 610:
_59c=$MAP.statusCodeObject.code610;
break;
case 620:
_59c=$MAP.statusCodeObject.code620;
break;
}
return _59c;
};
$MAP.markerOnClickHandler=function(_59d){
coldFusion_markerObjCache[this.name]=this.marker;
if(this.bindcallback!=null&&typeof this.bindcallback=="function"){
var _59e=this.address;
if(_59e==null||typeof _59e=="undefined"){
_59e="";
}
this.bindcallback.call(null,this.name,_59d.lat(),_59d.lng(),_59e);
}else{
if(this.statictext!=null&&typeof this.statictext!="undefined"){
this.marker.openInfoWindowHtml(this.statictext);
}
}
};
ColdFusion.Map.loadMarkerWindowInfo=function(data,_5a0){
var _5a1=coldFusion_markerObjCache[_5a0._cf_marker_name];
_5a1.openInfoWindowHtml(data+"");
};
ColdFusion.Map.bindOnErrorHandler=function(data,_5a3){
ColdFusion.handleError(null,"map.markerbind.binderror","widget",[data],null,null,true);
};
$MAP.getMapPanelObject=function(name){
var _5a5=ColdFusion.objectCache[name];
if(_5a5==null||typeof (_5a5)=="undefined"){
ColdFusion.handleError(null,"map.getmappanelobject.notfound","widget",[name],null,null,true);
}
return _5a5.mapPanelObject;
};
$MAP.refresh=function(name){
var _5a7=ColdFusion.objectCache[name];
if(_5a7==null||typeof (_5a7)=="undefined"){
ColdFusion.handleError(null,"map.refresh.notfound","widget",[name],null,null,true);
}
_5a7.mapPanel.doLayout();
};
$MAP.hide=function(name){
var _5a9=ColdFusion.objectCache[name];
if(_5a9==null||typeof (_5a9)=="undefined"){
ColdFusion.handleError(null,"map.hide.notfound","widget",[name],null,null,true);
}
_5a9.mapPanel.hide();
};
$MAP.show=function(name){
var _5ab=ColdFusion.objectCache[name];
if(_5ab==null||typeof (_5ab)=="undefined"){
ColdFusion.handleError(null,"map.show.notfound","widget",[name],null,null,true);
}
_5ab.mapPanel.show();
_5ab.mapPanel.doLayout();
};
