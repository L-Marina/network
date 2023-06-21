import React from 'react';

import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo';


export const Profile = (props) => {
	
	return ( 
			<div>
				<ProfileInfo />
				<PostsContainer />
			</div>
	)
}

