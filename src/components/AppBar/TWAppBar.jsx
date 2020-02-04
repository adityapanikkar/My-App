import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import './twAppBar.css';

export class TWAppBar extends Component {
    render() {
        /** ES6 synxtax to generate simple component for the actual AlertsButton icon */
        const AlertsButton = (props) => (
            <svg width="36px" height="36px" viewBox="0 0 20 21" >
                <g id="Icons" stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
                    <path d="M9.2143,15.187 L9.2143,15.287 C9.2143,15.89 9.7043,16.38 10.3073,16.38 C10.9113,16.38 11.4013,15.89 11.4013,15.287 L11.4013,15.287 L11.4013,15.187 L12.5563,15.187 L12.5563,15.287 C12.5563,16.527 11.5473,17.535 10.3073,17.535 C9.0673,17.535 8.0593,16.527 8.0593,15.287 L8.0593,15.287 L8.0593,15.187 L9.2143,15.187 Z M10.307,4 C12.995,4 15.182,6.187 15.182,8.875 L15.182,8.875 L15.182,11.643 C15.981,11.694 16.615,12.361 16.615,13.172 C16.615,14.017 15.926,14.705 15.079,14.705 L15.079,14.705 L5.535,14.705 C4.689,14.705 4,14.017 4,13.172 C4,12.357 4.641,11.688 5.445,11.642 C5.433,11.449 5.433,11.065 5.433,10.307 L5.433,10.307 L5.433,8.875 C5.433,6.187 7.619,4 10.307,4 Z M10.307,5.155 C8.257,5.155 6.588,6.824 6.588,8.875 L6.588,8.875 L6.588,11.74 C6.588,12.321 6.115,12.794 5.534,12.794 C5.325,12.794 5.156,12.964 5.156,13.172 C5.156,13.38 5.326,13.55 5.536,13.55 L5.536,13.55 L15.08,13.55 C15.289,13.55 15.46,13.38 15.46,13.172 C15.46,12.964 15.29,12.794 15.081,12.794 C14.5,12.794 14.027,12.321 14.027,11.74 L14.027,11.74 L14.027,8.875 C14.027,6.824 12.359,5.155 10.307,5.155 Z" id="Combined-Shape"></path>
                </g>
            </svg>
        )
        
        /** ES6 synxtax to generate simple component for the actual UserIcon icon */
        const UserIcon = (props) => (
            <svg width="36px" height="36px" viewBox="0 0 20 21">
                <g id="Icons" stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
                    <path d="M12.9845262,11.2724 C14.0005262,11.2724 14.8515262,12.9184 15.0325262,14.2154 L15.0325262,14.2154 L15.2735262,16.2444 C15.3325262,16.7514 14.9725262,17.1934 14.4905262,17.1934 L14.4905262,17.1934 L5.78952621,17.1934 C5.30752621,17.1934 4.94652621,16.7514 5.00652621,16.2444 L5.00652621,16.2444 L5.24752621,14.2484 C5.39852621,12.9504 6.00052621,11.2724 7.26452621,11.2724 C8.07752621,11.9054 9.04052621,12.1524 10.1245262,12.1524 C11.2085262,12.1524 12.1725262,11.9054 12.9845262,11.2724 Z M7.09252621,12.7184 C6.90352621,12.9684 6.63952621,13.5354 6.53952621,14.3974 L6.53952621,14.3974 L6.35852621,15.8944 L13.9225262,15.8944 L13.7415262,14.3694 C13.6475262,13.6944 13.3345262,13.0724 13.0885262,12.7574 C12.2415262,13.2244 11.2645262,13.4534 10.1245262,13.4534 C8.95452621,13.4534 7.95552621,13.2114 7.09252621,12.7184 Z M10.1326262,3 C12.3416262,3 14.1326262,4.791 14.1326262,7 C14.1326262,9.209 12.3416262,11 10.1326262,11 C7.92462621,11 6.13262621,9.209 6.13262621,7 C6.13262621,4.791 7.92462621,3 10.1326262,3 Z M10.1326262,4.3 C8.64362621,4.3 7.43262621,5.511 7.43262621,7 C7.43262621,8.489 8.64362621,9.7 10.1326262,9.7 C11.6216262,9.7 12.8336262,8.489 12.8336262,7 C12.8336262,5.511 11.6216262,4.3 10.1326262,4.3 Z" id="Combined-Shape"></path>
                </g>
            </svg>
        )
        
        /**
         * When the component render function is called,
         * this ES6 function returns either an empty string
         * or "none", for displaying the buttons on the App bar.
         * If the authenticated prop passed to TWAppBar is true,
         * then display the buttons, otherwise do not display them.
         * @returns {string} An empty string if authenticated, "none" if not authenticated
         */
        const displayButtons = () => {
            if (this.props.authenticated) {
                return "";
            }
            return "none";
        }

        return (
            <>
                <AppBar elevation = {2} position = "static" style = {{background: "#555de9"}}>
                    <Toolbar>
                        <div className = 'appBarContent'>
                            <div style = {{visibility: this.props.barContentVisibility}} className = 'appBarTextAndIcons'>
                                
                                <div className = 'appBarText'>
                                    <h3 className = 'appBarTextTag'>TradeWindow</h3>
                                </div>
                                <div style = {{display: displayButtons()}} className = 'appBarIcons'>
                                    <IconButton>
                                        <AlertsButton style = {{margin: 0, padding: 0}} fill = {"white"}/>
                                    </IconButton>
                                    <IconButton>
                                        <UserIcon style = {{margin: 0, padding: 0}} fill = {"white"}/>
                                    </IconButton>
                                </div>

                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

TWAppBar.propTypes = {
    authenticated: PropTypes.bool,
    barContentVisibility: PropTypes.string
}

export default TWAppBar