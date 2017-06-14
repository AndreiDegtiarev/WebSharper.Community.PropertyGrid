namespace WebSharper.Community.PropertyGrid

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html


[<JavaScript>]
type IProperty =
        abstract member Name : string
        abstract member Render : Elt

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
type IChoiceProperty =
    inherit IProperty
        abstract member Choice : List<string>

[<JavaScript>]
module Parameters = 

    let string name var = {new IProperty with 
                                                override x.Name = name
                                                override x.Render = Doc.Input [] var
                                         }
    let double name var = {new IProperty with 
                                                 override x.Name = name
                                                 override x.Render = Doc.FloatInputUnchecked [] var
                                         }
    let select name selections var= {new IProperty with 
                                                 override x.Name = name
                                                 override x.Render = Doc.Select [Attr.Create "class" "form-control"] (fun str -> str) selections var
                                         }

