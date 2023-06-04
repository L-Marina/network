import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from'./ProfileInfo.module.css';

class ProfileStatus extends React.Component {
	state = {
	editMode:false,
	status: this.props.status
	
}
	activeteEditMode = () => {
		this.setState({
			editMode: true
		});
	}
	deactiveteEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({
			status: 
		 e.currentTarget.value
	});
}

	componentDidUpdate (prevProps, prevState) {
		if(prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}
	render() {
		return ( 
		 
		 <div>
			{!this.state.editMode &&
		 		<div>
					<span onDoubleClick={ this.activateEditMode }>{this.props.status || '---'}</span>
		 		</div>
			}
			{this.state.editMode &&
		 		<div>
		 			<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteEditMode} value={this.state.status}></input>
	  			</div>
			}
		 </div>
	
		)
}
}
export default ProfileStatus;