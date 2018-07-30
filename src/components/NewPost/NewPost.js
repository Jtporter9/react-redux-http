import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        status: ''
    };

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };

        axios.post('/posts', data)
            .then(response => {
                if(response.status  === 201){
                    this.setState({status: 'Success!'})
                }
                else {
                    this.setState({status: 'Fail...'})
                }
            });
    };

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="JT Porter">JT Porter</option>
                    <option value="Tanner">Tanner</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
                <div>
                    <p>{this.state.status}</p>
                </div>
            </div>
        );
    }
}

export default NewPost;