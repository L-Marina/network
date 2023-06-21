import React from 'react';

import classes from './User.module.css';
import userPhoto from '../../images/user.png';
import Button from '../../components/Button';
import Paginator from '../../components/Paginator';


const  User = (props) => {

	let pagesCount = Math.ceil (props.totalUsersCount/props.pageSize);

		let pages = [];
		for (let i=1; i <= pagesCount; i++) {
			pages.push(i);
		}

	return  (
		<div className={classes.users}> 
			<div className={classes.userList}>
				
				{props.users.map(u => 
					<div className= {classes.user} key={u.id}>
						<div className= {classes.avatar}>
							<div>
								<img src={u.photos.small !==null ? u.photos.small : userPhoto } className={classes.userPhoto} alt=''/>
							</div>
							<div>
								{u.followed 
								? <Button onClick={ () => {props.follow(u.id) } } > Follow </Button> 
								: <Button onClick={ () => {props.unfollow(u.id) } }> Unfollow </Button> 
								}
							</div>
						</div>

						<div className={classes.description}>
							<div className={classes.userData}> 
								<div className={classes.userName}>{u.name}</div>
								<div className={classes.userStatus}>{u.status}</div>
							</div>
							<div>
								<div>{"location.country"}</div>
								<div>{"location.city"}</div>	
							</div>
						</div>
						
					</div>)
				}
			</div>
				<Paginator totalUsersCount={props.totalUsersCount}
					pageSize={props.pageSize}
					currentPage={props.currentPage}
					onPageChanged={props.onPageChanged} />
				{/* {<div className={classes.pages}>
						{ pages.map ((page, index) =>  {
							return <span key={index} className={props.currentPage === page && classes.selectedPage}  
								onClick={ (e) => 
									{props.onPageChanged (page); }}>{page}</span>
						})}
				</div> } */}

			
		</div>
	)
}	


export default User;





















