import React from 'react';

import classes from './Post.module.css';


const Post = (props) => {
	return (
			<div className={classes.item}>
				<img src='https://media.istockphoto.com/id/1331335429/sv/vektor/female-avatar-icon.jpg?s=612x612&w=0&k=20&c=WeDpNAPbHHJZh_Nu9b7fU5w4yxAY5lGj9K4THFR3mTE=' alt=''/>
					{ props.message }
				<div>
					<span>like</span> { props.likesCount }
				</div>
			</div>
	)
}

export default Post;

