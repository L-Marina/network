import React from 'react';

import classes from './Post.module.css';
import postUser from '../../../../images/postUser.jpg';

const Post = (props) => {
	return (
			<div className={classes.item}>
				<img src={postUser} alt=''/>
					{ props.message }
				<div>
					<span>like</span> { props.likesCount }
				</div>
			</div>
	)
}

export default Post;

