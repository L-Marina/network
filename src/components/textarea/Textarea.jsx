import React from 'react';

import classes from './Textarea.module.css';

const Textarea = (props) => {
	return (
		<textarea {... props} className={classes.textarea}  />
	)

}
export default Textarea;