(function()
{
 "use strict";
 var Global,WebSharper,Community,PropertyGrid,PropertyItem,Properties,PropertyGrid$1,UI,Next,Key,AttrProxy,Doc,IntelliFactory,Runtime,AttrModule,List,ListModel;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 PropertyGrid=Community.PropertyGrid=Community.PropertyGrid||{};
 PropertyItem=PropertyGrid.PropertyItem=PropertyGrid.PropertyItem||{};
 Properties=PropertyGrid.Properties=PropertyGrid.Properties||{};
 PropertyGrid$1=PropertyGrid.PropertyGrid=PropertyGrid.PropertyGrid||{};
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Key=Next&&Next.Key;
 AttrProxy=Next&&Next.AttrProxy;
 Doc=Next&&Next.Doc;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 AttrModule=Next&&Next.AttrModule;
 List=WebSharper&&WebSharper.List;
 ListModel=Next&&Next.ListModel;
 PropertyItem.Create=function(param)
 {
  return PropertyItem.New(Key.Fresh(),param);
 };
 PropertyItem.New=function(Key$1,Property)
 {
  return{
   Key:Key$1,
   Property:Property
  };
 };
 Properties.select=function(name,selections,_var)
 {
  return{
   WebSharper_Community_PropertyGrid_IProperty$get_Render:function()
   {
    var a;
    a=[AttrProxy.Create("class","form-control")];
    return Doc.Select(a,Global.id,selections,_var);
   },
   WebSharper_Community_PropertyGrid_IProperty$get_Name:function()
   {
    return name;
   }
  };
 };
 Properties["double"]=function(name,_var)
 {
  return{
   WebSharper_Community_PropertyGrid_IProperty$get_Render:function()
   {
    return Doc.FloatInputUnchecked([],_var);
   },
   WebSharper_Community_PropertyGrid_IProperty$get_Name:function()
   {
    return name;
   }
  };
 };
 Properties.string=function(name,_var)
 {
  return{
   WebSharper_Community_PropertyGrid_IProperty$get_Render:function()
   {
    return Doc.Input([],_var);
   },
   WebSharper_Community_PropertyGrid_IProperty$get_Name:function()
   {
    return name;
   }
  };
 };
 PropertyGrid$1=PropertyGrid.PropertyGrid=Runtime.Class({
  get_Render:function()
  {
   var renderItem,a,a$1,a$2;
   renderItem=function(item)
   {
    var a$3,a$4,a$5;
    a$3=[(a$4=[Doc.TextNode(item.Property.WebSharper_Community_PropertyGrid_IProperty$get_Name())],Doc.Element("td",[],a$4)),(a$5=[item.Property.WebSharper_Community_PropertyGrid_IProperty$get_Render()],Doc.Element("td",[],a$5))];
    return Doc.Element("tr",[],a$3);
   };
   a=[AttrModule.Class("propertyGrid")];
   a$1=[(a$2=function(m)
   {
    return m.Key;
   },function(a$3)
   {
    return Doc.ConvertBy(a$2,renderItem,a$3);
   }(this.Properties.v))];
   return Doc.Element("div",a,a$1);
  },
  Edit:function(properties)
  {
   this.Properties.Clear();
   this.Properties.AppendMany(List.map(PropertyItem.Create,properties));
  }
 },null,PropertyGrid$1);
 PropertyGrid$1.get_Create=function()
 {
  var a;
  return PropertyGrid$1.New((a=new List.T({
   $:0
  }),ListModel.Create(function(item)
  {
   return item.Key;
  },a)));
 };
 PropertyGrid$1.New=function(Properties$1)
 {
  return new PropertyGrid$1({
   Properties:Properties$1
  });
 };
}());
