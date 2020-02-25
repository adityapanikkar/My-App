import React, { Component, useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import HomePageComponent from '../components/HomePageComponent/HomePageComponent';

function HomePageTableContainer(){

    const[userdata,setuserData]=useState([])

    // createUserData = (userName, gender, favColour, loggedIn) => {
    //     return{userName, gender, favColour, loggedIn}
    // }

    const dot = (colour) => {
        if (colour === 1) { // colour is green
            return <FiberManualRecordIcon id = {1} style = {{width: '25%', color: 'rgb(54, 206, 76)'}}/>
        } else if (colour === 2) { // colour is yellow
            return <FiberManualRecordIcon id = {2} style = {{width: '25%', color: 'rgb(254, 192, 65)'}}/>
        } 
        // colour is red
        return <FiberManualRecordIcon id = {3} style = {{width: '25%', color: 'rgb(252, 88, 85)'}}/>
    }

    // const users = [
    //     createUserData('Adi', 'Male', 'Red', dot(1)),
    //     createUserData('Chester', 'Male', 'Orange', dot(3)),
    //     createUserData('TW Admin', 'Male', 'Blue', dot(1))
    // ]

return(
    <div>
    </div>
)

}

export default HomePageTableContainer