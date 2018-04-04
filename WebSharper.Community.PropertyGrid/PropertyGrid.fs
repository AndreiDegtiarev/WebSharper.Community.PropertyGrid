namespace WebSharper.Community.PropertyGrid

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html

[<JavaScript>]
type PropertyGrid =
    {
        Properties:ListModel<Key,PropertyItem>
    }
    static member Create =
        {
            Properties =  ListModel.Create (fun item ->item.Key) []
        }
    member x.Edit properties =
        x.Properties.Clear()
        x.Properties.AppendMany (properties |> List.map (PropertyItem.Create))
    member x.Render =
       let renderItem (item:PropertyItem)=
           if item.Property :? IGroupProperty then
               tr[] 
                [
                       td[Attr.Class "td-group"
                          Html.attr.colspan "2"
                         ][item.Property.Render]
                ]    
           else
               tr[]
                [
                  td [Attr.Class "td-no-group"] [text item.Property.Name]
                  td [Attr.Class "td-no-group"] [( item.Property.Render)]        
                ]
       div [Attr.Class "propertyGrid"]
           [
             table[]
              [
                ListModel.View x.Properties
                |> Doc.BindSeqCachedBy (fun m -> m.Key) renderItem
              ] 
           ]
    