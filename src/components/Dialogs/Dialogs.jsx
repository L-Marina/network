import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/DialogsReducer';
import { Navigate } from 'react-router-dom';
import {AddMessageForm} from './Message/AddMessageForm';



const Dialogs = (props) => {
	let state = props.dialogsPage;
 	 let dialogsElements =state.dialogs.map (d => <DialogItem  name = {d.name} key = {d.id} id = {d.id} />);
	
	 let messagesElements = state.messages.map (m => <Message  message = {m.message} key = {m.id}/>);

	let newMessageBody = state.newMessageBody;


	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	if (!props.isAuth) return <Navigate to={'/login'} />


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
					
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<AddMessageForm  onSubmit={addNewMessage} />
			</div>
		</div>
	)	
}
// const AddMessageForm = (props) => {
// 	return(
// 		<form onSubmit={props.handleSubmit}>
// 			<div>
// 				<div>< Field component='textarea' name='newMessageBody'
								
// 								 placeholder='Enter your message'/>
// 				</div>
// 				<div><button>Send</button></div>
// 			</div>
// 		</form>
// 	)
// }




// const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'}) (AddMessageForm);
export default Dialogs;