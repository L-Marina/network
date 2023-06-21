import React from 'react';

import Post from './Post';
import Button from '../../../components/Button';
import Textarea from '../../../components/Textarea';
import classes from './Posts.module.css';



 export const Posts = (props) => {


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



