import React from 'react'
import { Button, TextField } from '@material-ui/core'
import './FormComponent.css'

function FormComponent(props){
    return(
        <div className="Login-Page">        
            <form>  
                <input 
                    value={props.firstName}
                    name="firstName"
                    type = "text" 
                    placeholder = "Username" 
                    onChange={props.handleChange}
                    />
                <br/>
                <input 
                    value={props.lastName}
                    name="lastName"
                    type = "password" 
                    placeholder = "Password" 
                    onChange={props.handleChange}
                    />
                <div className = 'button'>
                <Button variant = "contained" style = {{fontWeight: 'bold', color: 'rgb(85, 93, 234)'}} onClick = {props.handleSubmit}>
                    LOGIN 
                </Button>
            </div>
                <br/>
                <TextField id="outlined-basic" label="Feedback" variant="outlined" />
                <br/>
                <label>
                    <input
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={props.data.gender === "male"} 
                        onChange={props.handleChange}
                    />
                </label>Male
                <br/>
                <label>
                    <input
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={props.data.gender === "female"} 
                        onChange={props.handleChange}
                    />
                </label>Female
                <br/>
                <br/>
                <label>Colour:</label>
                    <select 
                        value={props.data.favColour} 
                        onChange={props.handleChange} 
                        name="favColour">

                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="White">White</option>
                        <option value="Orange">Orange</option>
                    </select>
                    <p>{props.data.firstName} {props.data.lastName}</p>
                    <p>Fav Colour is {props.data.favColour}</p>
                    <p>You are a {props.data.gender}</p>
            </form>
        </div>
    )
}

export default FormComponent
