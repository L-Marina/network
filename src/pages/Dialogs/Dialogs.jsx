import React from 'react';
import { connect } from 'react-redux';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Button from '../../components/button/Button';
import Textarea from '../../components/textarea/Textarea';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/actionCreators/dialogsActionCreators';
import classes from './Dialogs.module.css';



const DialogsComponent = (props) => {

	let state = props.dialogs;
 	 
	let dialogsElements =state.dialogs.map (d => <DialogItem  name = {d.name} key = {d.id} id = {d.id} />);
	
	let messagesElements = state.messages.map (m => <Message  message = {m.message} key = {m.id}/>);

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () =>{
		props.sendMessage();
	}

	let onNewMessageChange = (e) =>{
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={classes.messages}>
				<div>{messagesElements}</div>

				<Textarea value={newMessageBody}
					onChange={onNewMessageChange}
					placeholder='Enter your message'>
				</Textarea>
					
				<Button onClick={onSendMessageClick} >Send</Button>
					
				
			</div>
		</div>
	)
}



const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		}
		
	}
}

const Dialogs = connect(mapStateToProps,mapDispatchToProps) (DialogsComponent);

export default Dialogs;