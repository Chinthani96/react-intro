import React, { Component} from "react"
import { render } from "react-dom"

let skiData = {
    total: 10,
    powder: 5,
    backCountry: 2,
    goal: 100
}

//functional component with all the prop fields passed
const SkiDataCounter = ({total,powder,backCountry,goal}) => {
    return (
        <section>
            <div>
                <p>Total days: {total}</p>
            </div>
            <div>
                <p>Powder days: {powder}</p>
            </div>
            <div>
                <p>Back Country days: {backCountry}</p>
            </div>
            <div>
                <p>Goals: {goal}</p>
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
