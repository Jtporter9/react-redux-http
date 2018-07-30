import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        status: ''
    };

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.post.id)
            .then(response => {
                if (response.status === 200){
                    this.setState({status: 'Pretend like this is a real DB and this is actually deleted...poof!'});
                }
                else
                    this.setState({status: 'Epic fail...'});
            });
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.post) {
            post = (
                <div>
                    <div className="FullPost col-sm-12">
                        <h3>{this.props.post.title}</h3>
                        <p>{this.props.post.body}</p>
                        <div className="Edit">
                            <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                        </div>
                    </div>

                    <div className="statusMessage">
                        <p>{this.state.status}</p>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;