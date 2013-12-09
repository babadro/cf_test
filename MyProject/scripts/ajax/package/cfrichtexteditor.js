/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.RichText){
ColdFusion.RichText={};
}
ColdFusion.RichText.editorState={};
ColdFusion.RichText.buffer=null;
ColdFusion.RichText.initialize=function(id,name,_5f2,_5f3,_5f4,_5f5,_5f6,_5f7,_5f8,skin,_5fa,_5fb,_5fc,_5fd,_5fe){
var _5ff=new FCKeditor(id);
ColdFusion.RichText.editorState[id]=false;
_5ff.Value=_5f2;
_5ff.richtextid=id;
if(_5f3!=null){
_5ff.BasePath=_5f3;
}
if(_5f4!=null){
_5ff.Width=_5f4;
}
if(_5f5!=null){
_5ff.Height=_5f5;
}
if(_5f6!=null){
_5ff.Config.FontNames=_5f6;
}
if(_5f7!=null){
_5ff.Config.FontSizes=_5f7;
}
if(_5f8!=null){
_5ff.Config.FontFormats=_5f8;
}
_5ff.Config.LinkBrowserURL=_5ff.BasePath+"editor/filemanager/browser/default/browser.html?Connector=../../connectors/cfm/connector.cfm";
_5ff.Config.LinkUploadURL=_5ff.BasePath+"editor/filemanager/connectors/cfm/upload.cfm";
_5ff.Config.ImageBrowserURL=_5ff.BasePath+"editor/filemanager/browser/default/browser.html?Type=Image&Connector=../../connectors/cfm/connector.cfm";
_5ff.Config.ImageUploadURL=_5ff.BasePath+"editor/filemanager/connectors/cfm/upload.cfm?Type=Image";
_5ff.Config.FlashBrowserURL=_5ff.BasePath+"editor/filemanager/browser/default/browser.html?Type=Flash&Connector=../../connectors/cfm/connector.cfm";
_5ff.Config.FlashUploadURL=_5ff.BasePath+"editor/filemanager/connectors/cfm/upload.cfm?Type=Flash";
if(window._cf_clientid){
_5ff.Config.LinkBrowserURL=_5ff.Config.LinkBrowserURL+"&_cf_clientid="+_cf_clientid;
_5ff.Config.LinkUploadURL=_5ff.Config.LinkUploadURL+"?_cf_clientid="+_cf_clientid;
_5ff.Config.ImageBrowserURL=_5ff.Config.ImageBrowserURL+"&_cf_clientid="+_cf_clientid;
_5ff.Config.ImageUploadURL=_5ff.Config.ImageUploadURL+"&_cf_clientid="+_cf_clientid;
_5ff.Config.FlashBrowserURL=_5ff.Config.FlashBrowserURL+"&_cf_clientid="+_cf_clientid;
_5ff.Config.FlashUploadURL=_5ff.Config.FlashUploadURL+"&_cf_clientid="+_cf_clientid;
}
if(skin!=null){
var _600=_5ff.BasePath+"editor/skins/"+skin+"/";
_5ff.Config.SkinPath=_600;
}
if(_5fa==true){
_5ff.Config.ToolbarStartExpanded=false;
_5ff.Config.Toolbaronfocus=true;
}
if(_5fb!=null){
_5ff.ToolbarSet=_5fb;
}
if(_5fc!=null){
_5ff.Config.StylesXmlPath=_5fc;
}
if(_5fd!=null){
_5ff.Config.TemplatesXmlPath=_5fd;
}
_5ff.Config.AutoDetectLanguage=false;
if(_5fe!=null){
_5ff.Config.DefaultLanguage=_5fe;
}
_5ff.ReplaceTextarea();
var _601=function(_602){
ColdFusion.RichText.setValue(id,_602);
};
_5ff._cf_setValue=_601;
var _603=function(){
if(ColdFusion.RichText.editorState[id]){
var _604=FCKeditorAPI.GetInstance(id);
return _604.GetXHTML();
}else{
ColdFusion.Log.error("richtext.initialize.getvalue.notready","widget",[id]);
return null;
}
};
_5ff._cf_getAttribute=_603;
var _605=function(_606,_607,_608){
var _609=document.getElementById(id);
if(_609){
ColdFusion.Event.addListener(_609,_606,_607,_608);
}
};
_5ff._cf_register=_605;
_5ff._cf_name=name;
ColdFusion.objectCache[name]=_5ff;
ColdFusion.objectCache[id]=_5ff;
ColdFusion.RichText.registerAfterSet(id);
ColdFusion.Log.info("richtext.initialize.success","widget",[name]);
};
ColdFusion.RichText.editor_onfocus=function(_60a){
_60a.ToolbarSet.Expand();
};
ColdFusion.RichText.editor_onblur=function(_60b){
_60b.ToolbarSet.Collapse();
};
ColdFusion.RichText.setChangeBuffer=function(_60c){
ColdFusion.RichText.buffer=FCKeditorAPI.GetInstance(_60c.Name).GetXHTML();
};
ColdFusion.RichText.resetChangeBuffer=function(_60d){
if(ColdFusion.RichText.buffer!=FCKeditorAPI.GetInstance(_60d.Name).GetXHTML()){
ColdFusion.RichText.fireChangeEvent(_60d.Name);
}
ColdFusion.RichText.buffer=null;
};
ColdFusion.RichText.registerAfterSet=function(_60e){
if(ColdFusion.RichText.editorState[_60e]){
var _60f=function(){
ColdFusion.RichText.fireChangeEvent(_60e);
};
var _610=FCKeditorAPI.GetInstance(_60e);
_610.Events.AttachEvent("OnAfterSetHTML",_60f);
}else{
setTimeout("ColdFusion.RichText.registerAfterSet('"+_60e+"')",1000);
}
};
ColdFusion.RichText.getEditorObject=function(_611){
if(!_611){
ColdFusion.handleError(null,"richtext.geteditorobject.missingtextareaname","widget",null,null,null,true);
return;
}
var _612=ColdFusion.objectCache[_611];
if(_612==null||FCKeditor.prototype.isPrototypeOf(_612)==false){
ColdFusion.handleError(null,"richtext.geteditorobject.notfound","widget",[_611],null,null,true);
return;
}
return FCKeditorAPI.GetInstance(_612.richtextid);
};
ColdFusion.RichText.setValue=function(_613,_614){
if(ColdFusion.RichText.editorState[_613]){
var _615=FCKeditorAPI.GetInstance(_613);
_615.SetHTML(_614);
}else{
setTimeout("ColdFusion.RichText.setValue(\""+_613+"\",\""+_614+"\")",1000);
}
};
ColdFusion.RichText.fireChangeEvent=function(_616){
var _617=ColdFusion.objectCache[_616];
ColdFusion.Log.info("richtext.firechangeevent.firechange","widget",[_617._cf_name]);
var _618=document.getElementById(_616);
if(_618){
if(_618.fireEvent){
_618.fireEvent("onchange");
}
if(document.createEvent){
var evt=document.createEvent("HTMLEvents");
if(evt.initEvent){
evt.initEvent("change",true,true);
}
if(_618.dispatchEvent){
_618.dispatchEvent(evt);
}
}
}
ColdFusion.Event.callBindHandlers(_616,null,"change");
};
function FCKeditor_OnComplete(_61a){
if(_61a.Config.Toolbaronfocus){
_61a.Events.AttachEvent("OnBlur",ColdFusion.RichText.editor_onblur);
_61a.Events.AttachEvent("OnFocus",ColdFusion.RichText.editor_onfocus);
}
_61a.Events.AttachEvent("OnFocus",ColdFusion.RichText.setChangeBuffer);
_61a.Events.AttachEvent("OnBlur",ColdFusion.RichText.resetChangeBuffer);
ColdFusion.RichText.editorState[_61a.Name]=true;
if(ColdFusion.RichText.OnComplete){
ColdFusion.RichText.OnComplete(_61a);
}
}
