namespace WebSharper.Community.PropertyGrid

open WebSharper
open WebSharper.Core.Resources

[<JavaScript>]
module Resources =
    [<assembly: System.Web.UI.WebResource("PropertyGrid.css", "text/css")>]
    do()
    type StyleResource() =
        inherit BaseResource("PropertyGrid.css")