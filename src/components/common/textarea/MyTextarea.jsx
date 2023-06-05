import React from 'react';

import classes from './MyTextarea.module.css';

const MyTextarea = (props) => {
	return (
		<textarea {... props} className={classes.myTextarea}  />
	)

}
export default MyTextarea;