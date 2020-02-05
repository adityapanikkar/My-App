import React, {Component} from 'react'
import HomePageComponent from '../components/HomePageComponent/HomePageComponent'


class HomePageContainer extends Component{

    constructor(){
        super()
        this.state={
            homePage:true
        }
    }


render(){
    return(
        <div>
            <HomePageComponent
                data={this.state}
            />
        </div>
    )
}



}

export default HomePageContainer