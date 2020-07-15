import React, { Component } from 'react';
import { Button } from '@material-ui/core'; 
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './Login.css';

class Login extends Component {
    render() {
        return(
            <div className="loginBackground" >
                <form  autoComplete="off">
                    <div className="loginField">
                        <Typography component="h1" variant="h4" color="white">
                            Sign in
                        </Typography>
                        <div className="tfcont">
                            <TextField className="textField"  label="Name" />
                        </div>
                        <div className="tfcont">
                            <TextField className="textField"  label="Login Token" />
                        </div>    
                            <Button className="Button" type="submit" variant="contained" color="primary" >Login</Button>
                        </div>
                    </form>
            </div>
        )
    }
}
export default Login