import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Practice from './components/Practice';
import PracticeOn from './components/PracticeOn';

class RootApp extends React.Component{ 
    constructor(props){
        super(props);
        this.state  = {text:"" , size:1, time: 99999 };
        this.setValues = this.setValues.bind(this);
    }
    setValues(text = "", size, time){
        this.setState((prevState) => ({
            text : text == "" ? prevState.text : text,
            size : isNaN(size) ? prevState.size : size,
            time : isNaN(time) ? prevState.time : time
        })
        )
    }

    render(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path = "/"  element = {<App />} />
            <Route path = "/practice" element = {<Practice 
                                                    setValues = {this.setValues}
                                                    state ={this.state} 
                                                    />}
                                                />
            <Route path = "/practice/on-going" element ={<PracticeOn 
                                                    state = {this.state}/>} 
                                                />
            <Route path = "/test" element = {<Practice />} />
        </Routes>
    </BrowserRouter>
    )};
}



ReactDOM.render(<RootApp />, document.getElementById('root')); 

