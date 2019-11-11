import React,{Component} from 'react'
import axios from 'axios'
import './Home.css'
import TshirtPreview from '../../components/TshirtPreview/TshirtPreview'
import {NavLink} from 'react-router-dom'

export default class DesignCreator extends Component {
    state = {
        tshirts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/gettshirts`)
            .then(res => {
                const tshirts = res.data;
                this.setState({ tshirts });
            })
    }
    
    render() {
        return(
            <div className="container">
                    <div className="row">
                        {this.state.tshirts.map(tshirt =>
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