import React, { Component} from "react"
import { render } from "react-dom"

let skiData = {
    total: 10,
    powder: 5,
    backCountry: 2,
    goal: 100
}

//functional component
const SkiDataCounter = (props) => {
    return (
        <section>
            <div>
                <p>Total days: {props.total}</p>
            </div>
            <div>
                <p>Powder days: {props.powder}</p>
            </div>
            <div>
                <p>Back Country days: {props.backCountry}</p>
            </div>
            <div>
                <p>Goals: {props.goal}</p>
            </div>
        </section>
    )
}

render(
    <SkiDataCounter
        total={skiData.total}
        powder={skiData.powder}
        backCountry={skiData.backCountry}
        goal={skiData.goal}
    />,
    document.getElementById("root")
)
