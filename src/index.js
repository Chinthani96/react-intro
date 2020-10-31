import React, {Component} from "react"
import {render} from "react-dom"

class ColorPicker extends Component{
    state = {
        value: ''
    }
    newColor = e =>
     this.setState({value: e.target.value})

    submit = e => {
        console.log("New Color: "+this.state.value)
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <label>Favorite color: </label>
                <input type="color" onChange={this.newColor}/>
                <button>Submit</button>
            </form>
        )
    }
}

render(
    <ColorPicker />,
    document.getElementById("root")
)
