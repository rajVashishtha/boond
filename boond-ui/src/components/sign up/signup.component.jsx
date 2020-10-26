import React from 'react';
import './signup.style.scss';
import InputTextField from "../textfield/input-textfield.component";

class SignUp extends React.Component{
    render() {
        return (
            <div>
                <InputTextField type={"text"} label={"Name"} variant={"outlined"}/>
            </div>
        );
    }
}

export default SignUp;