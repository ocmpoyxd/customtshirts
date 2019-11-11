import React from 'react'
import './Tshirt.css'
import {NavLink} from 'react-router-dom'

const Tshirt = props => {
    const images = {
        male:{
            white:"https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg",
            blue:"https://sun9-29.userapi.com/c857328/v857328032/400e8/TyX03Lci__A.jpg",
            green:"https://sun9-30.userapi.com/c857328/v857328032/400ef/2uJTqPIV2Xk.jpg",
            orange:"https://sun9-61.userapi.com/c857328/v857328032/400f6/OLY_0tpZ0Ms.jpg",
            red:"https://sun9-52.userapi.com/c857328/v857328032/400fd/Xb4gdyi7Yqk.jpg",
            yellow:"https://sun9-34.userapi.com/c857328/v857328032/400be/MvhTgs6Wu_Q.jpg"
        },
        female:{
            white:"https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg",
            blue:"https://sun9-23.userapi.com/c857328/v857328032/400c5/fnv5L0iCTwc.jpg",
            green:"https://sun9-13.userapi.com/c857328/v857328032/400cc/m0bkWSseBUg.jpg",
            orange:"https://sun9-28.userapi.com/c857328/v857328032/400d3/lH-1pIU5vQc.jpg",
            red:"https://sun9-7.userapi.com/c857328/v857328032/400da/Bms949u6XuQ.jpg",
            yellow:"https://sun9-50.userapi.com/c857328/v857328032/400e1/atTlkdLQguI.jpg"
        }
    };
    let selectedColor=null;
    let selectedGender=props.gender;


function returnSelectedGender() {
    let radios = document.getElementsByTagName('input');
    let value;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;       
        };
    };
    return value;
};

function changeFontTshirt (color) {
    if(color)
        selectedColor=color;
    selectedGender = returnSelectedGender();
    if (selectedGender==="male") {
        ChangeColorForMale(selectedColor);
    };
    if (selectedGender==="female") {
        ChangeColorForFemale(selectedColor);
    }
};

function ChangeColorForMale (color) {
    switch (color) {
        case "white":
            document.getElementById("superimage").src=images.male.white;
        break;
        case "green":
            document.getElementById("superimage").src=images.male.green;
        break;
        case "yellow":
            document.getElementById("superimage").src=images.male.yellow;
        break;
        case "red":
            document.getElementById("superimage").src=images.male.red;
        break;
        case "blue":
            document.getElementById("superimage").src=images.male.blue;
        break;
        case "orange":
            document.getElementById("superimage").src=images.male.orange;
        break;
        default:
            break;
    }
};

function ChangeColorForFemale (color) {
    switch (color) {
        case "white":
            document.getElementById("superimage").src=images.female.white;
        break;
        case "green":
            document.getElementById("superimage").src=images.female.green;
        break;
        case "yellow":
            document.getElementById("superimage").src=images.female.yellow;
        break;
        case "red":
            document.getElementById("superimage").src=images.female.red;
        break;
        case "blue":
            document.getElementById("superimage").src=images.female.blue;
        break;
        case "orange":
            document.getElementById("superimage").src=images.female.orange;
        break;
        default:
        break;
    }
};

    return (
        <div className="row" >
            <div className="col-sm-md ">
                <div id="superblock">
                    <img src={props.imgsrc} className="img-fluid" width="100%" height="100%" id="superimage" alt=""/>
                    <img className="imgInTshirt" src={props.ucanvas} alt=""/>
                </div>                 
            </div>
            <div className="col-md">
                <form method="POST" action="http://localhost:4000/buying/">
                    <h2 name="tshirtname">{props.name}</h2>
                    <hr/>
                    <h4>
                        <i>Creator:</i>
                        <NavLink to={'/users/'+props.creator}>
                            {props.creator}
                        </NavLink>
                    </h4>
                    <h4>
                        <i>Topic:</i>
                        {props.topic}
                    </h4>
                    <h5>
                        Rating: {props.rating?props.rating:"No ratings yet"}
                        <small>
                            {props.rating?"CountMarks:"+props.countMarks:""}
                        </small>
                    </h5>
                    <p>
                        {props.discription}
                    </p>
                    <div className="sizeRadios">
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="menRadios"
                                onClick={()=>changeFontTshirt()}
                                value="male"
                                defaultChecked={(props.gender==="male")}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Men
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="womenRadios"
                                onClick={()=>changeFontTshirt()}
                                value="female"
                                defaultChecked={(props.gender==="female")}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Women
                            </label>
                        </div>
                    </div>

                    <div className="colorPalitre">
                        <button type="button" className="red"  onClick={() => changeFontTshirt("red")}></button>
                        <button type="button" className="yellow"  onClick={() => changeFontTshirt("yellow")}></button>
                        <button type="button" className="orange"  onClick={() => changeFontTshirt("orange")}></button>
                        <button type="button" className="blue"  onClick={() => changeFontTshirt("blue")}></button>
                        <button type="button" className="green" onClick={() => changeFontTshirt("green")}></button>
                        <button type="button" className="white"  onClick={() => changeFontTshirt("white")}></button>
                    </div>
                    <div>
                        <label  htmlFor="sizeSelector">
                            Choose size:
                        </label>                
                        <select id="sizeSelector" className="form-control" name="size">
                            <option>Extra small</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra large</option>
                        </select>
                    </div>
                    <div id="buyButton">
                        <button className="btn btn-outline-success my-2 my-sm-0"  type="submit">
                            Buy it!
                        </button>
                    </div>
                </form>
            </div>              
        </div>
    );
};

export default Tshirt;