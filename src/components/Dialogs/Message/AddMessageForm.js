import React from 'react';
import { Field, handleSubmit, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import {
  required,
  maxLengthCreator,
} from '../../../utils/validators/validator';

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            component={Textarea}
            validate={[required, maxLength50]}
            name='newMessageBody'
            placeholder='Enter your message'
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);
