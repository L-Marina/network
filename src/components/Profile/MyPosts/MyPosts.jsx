import React from 'react';

import Post from './Post/Post';
import MyButton from '../../common/button/MyButton';
import classes from './MyPosts.module.css';
import MyTextarea from '../../common/textarea/MyTextarea';



const MyPosts = (props) => {
	
	let postsElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return ( 
		<div className={classes.postBlock}>
				<h3>My posts</h3>
				
				<MyTextarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}></MyTextarea> 
					
				<MyButton onClick = { onAddPost }>Add post</MyButton>
					
				<div className={classes.posts}>
					{postsElements}
						
				</div>
		</div>
			
	)
}

export default MyPosts;

