import React from 'react'
import { Button, TextField } from '@material-ui/core'

function FormComponent(props){
    return(
        <div>        
            <form>  
                <input 
                    value={props.data.firstName}
                    name="firstName"
                    type = "text" 
                    placeholder = "Username" 
                    onChange={props.handleChange}
                    />
                <br/>
                <input 
                    value={props.data.lastName}
                    name="lastName"
                    type = "text" 
                    placeholder = "Password" 
                    onChange={props.handleChange}
                    />
                <h3>{props.data.firstName} {props.data.lastName}</h3>
                <div className = 'button'>
                <Button variant = "outlined" onClick = {props.handleSubmit}>
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
                <h3>You are a {props.data.gender}</h3>
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
                    <h3>Fav Colour is {props.data.favColour}</h3>
            </form>
        </div>
    )
}

export default FormComponent
