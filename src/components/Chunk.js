
import React from "react";

export default class Chunk extends React.Component{
    constructor(props){
        super(props);
        this.begin = 0;
        this.end = this.props.size;
        this.words = props.text.split(' ');
        this.count = 0;
        this.countTotal = Math.ceil(this.words.length / props.size);
        this.changeDisplay = this.changeDisplay.bind(this);
    }
    async componentDidMount(){
        await window.addEventListener('keydown', this.changeDisplay)
        console.log(this.words.slice(0,1));
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.changeDisplay);
    }
    changeDisplay (e) {
        const target = document.getElementById('chunked-words');
        if(this.count++ >= this.countTotal) target.textContent = "DONE!"
        else{
            this.begin += this.props.size;
            this.end += this.props.size;
            let finalWords = "";
            this.words.slice(this.begin , this.end).forEach((word)=>{
                finalWords += (word+ " ");
            })
            target.textContent = finalWords;
        }
    }

    

    render(){
        return(
        <div>
            <h3 id = "chunked-words" 
                tabIndex = "0" 
                onKeyDown={this.changeDisplay}>
                    {this.words.slice(this.begin, this.end)}
            </h3>
        </div>
        )
    }

}