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
    let chkBoxVar = Var.Create true
    let props =[
                    Properties.group "Settings"
                    Properties.string "string_ex" strVar
                    Properties.double "double_ex" dblVar
                    Properties.select "selection_ex" ["bla1";"bla2";"bla3"] selVar
                    Properties.group "Plugins"
                    Properties.string "string_ex" strVar
                    Properties.double "double_ex" dblVar
                    Properties.check "Temperature" chkBoxVar
                    Properties.group "Advanced Settings"
                    Properties.string "string_ex" strVar
                    Properties.double "double_ex" dblVar
                ]
    let propertyGrid = PropertyGrid.Create
    propertyGrid.Edit props
    let Main () =

        div [
            propertyGrid.Render
        ]
