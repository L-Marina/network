import React from 'react';

import Post from './Post/Post';
import Button from '../../../components/button/Button';
import Textarea from '../../../components/textarea/Textarea';
import classes from './Posts.module.css';



const Posts = (props) => {
	
	let postsElements = props.posts.map((page, index) => <Post message = {page.message} key={index} likesCount = {page.likesCount} />);

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
				<h3> Posts</h3>
				
				<Textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}></Textarea> 
					
				<Button onClick = { onAddPost }>Add post</Button>
					
				<div className={classes.posts}>
					{postsElements}
						
				</div>
		</div>
			
	)
}

export default Posts;

