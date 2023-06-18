import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {followAC, unfollowAC, setUsersAC, setCurrentPageAC,
	 setTotalUsersCountAC, toggleIsLoadingAC} from '../../redux/actionCreators/usersActionCreators';
import User from './User';
import Preloader from '../../components/preloader/Preloader';


class Users extends React.Component {	
	componentDidMount() {
		this.props.toggleIsLoading(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsLoading(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsLoading(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsLoading(false);
			this.props.setUsers(response.data.items);
		});
	}

	render() {
			
		return (
		<> 
			{this.props.isLoading ? <Preloader /> : null}

			<User 	totalUsersCount= {this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage} 
						onPageChanged={this.onPageChanged}
						users={this.props.users}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
			/>  
		</>
		)
	}
}	


const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage,
		isLoading: state.users.isLoading,
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},

		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},

		setUsers: (users) => {
			dispatch(setUsersAC (users))
		},

		setCurrentPage: (pageNumber) => {
				dispatch(setCurrentPageAC (pageNumber))
		},

		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC (totalCount))
		},
		
		toggleIsLoading: (isLoading) => {
		dispatch(toggleIsLoadingAC (isLoading))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);
