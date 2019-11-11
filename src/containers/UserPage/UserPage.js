import React,{Component} from 'react'
import axios from 'axios'
import TshirtPreview from '../../components/TshirtPreview/TshirtPreview'
import {NavLink} from 'react-router-dom'
import UserBlock from '../../components/UserBlock/UserBlock'
export default class DesignCreator extends Component {
    
    state = {
        portfolio: [],
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/getuser/${this.props.match.params.uName}`)
            .then(res => {
                const portfolio = res.data;
                this.setState({ portfolio });
            })
        axios.get(`http://localhost:4000/getuserinfo/${this.props.match.params.uName}`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }
    
    render() {
        return(
            <div className="container">
                    {this.state.users.map(user =>
                        <div key={user.uId}>
                            <UserBlock
                                uName={user.uName}
                                uEmail={user.uEmail}
                                uCity={user.city}
                                uAge={user.yearsOld}
                            />
                        </div>
                    )}
                    <div className="row">
                        {this.state.portfolio.map(tshirt =>
                            <div key={tshirt.tsId} className="col-lg-3 col-md-4 col-6 thumb">
                                <NavLink className="TshirtPreview" to={'/tshirts/'+tshirt.tsId} exact={false}>                                    
                                    <TshirtPreview
                                        label={tshirt.tsName}
                                        src={tshirt.design}
                                        ucanvas={tshirt.canvas}
                                    />
                                </NavLink>
                            </div>
                        )}
                    </div>
            </div>
        )
    }
}