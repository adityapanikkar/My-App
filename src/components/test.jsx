import React, { Component } from 'react';

class Test extends Component{
    constructor(){
        this.state = {
            id:1,
            name:"adi"
        };
    }

    render(){
        return (
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
            </div>
        );
    }

}
export default Test;