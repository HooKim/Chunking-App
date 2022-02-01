import React from "react";
import {Link} from "react-router-dom";

export default class Practice extends React.Component {
    constructor(props){
        super(props);
        this.getValuesFromInput = this.getValuesFromInput.bind(this);
    }
    getValuesFromInput(){
        const sentence = document.getElementById('sentence').value.trim();
        const size = parseInt(document.getElementById('size').value.trim());
    
        this.props.setValues(sentence, size);
    }
    render() {
        return (
            <div>
                Sentence to Chunk : <input type = "text" 
                                            id = "sentence" 
                                            defaultValue={this.props.state.text}
                                            ></input> 
                Size of Chunk : <input type = "text"
                                        id = "size"
                                        defaultValue = {this.props.state.size}
                                        ></input>
                <Link to = "/practice/on-going">
                    <button onClick ={this.getValuesFromInput}>OK</button>
                </Link>
                <Link to = "/">
                    <button>Cancel</button>
                </Link>
            </div>
        );
    }
}

