import React, {Component} from 'react'
import TWAppBar from './components/AppBar/TWAppBar'
import FormContainer from './Container/FormContainer1'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePageContainer from './Container/HomePageContainer'
import HomePageTableContainer from './Container/HomePageTableContainer'

function App6()  {
    return(
        <div>
            <BrowserRouter>
                <Switch> 
                    <Route path = "/login">
                        <TWAppBar/>
                        <FormContainer/>
                    </Route>
                    <Route path = "/homepage">
                        <TWAppBar/>
                        <HomePageContainer/>
                        <HomePageTableContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
            
        </div>
        
    )
 
}

export default App6