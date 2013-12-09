/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Menu){
ColdFusion.Menu={};
}
ColdFusion.Menu.menuItemMouseOver=function(id,_3f5){
var _3f6=document.getElementById(id);
_3f6.tempfontcolor=_3f6.firstChild.style.color;
if(_3f5){
_3f6.firstChild.style.color=_3f5;
}
};
ColdFusion.Menu.menuItemMouseOut=function(id){
var _3f8=document.getElementById(id);
if(_3f8.tempfontcolor){
_3f8.firstChild.style.color=_3f8.tempfontcolor;
}else{
_3f8.firstChild.style.color="black";
}
};
ColdFusion.Menu.initMenu=function(_3f9,_3fa){
return new YAHOO.widget.Menu(_3f9,_3fa);
};
ColdFusion.Menu.initMenuBar=function(_3fb,_3fc){
return new YAHOO.widget.MenuBar(_3fb,_3fc);
};
