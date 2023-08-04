import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1", {
//   id: "test",
//   className: "sdfs" ,
//   key:"h1"
// }, "paarcel")
// const heading2 = React.createElement("h1", {
//   id: "test",
//   className: "sdfsd",
//   key:"h2"
// }, "hi gooys...........")
// const container = React.createElement("div", {
//   id: "container",
//   className: "sdfs"
// }, [heading, heading2])
 


// const containe = React.createElement("div", {
//   id: "container",
//   className: "sdfs"
// }, [React.createElement("h1", {
//   id: "test",
//   className: "sdfs",
//   key: "h1"
// }, "paarcel"), React.createElement("ul", {}, [React.createElement("li", {}, "About us"), React.createElement("li", {}, "secccc", React.createElement("li", {}, "secccc")]")])

const heading = React.createElement("h1",{},"hai")

const heading1 = <h1>haai</h1>


console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(container)  