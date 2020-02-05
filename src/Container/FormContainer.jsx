import React, {Component} from 'react'
import FormComponent from '../components/FormComponent/FormComponent'
import {useHistory} from 'react-router-dom'

const history = useHistory()
class FormContainer extends Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            gender:"",
            favColour:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
        [event.target.name]:event.target.value
        })
    }
    
    handleSubmit(){  
        history.push("/homepage")
    }


    render() {
        return(
            <div>
                <FormComponent
                handleChange={this.handleChange}
                data={this.state}
                handleSubmit={this.handleSubmit}
            />
            </div>
            
        )
    }
}

export default FormContainer
