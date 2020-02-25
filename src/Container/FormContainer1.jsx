import React, {Component, useState} from 'react'
import FormComponent from '../components/FormComponent/FormComponent'
import {useHistory} from 'react-router-dom'


function FormContainer() {
    const history = useHistory()

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [gender, setgender] = useState("male")
    const [favColour, setfavColour] = useState("")


    const handleChange = (event) =>{

        switch(event.target.name){
            case "firstName":
                return setfirstName(event.target.value);
            case "lastName":
                return setlastName(event.target.value);
            case "gender":
                return setgender(event.target.value);
            case  "favColour":
                return setfavColour(event.target.value);
        }
        
        
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
                data={{firstName,lastName,gender,favColour}}
                //firstName={firstName}
                //lastName={lastName}
                //gender={gender}
                //favColour={favColour}
                handleSubmit={handleSubmit}
            />
            </div>
            
        )

}

export default FormContainer
