import React,{Component} from 'react'
import { fabric } from 'fabric'
import './DesignCreator.css'
import { saveAs } from 'file-saver'


export default class DesignCreator extends Component {
   
    constructor(props) {
        super(props)
        this.state = { text: null }
        
 
        this.handleChange = this.handleChange.bind(this)
      }
      
    
      handleChange(event){
        this.setState({
          value: event.target.value
        });
    
      }
    
      
    render()
   
   {
 function drawText(params) {
    let canvas = new fabric.Canvas('supercanvas', { selection: false });
    let text=document.getElementById("textforcanvas").value;
    document.getElementById("textforcanvas").value="";
    let normalText = new fabric.Text(text, {
        fontWeight: 'bold',
        fontFamily: 'Comic Sans',
        fontSize: 20
      });

      canvas.add(normalText)
     }

     function Save() {
        let canvas = document.getElementById("supercanvas");
        canvas.getContext("2d");
        canvas.toBlob(function(blob) {
            saveAs(blob, "pretty image.png");
        });
     }

    function Load() {
         
        let canvas = new fabric.Canvas('myCanvas',{
        });
        canvas.clear();
        const context=canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        let imgElement = document.getElementById('my-image');
        let imgInstance = new fabric.Image(imgElement,{})
        canvas.add(imgInstance)
     
    }

        return (
               <div>
                    <div className="outsideWrapper">  
                        <div className="insideWrapper">
                            <img src="https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg" className="coveredImage" alt=""/>
                            <div id="test">
                                <canvas className="coveringCanvas" id="supercanvas" width="90px" height="170px">
                                </canvas>                        
                            </div>                        
                        </div>
                    </div>
                    <div>
                   
            <input type="text" id="textforcanvas"></input>
            <button onClick={drawText}>Draw</button>          
            <button onClick={Save}>Save</button>
            <button onClick={Load}>Load</button>
        </div>
      
                </div> 
                







        )
    }
}

