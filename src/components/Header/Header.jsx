import React from 'react';

import classes from './Header.module.css';
import logo from '../../images/welcome.jpg';


export const Header = () => {
	return (
		<header className = {classes.header}>
        	 <img  src = {logo} alt='' /> 
      </header>
	)
}

