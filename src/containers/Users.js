import React,{Component} from 'react'
import axios from 'axios'

export default class Users extends Component {

    state = {
        persons: []
    }
    
    componentDidMount() {
        axios.get(`http://localhost:4000/getusers`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
    
    render() {
        return(
            <div>
                <h1>Users</h1>               
                {this.state.persons.map(person =>
                    <div key={person.uId}>
                        <h2><b>{person.uName}</b></h2>
                        <h3>{person.uEmail}</h3>
                        <h4>{person.uRole}</h4>
                    </div>
                )}
            </div>
        )
        
    }
}