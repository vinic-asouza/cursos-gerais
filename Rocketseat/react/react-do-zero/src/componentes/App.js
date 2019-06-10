import React from 'react'
import Post from '../componentes/Post'

export default class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello Word</h1>
            <Post title="Eae Rapaziada"/>
            <Post title="Salve"/>
            <Post title="Opa maluko"/>
            <Post title="Qual foi"/>
        </div>

        );
    }
}