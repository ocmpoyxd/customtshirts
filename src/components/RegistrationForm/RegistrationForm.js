import React,{Component} from "react";
import InputBox from '../UI/Inputbox'
import is from 'is_js'

class RegistrationForm extends Component {
    state = {
        isFormValid:false,
        formControls : {
            uName: {
                name: 'name',
                value: '',
                type: 'text',
                label: 'Name',
                errorMessage: 'Input valid Name',
                valid: false,
                touched:false,
                validation: {
                    required:true

                }
            },
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
                errorMessage: 'Min length 6 characters',
                valid: false,
                touched:false,
                validation: {
                    required:true,
                    minLength:6
                }
            },
            passwordReplay: {
                name: 'pass2',
                value: '',
                type: 'password',
                label: 'Re-enter your password',
                errorMessage: 'Passwords do not match',
                valid: false,
                touched:false,
                validation: {
                    required:true,
                    replay:true
                }
            }
        }
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state.formControls.email.value)
    }
    
    validateControl(value, validation) {
        let isValid = true
        if (!validation) {
            return true
        }
        if (validation.required) {
            isValid = value.trim() !=='' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length>=validation.minLength && isValid
        }
        if (validation.replay) {
            isValid = value===this.state.formControls.password.value
        }
        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls}
        const control = { ...formControls[controlName]}
        let isFormValid = true

        control.value = event.target.value
        control.touched = true 
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control
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
            <form method="POST" action="http://localhost:4000/registration/">
                { this.renderInputs() }
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled={!this.state.isFormValid}>
                    Sign up
                </button>
                {window.location.hash === '#success' &&
                <div id="success">
                    <p>Follow the link in the email to confirm your profile and use all the features of our Website</p>
                </div>
                }
            </form>
        );
    }
} 

export default RegistrationForm