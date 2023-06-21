import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './../Dialogs.module.css';


export const DialogItem = (props) => {

	let path = '/dialog/'+ props.id;
	
	return ( 
		<div className={classes.dialog}>
				<NavLink to={path}>
					{props.name}
				</NavLink>
		</div>
	)
}

