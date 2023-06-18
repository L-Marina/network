import { connect } from 'react-redux';

import {addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/actionCreators/profileActionCreators';
import Posts from './Posts';

 
const mapStateToProps = (state) => {
	return {
		posts: state.profile.posts,
		newPostText: state.profile.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action =  updateNewPostTextActionCreator(text);
			dispatch(action);
		},
		
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps) (Posts);

export default PostsContainer;

