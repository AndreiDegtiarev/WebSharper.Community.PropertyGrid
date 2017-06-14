(function()
{
 "use strict";
 var Global,WebSharper,Community,PropertyGrid,Test,Client,SC$1,UI,Next,Doc,IntelliFactory,Runtime,Var,List,Parameters,PropertyGrid$1;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 PropertyGrid=Community.PropertyGrid=Community.PropertyGrid||{};
 Test=PropertyGrid.Test=PropertyGrid.Test||{};
 Client=Test.Client=Test.Client||{};
 SC$1=Global.StartupCode$WebSharper_Community_PropertyGrid_Test$Client=Global.StartupCode$WebSharper_Community_PropertyGrid_Test$Client||{};
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Doc=Next&&Next.Doc;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Var=Next&&Next.Var;
 List=WebSharper&&WebSharper.List;
 Parameters=PropertyGrid&&PropertyGrid.Parameters;
 PropertyGrid$1=PropertyGrid&&PropertyGrid.PropertyGrid;
 Client.Main=function()
 {
  var a;
  a=[Client.propertyGrid().get_Render()];
  return Doc.Element("div",[],a);
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
  SC$1.props=List.ofArray([Parameters.string("string_ex",Client.strVar()),Parameters["double"]("double_ex",Client.dblVar()),Parameters.selection("selection_ex",List.ofArray(["bla1","bla2","bla3"]),Client.selVar())]);
  SC$1.propertyGrid=PropertyGrid$1.get_Create();
  Client.propertyGrid().Edit(Client.props());
  SC$1.$cctor=Global.ignore;
 });
}());
