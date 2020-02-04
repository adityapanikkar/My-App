import React from 'react';

function ContactCard(props){
    console.log(props)
    return(
        <div>
            <h2>TW Track</h2>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.email}</p>
            <p>{props.contact.address}</p>
      </div>
    )
}

export default ContactCard