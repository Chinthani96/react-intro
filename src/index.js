import React, { Component} from "react"
import { render } from "react-dom"

const Library = () => {
    return(
        <div>Hey this is the Library!</div>
    )
}

render(
    <Library />,
    document.getElementById("root")
)
