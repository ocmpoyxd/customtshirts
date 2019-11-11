import React from 'react'
import './TshirtPreview.css'

const TshirtPreview = props => {
    return (
        <div className="Tshirt">
            <h4>{props.label}</h4>
            <div id="superblock">
                <img src={props.src} className="img-fluid" width="100%" height="100%" id="superimage" alt=""/>
                <img className="imgInTshirt" src={props.ucanvas} alt=""/>
            </div> 
        </div>
    )
}

export default TshirtPreview