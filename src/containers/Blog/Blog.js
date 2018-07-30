import React, { Component } from 'react';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                // Just to limit the data coming in
                const posts = response.data.slice(0, 4);
                const updatedPosts =  posts.map(post => {
                    return {
                        ...post,
                        author: "Tanner"
                    }
                });
                this.props.onGetPosts(updatedPosts);
            });
    }

    postSelectedHandler = (post) => {
        this.setState({selectedPost: post});
    };

    render () {
        const posts = this.props.reduxPosts.map(post => {
            return <Post
                key={post.id}
                post={post}
                clicked={() => this.postSelectedHandler(post)}/>;
        });

        return (
            <div style={{marginTop: "70px"}} className="container">
                <section className="posts row">
                    {posts}
                </section>
                <section>
                    <FullPost
                        className="row"
                        post={this.state.selectedPost}
                        posts={posts}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

const mapStateToProps =  state => {
    return {
        reduxPosts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPosts: (posts) => dispatch({type: 'GET_POSTS', payload: posts })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);