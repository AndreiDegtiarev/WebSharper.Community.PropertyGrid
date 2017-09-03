namespace WebSharper.Community.PropertyGrid

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html


[<JavaScript>]
type IProperty =
        abstract member Name : string
        abstract member Render : Doc
      

[<JavaScript>]
type PropertyItem =
    { 
         Key:Key
         Property:IProperty
    }
    static member Create param=
        {
            Key = Key.Fresh()
            Property = param
        }

[<JavaScript>]
type IValueProperty<'T> =
    inherit IProperty
        abstract member Variable : IRef<'T> 

[<JavaScript>]
type IGroupProperty(name) =
    interface IProperty with
        override x.Name = name
        override x.Render = Doc.TextNode name

[<JavaScript>]
module Properties = 

    let string name var = {new IProperty with 
                                                override x.Name = name
                                                override x.Render = Doc.Input [] var :>Doc
                                             
                                         }
    let double name var = {new IProperty with 
                                                 override x.Name = name
                                                 override x.Render = Doc.FloatInputUnchecked [] var :>Doc
                                               
                                         }
    let select name fncCnv selections var= {new IProperty with 
                                                 override x.Name = name
                                                 override x.Render = Doc.Select [Attr.Class "td-no-group"] fncCnv selections var  :>Doc
                                         }
    let check name var= {new IProperty with 
                                            override x.Name = name
                                            override x.Render = Doc.CheckBox [Attr.Class "form-control"] var  :>Doc
                                         }
    let group name = IGroupProperty(name) :> IProperty
