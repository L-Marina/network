import React from 'react';
import {Field, handleSubmit, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required,  maxLengthCreator } from '../../../utils/validators/validator';
import {Textarea} from '../../common/FormsControls/FormsControls';
 


const MyPosts = React.memo(props => {
	let postsElements = 
	[...props.posts]
	.reverse()
	.map(p => <Post key={p.id} message = {p.message} likesCount = {p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return ( 
		<div className={s.postBlock}>
					<h3>My posts</h3>
					< AddNewPostFormRedux onSubmit={onAddPost}/>
					<div className={s.posts}>
						{postsElements}
						
					</div>
		</div>
			
	)
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return(
		<form onSubmit={props.handleSubmit}>
					
		<div>
			<Field component={Textarea} name='newPostText' placeholder='Post message'  validate={[ required, maxLengthCreator(10) ]} />
		</div>
		
		<div>
			<button>Add post</button>
			</div>
	
	</form>
	)
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})( AddNewPostForm)

export default MyPosts;

