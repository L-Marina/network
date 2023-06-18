import React from 'react';

import classes from'./ProfileInfo.module.css';
import profileInfo from '../../../images/profileInfo.jpg';

const ProfileInfo = () => {
	return ( 
		 <div>
				<div className={classes.imageBlock}>
					<img src={profileInfo} alt=''/>
				</div>
				<div className={classes.descriptionBlock}></div>
				
			</div>
	)
}

export default ProfileInfo;