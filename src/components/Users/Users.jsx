
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let  Users = ({currentPage,totalItemsCount, pageSize, onPageChanged, users,  ...props}) => {
	return   <div>
				<Paginator currentPage={props.currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize} onPageChanged={onPageChanged}  />	
		<div>
		{
			users.map(u => <User user={u} key={u.id} 
					followingInProgress={props.followingInProgress} 
					unfollow={props.unfollow} 
					follow={props.follow} /> 
				)
		}
		</div>
		
	</div>
}	


export default Users;





















