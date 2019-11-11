import React,{Component} from "react";
import InputBox from '../UI/Inputbox'
import classes from '../../containers/Auth/Auth.css'
import is from 'is_js'
import {NavLink} from 'react-router-dom'



class AuthForm extends Component {
    state = {
        isFormValid:false,
        formControls : {
            email: {
                name: 'email',
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Input valid Email',
                valid: false,
                touched:false,
                validation: {
                    required:true,
                    email:true
                }
            },
            password: {
                name: 'pass',
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Input valid Password',
                valid: false,
                touched:false,
                validation: {
                    required:true,
                    minLength:6
                }
            }
        }
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state.formControls.email.value)
    }
    
    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !=='' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length>=validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls}
        const control = { ...formControls[controlName]}

        control.value = event.target.value
        control.touched = true 
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control

        let isFormValid = true  

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return  Object.keys(this.state.formControls).map((controlName,index) => {
            const control=this.state.formControls[controlName]
            return (
                <InputBox
                name={control.name}
                key={controlName+index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }
    render() {
        return (
            <form className={classes.AuthForm} method="POST" action="">
                {window.location.hash === '#success' &&
                    <div id="success">
                        <p>Your Email is confirmed! Now you can log in to our Website </p>
                    </div>
                }
                { this.renderInputs() }
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled={!this.state.isFormValid}>Sign in</button>
                <p>Not a member?
                    <NavLink to="/signup" exact={false} >  Sign up now</NavLink>
                </p>
            </form>
        );
    }
}

export default AuthForm;