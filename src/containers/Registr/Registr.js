import React,{Component} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import '../Auth/Auth.css'

export default class Registr extends Component {
    render() {
        return (


            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="Auth">
                            <div>
                            <h1>Registration</h1>
                            <RegistrationForm/>
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
