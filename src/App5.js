import React, {Component} from 'react'
import TWAppBar from './components/AppBar/TWAppBar'

class App5 extends Component{
    constructor(){
        super()
        this.state = {
            loading:false,
            character:{ }
        }
    }

    async componentDidMount(){
        this.setState({
            loading:true
        })
            const response = await fetch("https://swapi.co/api/people/1")
            const json = await response.json()

                this.setState({
                    loading:false,
                    character:json
                })
                console.log(json)
            
    }

    render(){
        const status = this.state.loading?"Loading-Data":this.state.character.name
        return(
            <div>
                 <TWAppBar></TWAppBar>
                <p>{status}</p>
            </div>
        )
    }
}

export default App5