/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
cfinitgrid=function(){
if(!ColdFusion.Grid){
ColdFusion.Grid={};
}
var $G=ColdFusion.Grid;
var $L=ColdFusion.Log;
$G.init=function(id,name,_41e,_41f,edit,_421,_422,_423,_424,_425,_426,_427,_428,_429,_42a,_42b,_42c,_42d,_42e,_42f,_430,_431,_432,_433,_434,_435,_436,_437,_438){
var grid;
var _43a;
var _43b=false;
if(_42d&&typeof (_42d)!="undefined"){
_43a=_42d;
_43b=true;
}else{
_43a=new Ext.grid.RowSelectionModel({singleSelect:true});
}
var _43c=new Ext.grid.ColumnModel(_424);
var _43d={ds:_425,cm:_43c,sm:_43a,autoSizeColumns:_422,autoSizeHeaders:_422,stripeRows:_428,autoExpandColumnId:_423};
if(_437!=null&&typeof _437!="undefined"){
_43d.plugins=_437;
}
if(!_426||typeof (_426)=="undefined"){
_426=100*(_424.length-1);
}
var _43e=ColdFusion.objectCache[id];
var _43f=document.getElementById(_43e.gridId);
if(_43f!=null){
var _440=_43f.style.cssText;
if(typeof _440=="undefined"){
_440="";
}
_440="width:"+_426+"px;"+_440;
_43f.style.cssText=_440;
}
_43d.width=_426;
if(_422===true){
_43d.viewConfig={forceFit:true};
}else{
if(_42d&&typeof (_42d)!="undefined"){
_43d.autoExpandColumn=_423;
}else{
_43d.autoExpandColumn=_423;
}
}
if(_427){
_43d.height=_427;
}else{
_43d.autoHeight=true;
var _441=".x-grid3-header {position: relative;}";
Ext.util.CSS.createStyleSheet(_441,"_cf_grid"+id);
}
if(_42f&&typeof (_42f)!="undefined"){
_43d.view=new Ext.grid.GroupingView({forceFit:false,groupTextTpl:"{[values.text.indexOf(\"x-grid3-check-col\") > 0 ? (values.text.indexOf(\"x-grid3-check-col-on\") > 0 ? \"Yes\" : \"No\") : values.text]} ({[values.rs.length]} {[values.rs.length > 1 ? \"Items\" : \"Item\"]})"});
}
_43d.title=_430;
_43d.collapsible=_42e;
if(_42e&&_430==null){
_43d.title="  ";
}
var _442=ColdFusion.objectCache[id];
_442.bindOnLoad=_421;
_442.dynamic=_41f;
_442.styles=_429;
_442.grouping=_42f;
_442.onLoadFunction=_436;
_442.multiRowSelection=_43b;
_43d.renderTo=_442.gridId;
_43d.tbar=new Ext.Toolbar({hidden:true});
if(_41f){
_43d.bbar=new Ext.PagingToolbar({pageSize:_42a,store:_425,emptyMsg:"No topics to display"});
if(_434&&(_431||_432)){
var _443=_43d.bbar;
if(_431){
_443.addButton({text:_431,handler:$G.insertRow,scope:_442});
_443.addButton({text:" save ",handler:$G.saveNewRecord,scope:_442});
_443.addButton({text:" cancel ",handler:$G.cancelNewRecord,scope:_442});
}
if(_432){
_443.addButton({text:_432,handler:$G.deleteRow,scope:_442});
}
}
}
if(edit&&!_41f){
if(_431||_432){
var bbar=new Ext.Toolbar();
if(_431){
bbar.addButton({text:_431,xtype:"button",handler:$G.insertRow,scope:_442});
}
if(_432){
bbar.addButton({text:_432,handler:$G.deleteRow,scope:_442});
}
}else{
var bbar=new Ext.Toolbar({hidden:true});
}
_43d.bbar=bbar;
}
if(edit){
_43d.clicksToEdit=1;
grid=new Ext.grid.EditorGridPanel(_43d);
}else{
grid=new Ext.grid.GridPanel(_43d);
}
$G.Ext_caseInsensitive_sorting();
_425.addListener("load",$G.Actions.onLoad,_442,{delay:50});
grid.view.colMenu.addListener("beforeshow",function(menu){
var _446=_43c.getColumnCount();
for(var i=0;i<_446;i++){
if("CFGRIDROWINDEX"==_43c.getDataIndex(i)){
menu.remove(menu.items["items"][i]);
break;
}
}
},this);
_442.grid=grid;
grid.render();
if(!_41f){
_425.addListener("load",$G.Actions.onLoad,_442,{delay:50});
_425.load();
}
if(_41f){
_425.addListener("load",$G.Actions.onLoad,_442,{delay:50});
_425._cf_errorHandler=_435;
_425.proxy._cf_actions=_442;
_425.load({params:{start:0,limit:_42a}});
}else{
$G.applyStyles(_442);
}
if(_438){
ColdFusion.Bind.register(_438,{actions:_442},$G.bindHandler,false);
}
$L.info("grid.init.created","widget",[id]);
_442.init(id,name,_41e,_433,_41f,edit,_434,_435,_42c,_42a,_42b,_42f);
};
$G.applyStyles=function(_448){
if(_448.stylesApplied){
return;
}
Ext.util.CSS.createStyleSheet(_448.styles);
_448.stylesApplied=true;
};
$G.bindHandler=function(e,_44a){
$G.refresh(_44a.actions.id);
};
$G.bindHandler._cf_bindhandler=true;
$G.refresh=function(_44b,_44c){
var _44d=ColdFusion.objectCache[_44b];
if(_44d&&$G.Actions.prototype.isPrototypeOf(_44d)==true){
var _44e=_44d.grid.getStore();
if(_44d.dynamic){
_44d.editOldValue=null;
_44d.selectedRow=-1;
if(_44c){
_44e.reload();
}else{
_44e.reload({params:{start:0,limit:_44d.pageSize}});
}
}
}else{
ColdFusion.handleError(null,"grid.refresh.notfound","widget",[_44b],null,null,true);
return;
}
if(_44d.multiRowSelection){
var _44f=_44d.grid.getView().getHeaderCell(0);
if(_44f!=null){
var _450=Ext.Element.get(_44f).first();
if(_450){
_450.replaceClass("x-grid3-hd-checker-on");
}
}
}
$L.info("grid.refresh.success","widget",[_44b]);
};
$G.Ext_caseInsensitive_sorting=function(){
Ext.data.Store.prototype.sortData=function(f,_452){
_452=_452||"ASC";
var st=this.fields.get(f).sortType;
var fn=function(r1,r2){
var v1=st(r1.data[f]),v2=st(r2.data[f]);
if(v1.toLowerCase){
v1=v1.toLowerCase();
v2=v2.toLowerCase();
}
return v1>v2?1:(v1<v2?-1:0);
};
this.data.sort(_452,fn);
if(this.snapshot&&this.snapshot!=this.data){
this.snapshot.sort(_452,fn);
}
};
};
$G.getTopToolbar=function(_458){
var _459=ColdFusion.objectCache[_458];
if(!_459){
ColdFusion.handleError(null,"grid.getTopToolbar.notfound","widget",[_458],null,null,true);
return;
}
return _459.grid.getTopToolbar();
};
$G.showTopToolbar=function(_45a){
var _45b=ColdFusion.objectCache[_45a];
if(!_45b){
ColdFusion.handleError(null,"grid.showTopToolbar.notfound","widget",[_45a],null,null,true);
return;
}
var tbar=_45b.grid.getTopToolbar();
if(!tbar){
ColdFusion.handleError(null,"grid.showTopToolbar.toolbarNotDefined","widget",[_45a],null,null,true);
return;
}
tbar.show();
};
$G.hideTopToolbar=function(_45d){
var _45e=ColdFusion.objectCache[_45d];
if(!_45e){
ColdFusion.handleError(null,"grid.hideTopToolbar.notfound","widget",[_45d],null,null,true);
return;
}
var tbar=_45e.grid.getTopToolbar();
if(!tbar){
ColdFusion.handleError(null,"grid.hideTopToolbar.toolbarNotDefined","widget",[_45d],null,null,true);
return;
}
tbar.hide();
};
$G.refreshTopToolbar=function(_460){
var _461=ColdFusion.objectCache[_460];
if(!_461){
ColdFusion.handleError(null,"grid.refreshTopToolbar.notfound","widget",[_460],null,null,true);
return;
}
var tbar=_461.grid.getTopToolbar();
if(!tbar){
ColdFusion.handleError(null,"grid.refreshTopToolbar.toolbarNotDefined","widget",[_460],null,null,true);
return;
}
tbar.doLayout();
if(tbar.isVisible()==false){
tbar.show();
}
};
$G.getBottomToolbar=function(_463){
var _464=ColdFusion.objectCache[_463];
if(!_464){
ColdFusion.handleError(null,"grid.getBottomToolbar.notfound","widget",[_463],null,null,true);
return;
}
return _464.grid.getBottomToolbar();
};
$G.showBottomToolbar=function(_465){
var _466=ColdFusion.objectCache[_465];
if(!_466){
ColdFusion.handleError(null,"grid.showBottomToolbar.notfound","widget",[_465],null,null,true);
return;
}
var tbar=_466.grid.getBottomToolbar();
if(!tbar){
ColdFusion.handleError(null,"grid.showBottomToolbar.toolbarNotDefined","widget",[_465],null,null,true);
return;
}
tbar.show();
};
$G.hideBottomToolbar=function(_468){
var _469=ColdFusion.objectCache[_468];
if(!_469){
ColdFusion.handleError(null,"grid.hideBottomToolbar.notfound","widget",[_468],null,null,true);
return;
}
var tbar=_469.grid.getBottomToolbar();
if(!tbar){
ColdFusion.handleError(null,"grid.hideBottomToolbar.toolbarNotDefined","widget",[_468],null,null,true);
return;
}
tbar.hide();
};
$G.refreshBottomToolbar=function(_46b){
var _46c=ColdFusion.objectCache[_46b];
if(!_46c){
ColdFusion.handleError(null,"grid.refreshBottomToolbar.notfound","widget",[_46b],null,null,true);
return;
}
var tbar=_46c.grid.getBottomToolbar();
if(!tbar){
ColdFusion.handleError(null,"grid.refreshBottomToolbar.toolbarNotDefined","widget",[_46b],null,null,true);
return;
}
tbar.doLayout();
if(tbar.isVisible()==false){
tbar.show();
}
};
$G.sort=function(_46e,_46f,_470){
var _471=ColdFusion.objectCache[_46e];
if(!_471){
ColdFusion.handleError(null,"grid.sort.notfound","widget",[_46e],null,null,true);
return;
}
_46f=_46f.toUpperCase();
var _472=-1;
var _473=_471.grid.getColumnModel().config;
for(var i=0;i<_473.length-1;i++){
if(_46f==_473[i].colName){
_472=i;
break;
}
}
if(_472==-1){
ColdFusion.handleError(null,"grid.sort.colnotfound","widget",[_46f,_46e],null,null,true);
return;
}
if(!_470){
_470="ASC";
}
_470=_470.toUpperCase();
if(_470!="ASC"&&_470!="DESC"){
ColdFusion.handleError(null,"grid.sort.invalidsortdir","widget",[_470,_46e],null,null,true);
return;
}
var _475=_471.grid.getStore();
_475.sort(_46f,_470);
};
$G.getGridObject=function(_476){
if(!_476){
ColdFusion.handleError(null,"grid.getgridobject.missinggridname","widget",null,null,null,true);
return;
}
var _477=ColdFusion.objectCache[_476];
if(_477==null||$G.Actions.prototype.isPrototypeOf(_477)==false){
ColdFusion.handleError(null,"grid.getgridobject.notfound","widget",[_476],null,null,true);
return;
}
return _477.grid;
};
$G.getSelectedRows=function(_478){
if(!_478){
ColdFusion.handleError(null,"grid.getSelectedRowData.missinggridname","widget",null,null,null,true);
return;
}
var _479=ColdFusion.objectCache[_478];
var _47a=new Array();
var _47b=_479.grid.getSelectionModel();
var _47c=_47b.getSelections();
var _47d=_479.grid.getColumnModel();
var _47e=0;
if(_479.multiRowSelection===true&&_479.dynamic===false){
_47e++;
}
for(i=0;i<_47c.length;i++){
var _47f=_47c[i].data;
var _480={};
for(var _481=_47e;_481<_47d.getColumnCount()-1;_481++){
var key=_47d.getDataIndex(_481);
_480[key]=_47f[key];
}
_47a[i]=_480;
}
return _47a;
};
$G.clearSelectedRows=function(_483){
if(!_483){
ColdFusion.handleError(null,"grid.getSelectedRowData.missinggridname","widget",null,null,null,true);
return;
}
var _484=ColdFusion.objectCache[_483];
var _485=_484.grid.getSelectionModel();
_485.clearSelections();
if(_484.multiRowSelection){
var _486=_484.grid.getView().getHeaderCell(0);
if(_486!=null){
var _487=Ext.Element.get(_486).first();
if(_487){
_487.replaceClass("x-grid3-hd-checker-on");
}
}
}
};
$G.Actions=function(_488){
this.gridId=_488;
this.init=$G.Actions.init;
this.onChangeHandler=$G.Actions.onChangeHandler;
this.onChangeHandler_MultiRowsDelete=$G.Actions.onChangeHandler_MultiRowsDelete;
this.selectionChangeEvent=new ColdFusion.Event.CustomEvent("cfGridSelectionChange",_488);
this.fireSelectionChangeEvent=$G.fireSelectionChangeEvent;
this._cf_getAttribute=$G.Actions._cf_getAttribute;
this._cf_register=$G.Actions._cf_register;
};
$G.Actions.init=function(id,_48a,_48b,_48c,_48d,edit,_48f,_490,_491,_492,_493,_494){
this.id=id;
this.gridName=_48a;
this.formId=_48b;
this.form=document.getElementById(_48b);
this.cellClickInfo=_48c;
this.edit=edit;
this.onChangeFunction=_48f;
this.onErrorFunction=_490;
this.preservePageOnSort=_491;
this.pageSize=_492;
this.selectedRow=-1;
this.selectOnLoad=_493;
this.grouping=_494;
this.grid.addListener("cellclick",$G.cellClick,this,true);
this.editField=document.createElement("input");
this.editField.setAttribute("name",_48a);
this.editField.setAttribute("type","hidden");
this.form.appendChild(this.editField);
if(edit){
if(!_48d){
var _495=this.grid.getColumnModel().config;
this.editFieldPrefix="__CFGRID__EDIT__=";
var i=0;
var _497=_495.length-1;
if(this.multiRowSelection===true&&this.dynamic===false){
i++;
_497--;
}
this.editFieldPrefix+=_497+$G.Actions.fieldSep;
var _498=true;
for(i;i<_495.length-1;i++){
if(!_498){
this.editFieldPrefix+=$G.Actions.fieldSep;
}
this.editFieldPrefix+=_495[i].colName;
this.editFieldPrefix+=$G.Actions.valueSep;
if(_495[i].editor){
this.editFieldPrefix+="Y";
}else{
this.editFieldPrefix+="N";
}
_498=false;
}
this.editFieldPrefix+=$G.Actions.fieldSep;
}
this.editFieldState=[];
this.editFieldState.length=this.grid.getStore().getTotalCount();
$G.Actions.computeEditField(this);
this.insertInProgress=false;
this.insertEvent=null;
this.grid.addListener("beforeedit",$G.Actions.beforeEdit,this,true);
this.grid.addListener("afteredit",$G.Actions.afterEdit,this,true);
}
if(_48d){
this.grid.getStore().addListener("beforeload",$G.Actions.beforeLoad,this,true);
}
this.grid.getSelectionModel().addListener("rowselect",$G.rowSelect,this,true);
this.grid.getSelectionModel().addListener("beforerowselect",$G.beforeRowSelect,this,true);
if(_493&&!_494){
this.grid.getSelectionModel().selectFirstRow();
}
};
$G.Actions.beforeLoad=function(_499,_49a){
var _49b=_499.getSortState();
var _49c=((typeof this.sortCol!="undefined"&&_49b.field!=this.sortCol)||(typeof this.direction!="undefined"&&_49b.direction!=this.sortDir));
if(_49c&&!this.preservePageOnSort){
_49a.params.start=0;
}
this.sortCol=_49b.field;
this.sortDir=_49b.direction;
};
$G.Actions.onLoad=function(){
this.editOldValue=null;
this.selectedRow=-1;
this.insertInProgress=false;
var _49d=0;
if((this.bindOnLoad||!this.dynamic)&&this.selectOnLoad&&!this.grouping){
this.grid.getSelectionModel().selectRow(_49d,false);
}
if(!this.gridRendered&&this.onLoadFunction&&typeof this.onLoadFunction=="function"){
this.gridRendered=true;
this.onLoadFunction.call(null,this.grid);
}
};
$G.Actions._cf_getAttribute=function(_49e){
_49e=_49e.toUpperCase();
var _49f=this.selectedRow;
var _4a0=null;
if(_49f!=0&&(!_49f||_49f==-1)){
return _4a0;
}
var ds=this.grid.getStore();
var _4a2=(this.dynamic)?ds.getAt(_49f):ds.getById(_49f);
_4a0=_4a2.get(_49e);
return _4a0;
};
$G.Actions._cf_register=function(_4a3,_4a4,_4a5){
this.selectionChangeEvent.subscribe(_4a4,_4a5);
};
$G.rowSelect=function(_4a6,row){
var _4a8="";
var _4a9=_4a6.getSelected();
var _4aa=_4a9.get("CFGRIDROWINDEX")||row;
if(this.selectedRow!=_4aa){
this.selectedRow=_4aa;
var _4ab=true;
for(col in _4a9.data){
if(col=="CFGRIDROWINDEX"){
continue;
}
if(typeof col=="undefined"||col=="undefined"){
continue;
}
if(!_4ab){
_4a8+="; ";
}
_4a8+="__CFGRID__COLUMN__="+col+"; ";
_4a8+="__CFGRID__DATA__="+_4a9.data[col];
_4ab=false;
}
this.fireSelectionChangeEvent();
this.insertInProgress=false;
}
};
$G.beforeRowSelect=function(_4ac,row){
var ds=this.grid.getStore();
var _4af=ds.getAt(row);
return !$G.isNullRow(_4af.data);
};
$G.isNullRow=function(data){
var _4b1=true;
for(col in data){
if(data[col]!=null){
_4b1=false;
break;
}
}
return _4b1;
};
$G.fireSelectionChangeEvent=function(){
$L.info("grid.fireselectionchangeevent.fire","widget",[this.id]);
this.selectionChangeEvent.fire();
};
$G.cellClick=function(grid,_4b3,_4b4){
var _4b5=this.cellClickInfo.colInfo[_4b4];
if(_4b5){
var _4b6=grid.getSelectionModel().getSelected();
var url=_4b6.get(_4b5.href.toUpperCase());
if(!url){
url=_4b5.href;
}
var _4b8=_4b5.hrefKey;
var _4b9=_4b5.target;
var _4ba=this.appendKey;
if(this.cellClickInfo.appendKey){
var _4bb;
if(_4b8||_4b8==0){
var _4bc=grid.getStore().getAt(_4b3);
var _4bd=grid.getColumnModel().config[_4b8].dataIndex;
_4bb=_4bc.get(_4bd);
}else{
var _4be=this.grid.getColumnModel().config;
_4bb=_4b6.get(_4be[0].dataIndex);
for(var i=1;i<_4be.length-1;i++){
_4bb+=","+_4b6.get(_4be[i].dataIndex);
}
}
if(url.indexOf("?")!=-1){
url+="&CFGRIDKEY="+_4bb;
}else{
url+="?CFGRIDKEY="+_4bb;
}
}
if(_4b9){
_4b9=_4b9.toLowerCase();
if(_4b9=="_top"){
_4b9="top";
}else{
if(_4b9=="_parent"){
_4b9="parent";
}else{
if(_4b9=="_self"){
_4b9=window.name;
}else{
if(_4b9=="_blank"){
window.open(encodeURI(url));
return;
}
}
}
}
if(!parent[_4b9]){
ColdFusion.handleError(null,"grid.cellclick.targetnotfound","widget",[_4b9]);
return;
}
parent[_4b9].location=encodeURI(url);
}else{
window.location=encodeURI(url);
}
}
};
$G.insertRow=function(){
if(this.insertInProgress&&this.dynamic){
ColdFusion.handleError(null,"Multiple row insert is not supported","Grid",[this.gridId],null,null,true);
return;
}
var _4c0={action:"I",values:[]};
var _4c1=this.grid.getColumnModel();
var _4c2=this.grid.getStore();
var _4c3={};
for(var i=0;i<_4c1.getColumnCount()-1;i++){
var _4c5="";
var _4c6=_4c1.getCellEditor(i,0);
if(_4c6&&Ext.form.Checkbox.prototype.isPrototypeOf(_4c6.field)){
_4c5=false;
}
_4c0.values[i]=[_4c5,_4c5];
_4c3[_4c1.getDataIndex(i)]=_4c5;
}
_4c3["CFGRIDROWINDEX"]=_4c2.getCount()+1;
_4c2.add(new Ext.data.Record(_4c3));
if(this.dynamic==true){
this.selectedRow=_4c2.getCount();
}
this.editFieldState.push(_4c0);
this.grid.getSelectionModel().selectRow(_4c2.getCount()-1);
this.insertInProgress=true;
$G.Actions.computeEditField(this);
};
$G.saveNewRecord=function(){
if(!this.insertInProgress){
return;
}
var _4c7=this.selectedRow;
var _4c8=this.insertEvent;
if(_4c7==-1){
return;
}
if(this.onChangeFunction){
this.onChangeHandler("I",_4c7-1,_4c8,$G.insertRowCallback);
}else{
if(this.dynamic==false){
var _4c9=this.grid.getStore();
var _4ca=_4c8.record;
var _4cb=new Array(1);
_4cb[0]=_4ca;
var _4cc=_4c9.getAt(this.selectedRow-1);
_4c9.remove(_4cc);
_4c9.add(_4cb);
}
}
this.insertInProgress=false;
this.insertEvent=null;
};
$G.cancelNewRecord=function(){
if(!this.insertInProgress){
return;
}
this.editFieldState.pop();
var _4cd=this.grid.getStore();
var _4ce=_4cd.getAt(this.selectedRow-1);
_4cd.remove(_4ce);
this.insertInProgress=false;
this.insertEvent=null;
this.selectedRow=this.selectedrow-1;
};
$G.deleteRow=function(){
var _4cf=null;
var _4d0;
if(this.multiRowSelection===true){
var _4d1=this.grid.getSelectionModel();
_4cf=_4d1.getSelections();
}
if(_4cf==null){
_4d0=this.selectedRow;
}
if(_4d0==-1&&_4cf==null){
return;
}
if(this.onChangeFunction){
if(_4cf!=null){
this.onChangeHandler_MultiRowsDelete("D",_4cf,null,$G.deleteRowCallback);
}else{
this.onChangeHandler("D",_4d0,null,$G.deleteRowCallback);
}
}else{
if(!this.dynamic){
var _4d2=this.grid.getStore();
if(_4cf!=null){
for(i=0;i<_4cf.length;i++){
var _4d3=_4d2.indexOf(_4cf[i]);
var _4d4=this.editFieldState[_4d3];
if(_4d4){
_4d4.action="D";
}else{
_4d4=$G.Actions.initEditState(this,"D",_4cf[i],_4d3+1);
}
}
for(i=0;i<_4cf.length;i++){
_4d2.remove(_4cf[i]);
}
}else{
var _4d4=this.editFieldState[_4d0-1];
if(_4d4){
_4d4.action="D";
}else{
var _4d5=this.grid.getStore().getById(_4d0);
_4d4=$G.Actions.initEditState(this,"D",_4d5,_4d0);
}
_4d2.remove(this.grid.getSelectionModel().getSelected());
}
$G.Actions.computeEditField(this);
this.grid.stopEditing();
this.selectedRow=-1;
}
}
};
$G.deleteRowCallback=function(_4d6,_4d7){
var _4d8=_4d7._cf_grid.getStore();
var _4d9=_4d7._cf_grid_properties;
var _4d7=_4d8.lastOptions.params;
var key="start";
if(_4d8.getCount()==1){
if(_4d7.start>=_4d7.limit){
_4d7.start=_4d7.start-_4d7.limit;
}
_4d8.reload(_4d7);
}else{
_4d8.reload();
}
if(_4d9.multiRowSelection){
var _4db=_4d9.grid.getView().getHeaderCell(0);
if(_4db!=null){
var _4dc=Ext.Element.get(_4db).first();
if(_4dc){
_4dc.replaceClass("x-grid3-hd-checker-on");
}
}
}
};
$G.insertRowCallback=function(_4dd,_4de){
var _4df=_4de._cf_grid.getStore();
var _4e0=_4de._cf_grid.actions;
_4df.reload();
};
$G.Actions.beforeEdit=function(_4e1){
if($G.isNullRow(_4e1.record.data)){
return false;
}
this.editColumn=_4e1.column;
this.editOldValue=_4e1.value;
};
$G.Actions.afterEdit=function(_4e2){
var _4e3=_4e2.value;
if(this.insertInProgress==false&&this.onChangeFunction){
this.onChangeHandler("U",this.selectedRow,_4e2);
}else{
if(!this.dynamic){
var _4e4=$G.computeActualRow_editField(this.editFieldState,this.selectedRow);
var _4e5=this.editFieldState[_4e4-1];
if(_4e5){
var _4e6=_4e2.column;
if(this.multiRowSelection===true&&this.insertInProgress==true){
_4e6=_4e6-1;
}
_4e5.values[_4e6][1]=_4e3;
}else{
var _4e7=this.grid.getStore().getById(this.selectedRow);
_4e5=$G.Actions.initEditState(this,"U",_4e7,_4e4);
var _4e8=this.editOldValue+"";
if(_4e3.getDayOfYear){
if(_4e8&&typeof _4e8=="string"){
_4e8=new Date(_4e8);
}
_4e5.values[_4e2.column][1]=_4e3.format("F, j Y H:i:s");
_4e5.values[_4e2.column][0]=_4e8?_4e8.format("F, j Y H:i:s"):_4e8;
}else{
_4e5.values[_4e2.column][0]=_4e8;
_4e5.values[_4e2.column][1]=_4e3;
}
}
$G.Actions.computeEditField(this);
}
}
this.editOldValue=null;
this.fireSelectionChangeEvent();
};
$G.computeActualRow_editField=function(_4e9,_4ea){
if(_4e9.length==_4ea){
return _4ea;
}
var _4eb=0;
var _4ec=0;
for(;_4ec<_4e9.length&&_4eb<_4ea;_4ec++){
var _4ed=_4e9[_4ec];
if(!_4ed||_4ed.action!="D"){
_4eb++;
}
}
return _4ec;
};
$G.Actions.onChangeHandler=function(_4ee,_4ef,_4f0,_4f1){
var _4f2={};
var _4f3={};
var data=_4f0?_4f0.record.data:this.grid.getStore().getAt(_4ef).data;
for(col in data){
_4f2[col]=data[col];
}
if(_4ee=="U"){
if((_4f0.value==null||_4f0.value=="")&&(_4f0.originalValue==null||_4f0.originalValue=="")){
return;
}
if(_4f0.value&&_4f0.value.getDayOfYear){
if(typeof _4f0.originalValue=="string"){
var _4f5=new Date(_4f0.originalValue);
}
if(_4f5!=null&&_4f5.getElapsed(_4f0.value)==0){
return;
}else{
_4f2[_4f0.field]=_4f0.originalValue;
_4f3[_4f0.field]=_4f0.value.format("F, j Y H:i:s");
}
}else{
_4f2[_4f0.field]=_4f0.originalValue;
_4f3[_4f0.field]=_4f0.value;
}
}
this.onChangeFunction(_4ee,_4f2,_4f3,_4f1,this.grid,this.onErrorFunction,this);
};
$G.Actions.onChangeHandler_MultiRowsDelete=function(_4f6,_4f7,_4f8,_4f9){
var _4fa=new Array();
var _4fb={};
for(i=0;i<_4f7.length;i++){
_4fa[i]=_4f7[i].data;
}
this.onChangeFunction(_4f6,_4fa,_4fb,_4f9,this.grid,this.onErrorFunction,this);
};
$G.Actions.initEditState=function(_4fc,_4fd,_4fe,_4ff){
var _500={action:_4fd,values:[]};
var _501=_4fc.grid.getColumnModel();
var _502=_501.getColumnCount()-1;
_500.values.length=_502;
var i=0;
if(_4fc.multiRowSelection===true&&_4fc.dynamic===false){
i=i++;
}
for(i;i<_502;i++){
var _504=_4fe.get(_501.getDataIndex(i));
_500.values[i]=[_504,_504];
}
_4fc.editFieldState[_4ff-1]=_500;
return _500;
};
$G.Actions.fieldSep=eval("'\\u0001'");
$G.Actions.valueSep=eval("'\\u0002'");
$G.Actions.nullValue=eval("'\\u0003'");
$G.Actions.computeEditField=function(_505){
if(_505.dynamic){
return;
}
var _506=_505.editFieldPrefix;
var _507=_505.editFieldState;
var _508=_505.grid.getColumnModel().config;
var _509=0;
var _50a="";
for(var i=0;i<_507.length;i++){
var _50c=_507[i];
if(_50c){
_509++;
_50a+=$G.Actions.fieldSep;
_50a+=_50c.action+$G.Actions.valueSep;
var _50d=_50c.values;
if(_505.multiRowSelection===true&&_505.dynamic===false&&_50c.action!="I"){
_50d=_50d.slice(1,_50d.length);
}
for(var j=0;j<_50d.length;j++){
if(j>0){
_50a+=$G.Actions.valueSep;
}
var _50f=($G.Actions.isNull(_50d[j][0]))?$G.Actions.nullValue:_50d[j][0];
var _510=($G.Actions.isNull(_50d[j][1]))?$G.Actions.nullValue:_50d[j][1];
var _511=j;
if(_505.multiRowSelection===true){
_511++;
}
if(_50c.action!="I"||(_50c.action=="I"&&_508[_511].editor)){
if(_508[_511].type=="date"){
if(_510!=null&&_510!=$G.Actions.nullValue){
if(typeof _510=="string"){
_510=new Date(_510);
}
_510=_510.format("F, j Y H:i:s");
}
if(_50f!=null&&_50f!=$G.Actions.nullValue){
if(typeof _50f=="string"){
_50f=new Date(_50f);
}
_50f=_50f.format("F, j Y H:i:s");
}
}
_50a+=_510;
if(_50c.action=="U"&&_508[_511].editor){
_50a+=$G.Actions.valueSep+_50f;
}
}
}
}
}
_506+=_509+_50a;
_505.editField.setAttribute("value",_506);
};
$G.Actions.isNull=function(val){
var ret=(val==null||typeof (val)=="undefined"||val.length==0);
return ret;
};
$G.loadData=function(data,_515){
_515._cf_gridDataProxy.loadResponse(data,_515);
var _516=ColdFusion.objectCache[_515._cf_gridname];
$G.applyStyles(_516);
$L.info("grid.loaddata.loaded","widget",[_515._cf_gridname]);
if($G.Actions.isNull(data.TOTALROWCOUNT)==false&&data.TOTALROWCOUNT==0){
_516.fireSelectionChangeEvent();
}
};
$G.printObject=function(obj){
var str="";
for(key in obj){
str=str+"  "+key+"=";
value=obj[key];
str+=value;
}
return str;
};
$G.formatBoolean=function(v,p,_51b){
return "<div class=\"x-grid3-check-col"+(v?"-on":"")+" x-grid3-cc-"+this.id+"\">&#160;</div>";
};
$G.formatDate=function(_51c,p,_51e){
if(_51c&&!_51c.dateFormat){
_51c=new Date(_51c);
}
var _51f=this.dateFormat?this.dateFormat:"m/d/y";
return _51c?_51c.dateFormat(_51f):"";
};
$G.convertDate=function(_520,p,_522){
if(_520&&!_520.dateFormat){
_520=new Date(_520);
}
var _523=this.dateFormat?this.dateFormat:"m/d/y";
return _520;
};
$G.ExtProxy=function(_524,_525){
this.api={load:true,create:undefined,save:undefined,destroy:undefined};
$G.ExtProxy.superclass.constructor.call(this);
this.bindHandler=_524;
this.errorHandler=_525;
};
Ext.extend($G.ExtProxy,Ext.data.DataProxy,{_cf_firstLoad:true,load:function(_526,_527,_528,_529,arg){
if(!this._cf_actions.bindOnLoad){
var _52b={"_cf_reader":_527,"_cf_grid_errorhandler":this.errorHandler,"_cf_scope":_529,"_cf_gridDataProxy":this,"_cf_gridname":this._cf_gridName,"_cf_arg":arg,"_cf_callback":_528,"ignoreData":true};
var data=[];
for(i=0;i<_526.limit;i++){
data.push(new Ext.data.Record({}));
}
this.loadResponse(data,_52b);
this._cf_actions.bindOnLoad=true;
}else{
var _52d=(_526.start/_526.limit)+1;
if(!_526.sort){
_526.sort="";
}
if(!_526.dir){
_526.dir="";
}
this.bindHandler(this,_52d,_526.limit,_526.sort,_526.dir,this.errorHandler,_528,_529,arg,_527);
}
},loadResponse:function(data,_52f){
var _530=null;
if(_52f.ignoreData){
_530={success:true,records:data,totalRecords:data.length};
}else{
var _531;
if(!data){
_531="grid.extproxy.loadresponse.emptyresponse";
}else{
if(!data.TOTALROWCOUNT&&data.TOTALROWCOUNT!=0){
_531="grid.extproxy.loadresponse.totalrowcountmissing";
}else{
if(!ColdFusion.Util.isInteger(data.TOTALROWCOUNT)){
_531="grid.extproxy.loadresponse.totalrowcountinvalid";
}else{
if(!data.QUERY){
_531="grid.extproxy.loadresponse.querymissing";
}else{
if(!data.QUERY.COLUMNS||!ColdFusion.Util.isArray(data.QUERY.COLUMNS)||!data.QUERY.DATA||!ColdFusion.Util.isArray(data.QUERY.DATA)||(data.QUERY.DATA.length>0&&!ColdFusion.Util.isArray(data.QUERY.DATA[0]))){
_531="grid.extproxy.loadresponse.queryinvalid";
}
}
}
}
}
if(_531){
ColdFusion.handleError(_52f._cf_grid_errorHandler,_531,"widget");
this.fireEvent("loadexception",this,_52f,data,e);
return;
}
_530=_52f._cf_reader.readRecords(data);
}
this.fireEvent("load",this,_52f,_52f._cf_arg);
_52f._cf_callback.call(_52f._cf_scope,_530,_52f._cf_arg,true);
},update:function(_532){
},updateResponse:function(_533){
}});
$G.ExtReader=function(_534){
this.recordType=Ext.data.Record.create(_534);
};
Ext.extend($G.ExtReader,Ext.data.DataReader,{readRecords:function(_535){
var _536=[];
var cols=_535.QUERY.COLUMNS;
var data=_535.QUERY.DATA;
for(var i=0;i<data.length;i++){
var _53a={};
for(var j=0;j<cols.length;j++){
_53a[cols[j]]=data[i][j];
}
_536.push(new Ext.data.Record(_53a));
}
return {success:true,records:_536,totalRecords:_535.TOTALROWCOUNT};
}});
$G.CheckColumn=function(_53c){
Ext.apply(this,_53c);
if(!this.id){
this.id=Ext.id();
}
this.renderer=this.renderer.createDelegate(this);
};
$G.CheckColumn.prototype={init:function(grid){
this.grid=grid;
this.count=0;
this.columnIndex=this.grid.getColumnModel().findColumnIndex(this.dataIndex);
this.grid.on("render",function(){
var view=this.grid.getView();
if(this.editable==true){
view.mainBody.on("mousedown",this.onMouseDown,this);
}
},this);
},onMouseDown:function(e,t){
if(t.className&&t.className.indexOf("x-grid3-cc-"+this.id)!=-1){
e.stopEvent();
var _541=this.grid.getView().findRowIndex(t);
var _542=this.grid.store.getAt(_541);
var _543=ColdFusion.clone(_542);
_543.data=ColdFusion.clone(_542.data);
this.grid.getSelectionModel().selectRow(_541);
this.grid.getSelectionModel().fireEvent("rowselect",this.grid.getSelectionModel(),_541);
this.grid.fireEvent("beforeedit",{grid:this.grid,row:_541,record:_542,column:this.columnIndex,field:this.dataIndex,value:_542.data[this.dataIndex]});
_542.set(this.dataIndex,this.toggleBooleanValue(_542.data[this.dataIndex]));
this.grid.fireEvent("afteredit",{grid:this.grid,row:_541,record:_543,column:this.columnIndex,field:this.dataIndex,value:_542.data[this.dataIndex],originalValue:_543.data[this.dataIndex]});
}
},toggleBooleanValue:function(v){
v=typeof v=="undefined"?"N":(typeof v=="string"?v.toUpperCase():v);
if(v==="Y"){
return "N";
}
if(v==="N"){
return "Y";
}
if(v===true){
return false;
}
if(v===false){
return true;
}
if(v===0){
return 1;
}
if(v===1){
return 0;
}
if(v==="YES"){
return "NO";
}
if(v==="NO"){
return "YES";
}
if(v==="T"){
return "F";
}
if(v==="F"){
return "T";
}
return "Y";
},renderer:function(v,p,_547){
p.css+=" x-grid3-check-col-td";
var _548=false;
v=(typeof v=="string")?v.toUpperCase():v;
if(typeof v!="undefined"&&(v==1||v=="1"||v=="Y"||v=="YES"||v===true||v==="T")){
_548=true;
}
return "<div class=\"x-grid3-check-col"+(_548==true?"-on":"")+" x-grid3-cc-"+this.id+"\">&#160;</div>";
}};
};
cfinitgrid();
