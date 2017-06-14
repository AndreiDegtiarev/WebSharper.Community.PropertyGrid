namespace WebSharper.Community.PropertyGrid.Test

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html
open WebSharper.Community.PropertyGrid

[<JavaScript>]
module Client =

    let strVar=Var.Create "my_string"
    let dblVar=Var.Create 123.456
    let selVar = Var.Create "bla2"
    let props =[
                    Parameters.string "string_ex" strVar
                    Parameters.double "double_ex" dblVar
                    Parameters.select "selection_ex" ["bla1";"bla2";"bla3"] selVar
                ]
    let propertyGrid = PropertyGrid.Create
    propertyGrid.Edit props
    let Main () =

        div [
            propertyGrid.Render
        ]
