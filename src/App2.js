import React, {Component} from 'react'
import { Button } from '@material-ui/core'


class App2 extends Component{
    constructor(){
        super()
        this.state={
            name:"Adi",
            project:"Track",
            loggedIn:true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return{
                loggedIn:!prevState.loggedIn
            }
        })

    }
    render(){
        let status
        if(this.state.loggedIn){
            status="IN"
        }
        else{
            status="OUT"
        }
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.project}</h2>
                <h3>Logged {status}</h3>
                <Button style = {{fontWeight: 'bold', color: 'rgb(85, 93, 234)'}} onClick={this.handleClick}>LOG {status}</Button>
            </div>

        )
    }
}

export default App2