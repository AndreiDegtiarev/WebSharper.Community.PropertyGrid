(function()
{
 "use strict";
 var WebSharper,Community,PropertyGrid,Test,Client,SC$1,UI,Next,Doc,IntelliFactory,Runtime,Var,List,Properties,PropertyGrid$1;
 WebSharper=window.WebSharper=window.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 PropertyGrid=Community.PropertyGrid=Community.PropertyGrid||{};
 Test=PropertyGrid.Test=PropertyGrid.Test||{};
 Client=Test.Client=Test.Client||{};
 SC$1=window.StartupCode$WebSharper_Community_PropertyGrid_Test$Client=window.StartupCode$WebSharper_Community_PropertyGrid_Test$Client||{};
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Doc=Next&&Next.Doc;
 IntelliFactory=window.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Var=Next&&Next.Var;
 List=WebSharper&&WebSharper.List;
 Properties=PropertyGrid&&PropertyGrid.Properties;
 PropertyGrid$1=PropertyGrid&&PropertyGrid.PropertyGrid;
 Client.Main=function()
 {
  return Doc.Element("div",[],[Client.propertyGrid().get_Render()]);
 };
 Client.propertyGrid=function()
 {
  SC$1.$cctor();
  return SC$1.propertyGrid;
 };
 Client.props=function()
 {
  SC$1.$cctor();
  return SC$1.props;
 };
 Client.chkBoxVar=function()
 {
  SC$1.$cctor();
  return SC$1.chkBoxVar;
 };
 Client.selVar=function()
 {
  SC$1.$cctor();
  return SC$1.selVar;
 };
 Client.dblVar=function()
 {
  SC$1.$cctor();
  return SC$1.dblVar;
 };
 Client.strVar=function()
 {
  SC$1.$cctor();
  return SC$1.strVar;
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.strVar=Var.Create$1("my_string");
  SC$1.dblVar=Var.Create$1(123.456);
  SC$1.selVar=Var.Create$1("bla2");
  SC$1.chkBoxVar=Var.Create$1(true);
  SC$1.props=List.ofArray([Properties.group("Settings"),Properties.string("string_ex",Client.strVar()),Properties["double"]("double_ex",Client.dblVar()),Properties.select("selection_ex",window.id,List.ofArray(["bla1","bla2","bla3"]),Client.selVar()),Properties.group("Plugins"),Properties.string("string_ex",Client.strVar()),Properties["double"]("double_ex",Client.dblVar()),Properties.check("Temperature",Client.chkBoxVar()),Properties.group("Advanced Settings"),Properties.string("string_ex",Client.strVar()),Properties["double"]("double_ex",Client.dblVar())]);
  SC$1.propertyGrid=PropertyGrid$1.get_Create();
  Client.propertyGrid().Edit(Client.props());
  SC$1.$cctor=window.ignore;
 });
}());
