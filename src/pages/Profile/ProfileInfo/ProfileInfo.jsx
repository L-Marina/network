import React from 'react';

import classes from'./ProfileInfo.module.css';
import profileInfo from '../../../images/profileInfo.jpg';

export const ProfileInfo = () => {
	return ( 
		 <div className={classes.profileInfo}>
				<div className={classes.imageBlock}>
					 <img src={profileInfo} alt=''/> 
				</div>
				<div className={classes.descriptionBlock}></div>
				
			</div>
	)
}

