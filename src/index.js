import React, { Component} from "react"
import { render } from "react-dom"

let skiData = {
    total: 10,
    powder: 5,
    backCountry: 2,
    goal: 100
}

class SkiDataCounter extends Component{
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calcGoalProgress = (total,goal) => {
        return this.getPercent(total/goal)
    }
    render(){
        // De-structuring to make the code more readable
        const {total,powder,backCountry,goal} = this.props
        return(
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
                </div><div>
                    <p>Goals progress: {this.calcGoalProgress(total,goal)}</p>
                </div>

            </section>
        )
    }
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
