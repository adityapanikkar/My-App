import React, {Component, useState} from 'react'
import FormComponent from '../components/FormComponent/FormComponent'
import {useHistory} from 'react-router-dom'


function FormContainer() {
    const history = useHistory()

    const [firstName, setfirstname] = useState("")
    const [lastName, setlastname] = useState("")
    const [gender, setgender] = useState("")
    const [favColour, setfavColour] = useState("")


    const handleChange = (event) =>{

        setfirstname(event.target.value)
        setlastname(event.target.value)
        setgender(event.target.value)
        setfavColour(event.target.value)
    }

    //     this.setState({
    //     [event.target.name]:event.target.value
    //     })
    // }
    
    const handleSubmit = () =>{
        history.push("/homepage")
    }
    // handleSubmit(){  
    //     history.push("/homepage")
    // }
        return(
            <div>
                <FormComponent
                handleChange={handleChange}
                data={firstName,lastName,gender,favColour}
                handleSubmit={handleSubmit}
            />
            </div>
            
        )

}

export default FormContainer
