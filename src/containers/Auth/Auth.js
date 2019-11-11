import React,{Component} from 'react'
import './Auth.css'
import AuthForm from '../../components/AuthForm/AuthForm'

export default class Auth extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="Auth">
                            <div>
                            <h1>Login</h1>
                            <AuthForm/>
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}