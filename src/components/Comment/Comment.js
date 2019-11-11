import React from 'react'
import  './Comment.css'
import {NavLink} from 'react-router-dom'
const Comment = props => {
    return (
        <div id={props.id} className="Comment">
            <h4> <NavLink to={'/users/'+props.writer}>  {props.writer}</NavLink></h4>           
            <p>{props.text}</p>
            <div className="DateTime">
                <i><small>{props.dateWriting}</small></i>
            </div>
            {
            props.countLikes ? <div className="Likes">
            <label ><b>{props.countLikes}</b></label>
            <img src="https://res.cloudinary.com/customtshirts/image/upload/v1573382476/like-solid_lzwc70.png" alt=""></img>
            </div> :null
            }
            <hr/>
        </div>
    )
}

export default Comment