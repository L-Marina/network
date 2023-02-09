import React from 'react';
import s from'./ProfileInfo.module.css';

const ProfileInfo = () => {
	return ( 
		 <div>
				<div>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy6xyxKGexRG3tu1b3GpDQFGt2_51Cua5kg&usqp=CAU'/>
				</div>
				<div className={s.descriptionBlock}>
					ava+description
				</div>
				
			</div>
		)
}

export default ProfileInfo;