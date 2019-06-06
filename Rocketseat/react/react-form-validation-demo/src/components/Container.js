import React from 'react'

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nome: ' ' 
        };
    }

    change(event) {
        this.setState({ nome: event.target.value })
    }

    render() {
        return (
            <div>
                <br/>
                <label>
                Nome: <br/>
                </label>
                <input value={this.state.nome} onChange={(e) => this.change(e)} />
                
                <hr/>
                <h3>Nome: {this.state.nome}</h3>

            </div>
        )
    }
}