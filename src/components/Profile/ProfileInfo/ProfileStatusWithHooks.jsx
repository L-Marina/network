import React from 'react';
import { useState, useEffect } from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from'./ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] =  useState(false);
	let [status, setStatus] =  useState(props.status);
	useEffect( () =>{
		setStatus(props.status);
	}, [props.status]);
	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
	return ( 
		 	<div>
				{!editMode &&
		 			<div>
						<b>Status</b><span onDoubleClick={setEditMode() }>{props.status || '---'}</span>
		 			</div>
				}
				{editMode &&
		 			<div>
		 				<input onChange={onStatusChange} autoFocus={true} onBlur={setEditMode}  value={status} />
	  				</div>
				}
			 </div>
	
		)
}

export default ProfileStatusWithHooks;