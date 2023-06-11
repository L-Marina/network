import React from 'react';

import classes from './Users.module.css';
import userPhoto from '../common/images/user.png';
import MyButton from '../common/button/MyButton';


const  Users = (props) => {

	let pagesCount = Math.ceil (props.totalUsersCount/props.pageSize);
		
		let pages = [];
		for (let i=1; i <= pagesCount; i++) {
			pages.push(i);
		}

	return  (
		<div className={classes.userList}>
			{props.users.map(u => 
				<div className= {classes.user} key={u.id}>
					<div>
						<div>
							<img src={u.photos.small !==null ? u.photos.small : userPhoto } className={classes.userPhoto} alt=''/>
						</div>
						<div>
							{u.followed 
							? <MyButton onClick={ () => {props.unfollow(u.id) } } > Unfollow </MyButton> 
							: <MyButton onClick={ () => {props.follow(u.id) } }> Follow </MyButton> 
							}
						</div>
					</div>

					<div className={classes.description}>
						<div> 
							<div className={classes.userName}>{u.name}</div>
							<div className={classes.userStatus}>{u.status}</div>
						</div>
						<div>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>	
						</div>
					</div>
					
				</div>)
			}

			{<div className={classes.pages}>
					{ pages.map (p =>  {
						return <span className={props.currentPage === p && classes.selectedPage}  
							onClick={ (e) => 
								{props.onPageChanged (p); }}>{p}</span>
					})}
			</div> }

		</div>
	)
}	

export default Users;





















