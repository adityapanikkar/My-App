import React from 'react'
import MaterialTable from "material-table";
import { Paper, Button } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function HomePageComponent(props){

    const theme = createMuiTheme({
        palette: {
          secondary: {
            main: '#555dea'
          }
        }
      });

    return(
        <div>
            Welcome to the HomePage
            <br/>
            <Button variant = "contained" style = {{fontWeight: 'bold', color: 'rgb(85, 93, 234)'}} onClick = {props.handleSubmit}>
                    Data </Button>
            <div>
            <span>
            <MuiThemeProvider theme={theme}>
                    <Paper elevation = {5} >
                        <div>
                            <MaterialTable
                                
                                title = 'UserData'
                                columns={[
                                { title: '', field: 'loggedIn', sorting: true, 
                                    headerStyle: style.loggedIn.headerStyle,
                                    cellStyle: style.loggedIn.cellStyle,
                                    customSort: (a, b) => b.criticality.props.id - a.criticality.props.id
                                },
                                { title: 'Username', field: 'userName', sorting: false, selection: true,
                                    headerStyle: style.userName.headerStyle,
                                    cellStyle: style.userName.cellStyle
                                },
                                { title: 'Gender', field: 'gender', sorting: false, selection: false,
                                    headerStyle: style.gender.headerStyle
                                },
                                { title: 'Favourite Colour', field: 'favColour', sorting: false, selection: false,
                                    headerStyle: style.favColour.headerStyle 
                                }
                                ]}

                                data={props.users}
                                

                                options={{
                                    toolbar: true,
                                    paging: true,
                                    sorting: true,
                                    selection: true,
                                    search: true,
                                    draggable: false,
                                    headerStyle: {borderBottom: "1.5px solid grey"}
                                }}
                            />
                        </div>
                    </Paper>
                </MuiThemeProvider>
                </span>
            </div>
            
        </div>
    )

}

const style = {
    userName: {
        headerStyle: {fontWeight: 'bold', paddingLeft: '2.25em', width: '15em'},
        cellStyle: {paddingLeft: '2.5em', width: '9.5em'}
    },
    gender: {
        headerStyle: {fontWeight: 'bold', paddingRight: '4em', width: '15em'},
        cellStyle: {}
    },
    favColour: {
        headerStyle: {fontWeight: 'bold', paddingRight: '15em', width: '15em'},
        cellStyle: {}
    },
    loggedIn: {
        headerStyle: {fontWeight: 'bold', paddingRight: '3em', paddingLeft: '2em', width: '0.25rem'},
        cellStyle: {paddingLeft: '2.5em'}
    }
}

export default HomePageComponent