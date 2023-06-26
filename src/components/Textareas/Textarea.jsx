import React from 'react';

import classes from './Textarea.module.css';

export const Textarea = (props) => {
	return (
		<textarea {... props} className={classes.textarea}  />
		)

}
