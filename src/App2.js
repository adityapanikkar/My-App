import React, {Component} from 'react'


class App2 extends Component{
    constructor(){
        super()
        this.state={
            name:"Adi",
            project:"Track",
            loggedIn:true
        }
    }
    render(){
        let status
        if(this.state.loggedIn){
            status="In"
        }
        else{
            status="Out"
        }
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.project}</h1>
                <h1>Logged {status}</h1>
            </div>

        )
    }
}

export default App2