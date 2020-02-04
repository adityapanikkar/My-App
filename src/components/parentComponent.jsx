import React, { Component } from 'react';
import FirstChild from './firstChildComponent';


class ParentComponent extends Component {
    render(){
        return (
        <div>
            <h1>Parent Component.</h1>
            <h3><FirstChild text = {"1st child"}/></h3>
            <h3><FirstChild text = {"2nd child"}/></h3>
            <h3><FirstChild text = {"3rd child"}/></h3>
        </div> 
        );
    }
}

export default ParentComponent;