import React from 'react'

function Team(props){
    return(
        <div>
            <h3>name:{props.name} Members:{props.members}</h3>
        </div>
    )
}

export default Team