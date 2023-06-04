import React from 'react';
import { sendMessageCreator} from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';


const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		}
		
	}
}

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	withAuthNavigate) (Dialogs);

