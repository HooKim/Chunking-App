import React from "react";
import Chunk from "./Chunk";

export default class PracticeOn extends React.Component {
    render() {
        return (
            <div>
                <Chunk text = {this.props.state.text} size ={this.props.state.size}/>
            </div>
        );
    }
}