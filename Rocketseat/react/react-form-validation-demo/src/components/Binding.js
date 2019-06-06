import React from 'react'

export default class Binding extends React.Component {
    constructor(props){
        super(props);
        this.state = { count: 0};
    }

    increment(){
        this.setState({ count: this.state.count + 1});
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }
}