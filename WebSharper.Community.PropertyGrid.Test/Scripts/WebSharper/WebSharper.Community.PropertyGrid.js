(function()
{
 "use strict";
 var Global,WebSharper,Community,PropertyGrid,PropertyItem,Parameters,Order,SC$1,PropertyGrid$1,UI,Next,Key,AttrProxy,Doc,IntelliFactory,Runtime,Var,AttrModule,List,ListModel;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Community=WebSharper.Community=WebSharper.Community||{};
 PropertyGrid=Community.PropertyGrid=Community.PropertyGrid||{};
 PropertyItem=PropertyGrid.PropertyItem=PropertyGrid.PropertyItem||{};
 Parameters=PropertyGrid.Parameters=PropertyGrid.Parameters||{};
 Order=Parameters.Order=Parameters.Order||{};
 SC$1=Global.StartupCode$WebSharper_Community_PropertyGrid$Properties=Global.StartupCode$WebSharper_Community_PropertyGrid$Properties||{};
 PropertyGrid$1=PropertyGrid.PropertyGrid=PropertyGrid.PropertyGrid||{};
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Key=Next&&Next.Key;
 AttrProxy=Next&&Next.AttrProxy;
 Doc=Next&&Next.Doc;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Var=Next&&Next.Var;
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
 Order.Show=function(order)
 {
  return order.$==1?"Newest":"Alphabetical";
 };
 Parameters.selection=function(name,selections,_var)
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
 Parameters.order=function()
 {
  SC$1.$cctor();
  return SC$1.order;
 };
 Parameters["double"]=function(name,_var)
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
 Parameters.string=function(name,_var)
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
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.order=Var.Create$1({
   $:1
  });
  SC$1.$cctor=Global.ignore;
 });
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
 PropertyGrid$1.New=function(Properties)
 {
  return new PropertyGrid$1({
   Properties:Properties
  });
 };
}());
