import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="post col-md-5 text-center" onClick={props.clicked}>
        <h3>{props.post.title}</h3>
        <div className="Info">
            <div className="author">{props.post.author}</div>
        </div>
    </article>
);

export default post;