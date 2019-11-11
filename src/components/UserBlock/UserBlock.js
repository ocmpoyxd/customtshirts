import React from 'react'
import './UserBlock.css'
const Comment = props => {
    return (
        <div className="row" id="UserBlock">
        <div id={props.id} className="col-sm col-lg-2">
            <img src="https://res.cloudinary.com/customtshirts/image/upload/v1573405762/user_vg6fbf.png" width="100px" alt=""></img>
        </div>
        <div className="col-sm">
            <h4>{props.uName}</h4>           
            <h4>Email adress: {props.uEmail}</h4>
            <h4>City: {props.uCity}</h4>
            <h4>Age: {props.uAge}</h4>
        </div>
            
            

        </div>
    )
}

export default Comment