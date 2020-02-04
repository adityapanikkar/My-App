import React, {Component} from 'react'
import FormComponent from '../components/FormComponent'
import TWAppBar from '../components/AppBar/TWAppBar'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            gender:"",
            favColour:"blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
        [event.target.name]:event.target.value
    })

    }

    render() {
        return(
            <div>
                <TWAppBar></TWAppBar>
                <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
            </div>
            
        )
    }
}
export default Form