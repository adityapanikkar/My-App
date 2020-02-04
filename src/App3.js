import React, {Component} from 'react'

class App3 extends Component{
    render(){
        return (
            <div>
                <button onClick={() => console.log("Clicked")} onMouseOver={() => console.log("Hovered")}>Click</button>
            </div>

        )
    }
}

export default App3