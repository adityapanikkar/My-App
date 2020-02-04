import React, {Component} from 'react'
import TWAppBar from './components/AppBar/TWAppBar'

class App5 extends Component{
    constructor(){
        super()
        this.state = {
            loading:false,
            character:{}
        }
    }

    componentDidMount(){
        this.setState({
            loading:true
        })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading:false,
                    character:data
                })
                console.log(data)
            })
    }

    render(){
        const status = this.state.loading?"Loading Data":this.state.character.name
        return(
            <div>
                 <TWAppBar></TWAppBar>
                <p>{status}</p>
            </div>
        )
    }
}

export default App5