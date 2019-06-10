import React from 'react'
import Comment from './comment'

export default class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            newCommandText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommandText }
            ]
        });
        this.setState({ newCommandText: ''});
        e.preventDefault();
    }

    handleTextChange(e){
        this.setState({ newCommandText: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value={ this.state.newCommandText }
                    onChange={this.handleTextChange}/>
                    <button type="submit">Comentar</button>
                </form>
                {this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                })}
            </div>
        );
    }
}