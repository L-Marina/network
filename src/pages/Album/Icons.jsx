import React from 'react';

import classes from './Icons.module.css';
import iconHtml from '../../images/iconHtml.png';
import iconCss from '../../images/iconCss.jpg';
import iconJs from '../../images/iconJs.png';
import iconReact from '../../images/iconReact.jpg';
import iconTs from '../../images/iconTs.png';
import iconSass from '../../images/iconSass.png';
import iconGitHub from '../../images/iconGitHub.png';

const Images = () => {
	return (
		<div className={classes.images}>
				<img  src = {iconHtml} alt='' />
				<img  src = {iconCss} alt='' />
				<img  src = {iconJs} alt='' />
				<img  src = {iconReact} alt='' />
				<img  src = {iconSass} alt='' />
				<img  src = {iconGitHub} alt='' />
				<img  src = {iconTs} alt='' />
				
		</div>
	)
}

export default Images;