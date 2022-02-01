import React from "react";

export default class PracticeOn extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.state.text}</h1>
                <h2>{this.props.state.size}</h2>
            </div>
        );
    }
}