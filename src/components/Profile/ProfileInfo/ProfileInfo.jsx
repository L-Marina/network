import React from 'react';

import classes from'./ProfileInfo.module.css';

const ProfileInfo = () => {
	return ( 
		 <div>
				<div>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qmzsDXsMr2Z-YIx07ffJqWvLpthag9NlUQ&usqp=CAU' alt=''/>
				</div>
				<div className={classes.descriptionBlock}></div>
				
			</div>
	)
}

export default ProfileInfo;