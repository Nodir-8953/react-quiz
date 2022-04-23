import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../components/ui/Button/Button'
import Input from '../../components/ui/Input/Input'
export default class Auth extends Component {
    submitHandler=event=>{
        event.preventDefault();
    }
    loginHandler(){

    }
    regiterHandler(){

    }
    render(){
        return ( 
            <div className={classes.Auth}>
                <div>
                    <h1>Autorization</h1>   

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input 
                            label='Email'
                        />
                        <Input 
                             label='Password'
                             errorMessage={'Test'}
                        />
                        <Button 
                            type="succes"
                            onClick={this.loginHandler}
                        >
                                Login
                        </Button>
                        <Button 
                            type="primary"
                            onClick={this.regiterHandler}
                        >
                                Registration
                        </Button>
                    </form> 
                </div>
            </div>
        );
    }
}