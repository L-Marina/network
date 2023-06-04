// import { render } from '@testing-library/react';
// import React from 'react';
// import Profile from './Profile';
// import { connect } from 'react-redux';
// import { getUserProfile,getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/ProfileReducer';
// import  {withRouter}  from '../../hoc/withRouter';
// import { Navigate } from 'react-router-dom';
// import {withAuthNavigate} from '../../hoc/withAuthNavigate'; 
// import { compose } from 'redux';

// class ProfileContainer extends React.Component {

// 	refreshProfile() {
// 		let userId = this.props.math.params.userId;
// 		if(!userId) {
// 			userId = this.props.authorizedUserId;
// 			if(!userId) {
// 				this.props.history.push('/login');
// 			}
// 		}
// 			this.props.getUserProfile(userId);	
// 			this.props.getStatus(userId);
			
// 		}
	
// 	componentDidMount() {
		
// 		this.refreshProfile();
// 	}

// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		if(this.props.math.params.userId != prevProps.math.params.userId ) { 
// 		this.refreshProfile();
// 	}
// }

// 	render() { 
		 
// 		return ( 
// 			<Profile {...this.props} 
// 			isOwner={!this.props.match.params.userId}
// 			profile={this.props.profile} 
// 			status={this.props.status} 
// 			updateStatus={this.props.updateStatus}
// 			savePhoto={this.props.savePhoto} />	
// 		)	
// 	} 
// }
//	

 

// let mapStateToProps = (state) => ( {
// 		profile: state.profilePage.profile,
// 		status: state.profilePage.status,
// 		authorizedUserId: state.auth.userId,
// 		isAuth: state.auth.isAuth

// } );


// export default compose(
// 	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
// 	withRouter,
// 	//withAuthNavigate
// 	)(ProfileContainer);

import React, { useEffect } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/ProfileReducer';
import { useParams } from 'react-router-dom';
import withRouter from '../../hoc/withRouter';

function ProfileContainer(props) {
	//let profileId = this.props.router.params.profileId;
    
	let userId = this.props.router.params.userId
	//const { userId } = useParams();
	 if (!userId) {
		userId = 2;
  }

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));