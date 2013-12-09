/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Tree){
ColdFusion.Tree={};
}
ColdFusion.Tree.AttributesCollection=function(){
this.cache=true;
this.fontname=null;
this.bold=false;
this.italic=false;
this.completepath=false;
this.appendkey=false;
this.delimiter=null;
this.formname=null;
this.fontsize=null;
this.formparamname=null;
this.prevspanid=null;
this.prevspanbackground=null;
this.images={};
this.images.folder=_cf_ajaxscriptsrc+"/resources/cf/images/FolderClose.gif";
this.images.cd=_cf_ajaxscriptsrc+"/resources/cf/images/Cd.png";
this.images.computer=_cf_ajaxscriptsrc+"/resources/cf/images/Computer.png";
this.images.document=_cf_ajaxscriptsrc+"/resources/cf/images/Document.gif";
this.images.element=_cf_ajaxscriptsrc+"/resources/cf/images/Elements.png";
this.images.floppy=_cf_ajaxscriptsrc+"/resources/cf/images/Floppy.png";
this.images.fixed=_cf_ajaxscriptsrc+"/resources/cf/images/HardDrive.png";
this.images.remote=_cf_ajaxscriptsrc+"/resources/cf/images/NetworkDrive.png";
this.imagesopen={};
this.imagesopen.folder=_cf_ajaxscriptsrc+"/resources/cf/images/FolderOpen.gif";
this.imagesopen.cd=_cf_ajaxscriptsrc+"/resources/cf/images/Cd.png";
this.imagesopen.computer=_cf_ajaxscriptsrc+"/resources/cf/images/Computer.png";
this.imagesopen.document=_cf_ajaxscriptsrc+"/resources/cf/images/Document.gif";
this.imagesopen.element=_cf_ajaxscriptsrc+"/resources/cf/images/Elements.png";
this.imagesopen.floppy=_cf_ajaxscriptsrc+"/resources/cf/images/Floppy.png";
this.imagesopen.fixed=_cf_ajaxscriptsrc+"/resources/cf/images/HardDrive.png";
this.imagesopen.remote=_cf_ajaxscriptsrc+"/resources/cf/images/NetworkDrive.png";
this.eventcount=0;
this.eventHandlers=new Array();
this.nodeCounter=0;
};
ColdFusion.Tree.refresh=function(_367){
var tree=ColdFusion.objectCache[_367];
var _369=ColdFusion.objectCache[_367+"collection"];
if(!tree||YAHOO.widget.TreeView.prototype.isPrototypeOf(tree)==false){
ColdFusion.handleError(null,"tree.refresh.notfound","widget",[_367],null,null,true);
return;
}
if(!_369.dynLoadFunction){
ColdFusion.Log.info("tree.refresh.statictree","widget");
return;
}
_369.dynLoadFunction.call(null,tree.getRoot());
ColdFusion.Log.info("tree.refresh.success","widget",[_367]);
};
ColdFusion.Tree.getTreeObject=function(_36a){
if(!_36a){
ColdFusion.handleError(null,"tree.gettreeobject.emptyname","widget",null,null,null,true);
return;
}
var _36b=ColdFusion.objectCache[_36a];
if(_36b==null||YAHOO.widget.TreeView.prototype.isPrototypeOf(_36b)==false){
ColdFusion.handleError(null,"tree.gettreeobject.notfound","widget",[_36a],null,null,true);
return;
}
return _36b;
};
ColdFusion.Tree.loadNodes=function(_36c,_36d){
var i=0;
var _36f=ColdFusion.objectCache[_36d.treeid+"collection"];
var tree=ColdFusion.objectCache[_36d.treeid];
var _371;
var _372=false;
if(_36c&&typeof (_36c.length)=="number"&&!_36c.toUpperCase){
if(_36c.length>0&&typeof (_36c[0])!="object"){
_372=true;
}
}else{
_372=true;
}
if(_372){
ColdFusion.handleError(tree.onbinderror,"tree.loadnodes.invalidbindvalue","widget",[_36d.treeid]);
return;
}
if(_36d.parent&&!_36d.parent.isRoot()){
tree.removeChildren(_36d.parent);
}else{
if(_36d.parent&&_36d.parent.hasChildren()){
tree.removeChildren(_36d.parent);
_36d.parent=tree.getRoot();
}
}
if(!_36d.parent.leafnode){
for(i=0;i<_36c.length;i++){
var _373=_36f.nodeCounter++;
var node={};
node.id=_36c[i].VALUE;
if(typeof (_36c[i].DISPLAY)==undefined||_36c[i].DISPLAY==null){
node.label=_36c[i].VALUE;
}else{
node.label=_36c[i].DISPLAY;
}
node.expand=_36c[i].EXPAND;
node.appendkey=_36c[i].APPENDKEY;
node.href=_36c[i].HREF;
node.img=_36c[i].IMG;
node.imgOpen=_36c[i].IMGOPEN;
node.imgid="_cf_image"+_373;
node.spanid="_cf_span"+_373;
node.target=_36c[i].TARGET;
if(_36f.appendkey&&_36f.appendkey==true&&node.href){
var _375=new String(node.href);
_375=_375.toLowerCase();
if(_375.indexOf("javascript")<0){
if(_375.indexOf("?")>=0){
node.href=_36c[i].HREF+"&";
}else{
node.href=_36c[i].HREF+"?";
}
node.href=node.href+"CFTREEITEMKEY="+node.id;
}
}
var _376="";
if(node.img){
if(_36f.images[node.img]){
_376="<img src='"+_36f.images[node.img]+"' id='"+node.imgid+"' style='border:0'/>&nbsp;";
}else{
_376="<img src='"+node.img+"' id='"+node.imgid+"' style='border:0'/>&nbsp;";
}
}
if(_36f.fontname||_36f.italic==true||_36f.bold==true||_36f.fontsize){
_376=_376+"<span id='"+node.spanid+"' style='";
if(_36f.fontname){
_376=_376+"font-family:"+_36f.fontname+";";
}
if(_36f.italic==true){
_376=_376+"font-style:italic;";
}
if(_36f.bold==true){
_376=_376+"font-weight:bold;";
}
if(_36f.fontsize){
_376=_376+"font-size:"+_36f.fontsize+";";
}
_376=_376+"'>"+node.label+"</span>";
node.label=_376;
}else{
node.label=_376+"<span id='"+node.spanid+"'  >"+node.label+"</span>";
}
node.childrenFetched=false;
var _377=new YAHOO.widget.TextNode(node,_36d.parent,false);
var _378=false;
if(_36c[i].LEAFNODE&&_36c[i].LEAFNODE==true){
_378=true;
_377.leafnode=true;
_377.iconMode=1;
}
if(_378==true||(node.expand&&node.expand==true)){
_377.expand();
}
}
}
if(!_36d.parent.isRoot()){
_36d.parent.data.childrenFetched=true;
}
if(_36d.onCompleteCallBack){
_36d.onCompleteCallBack.call();
}else{
_36d.parent.tree.draw();
}
ColdFusion.Log.info("tree.loadnodes.success","widget",[_36d.treeid]);
};
ColdFusion.Tree.onExpand=function(node){
if(node.isRoot()){
return;
}
var _37a=ColdFusion.objectCache[node.tree.id+"collection"];
if(node.data.imgOpen&&typeof (node.leafnode)=="undefined"){
var _37b=ColdFusion.DOM.getElement(node.data.imgid,node.tree.id);
var src;
if(_37a.imagesopen[node.data.imgOpen]){
src=_37a.imagesopen[node.data.imgOpen];
}else{
src=node.data.imgOpen;
}
_37b.src=src;
}
if(_37a.cache==false&&node.data.childrenFetched==false&&_37a.dynLoadFunction){
node.tree.removeChildren(node);
}
};
ColdFusion.Tree.onCollapse=function(node){
if(node.isRoot()){
return;
}
var _37e=ColdFusion.objectCache[node.tree.id+"collection"];
if(node.data.img){
var _37f=ColdFusion.DOM.getElement(node.data.imgid,node.tree.id);
var src;
if(_37e.images[node.data.img]){
src=_37e.images[node.data.img];
}else{
src=node.data.img;
}
_37f.src=src;
}
node.data.childrenFetched=false;
};
ColdFusion.Tree.formPath=function(node,_382){
var _383=ColdFusion.objectCache[node.tree.id+"collection"];
if(_383.completepath==true&&node.isRoot()){
return "";
}else{
if(_383.completepath==false&&node.parent.isRoot()){
return "";
}
}
if(!_382){
_382=node;
}
var _384=ColdFusion.Tree.formPath(node.parent,_382);
_384=_384+node.data.id;
if(_382.data.id!=node.data.id){
_384=_384+_383.delimiter;
}
return _384;
};
ColdFusion.Tree.onLabelClick=function(node){
var _386="";
var _387=ColdFusion.objectCache[node.tree.id+"collection"];
var _386=ColdFusion.Tree.formPath(node);
if(_387.prevspanid){
var _388=ColdFusion.DOM.getElement(_387.prevspanid,node.tree.id);
if(_388.style){
_388.style.backgroundColor=_387.prevspanbackground;
}
}
var _389=ColdFusion.DOM.getElement(node.data.spanid,node.tree.id);
if(_389&&_389.style){
_387.prevspanbackground=_389.style.backgroundColor;
}
_389.style.backgroundColor="lightblue";
_387.prevspanid=node.data.spanid;
node.tree._cf_path=_386;
node.tree._cf_node=node.data.id;
var val="PATH="+_386+"; NODE="+node.data.id;
updateHiddenValue(val,_387.formname,_387.formparamname);
ColdFusion.Tree.fireSelectionChangeEvent(node.tree.id,_387.formname);
};
ColdFusion.Tree.fireSelectionChangeEvent=function(id,_38c){
ColdFusion.Log.info("tree.fireselectionchangeevent.fire","widget",[id]);
ColdFusion.Event.callBindHandlers(id,_38c,"change");
};
ColdFusion.Tree.getObject=function(_38d){
var _38e={};
_38e.id=_38d.value;
if(_38d.href&&_38d.href!="null"){
_38e.href=_38d.href;
}
_38e.target=_38d.target;
_38e.label=_38d.label;
_38e.display=_38d.display;
_38e.img=_38d.img;
_38e.imgOpen=_38d.imgOpen;
_38e.imgid=_38d.imgid;
_38e.spanid=_38d.spanid;
_38e.childrenfetched=_38d.childrenfetched;
return _38e;
};
ColdFusion.Tree.initializeTree=function(_38f,_390,_391,bold,_393,_394,_395,_396,_397,_398,_399,_39a){
var _39b=new YAHOO.widget.TreeView(_38f);
_39b.subscribe("expand",ColdFusion.Tree.onExpand);
_39b.subscribe("collapse",ColdFusion.Tree.onCollapse);
_39b.subscribe("labelClick",ColdFusion.Tree.onLabelClick);
_39b._cf_getAttribute=function(_39c){
_39c=_39c.toUpperCase();
if(_39c=="PATH"){
return _39b._cf_path;
}else{
if(_39c=="NODE"){
return _39b._cf_node;
}else{
return null;
}
}
};
_39b.onbinderror=_398;
ColdFusion.objectCache[_38f]=_39b;
var _39d=new ColdFusion.Tree.AttributesCollection();
_39d.cache=_390;
_39d.italic=_391;
_39d.bold=bold;
_39d.completepath=_393;
_39d.delimiter=_395;
_39d.appendkey=_394;
_39d.formname=_396;
_39d.formparamname=_397;
_39d.fontsize=_399;
_39d.fontname=_39a;
ColdFusion.objectCache[_38f+"collection"]=_39d;
ColdFusion.Log.info("tree.initializetree.success","widget",[_38f]);
return _39b;
};
