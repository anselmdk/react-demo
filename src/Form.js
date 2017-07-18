import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength10 = maxLength(10)
const alphanumeric = value => {
  const match = value.match(/^[a-z0-9]+$/i);
  if (match) {
    return undefined;
  } else {
    return 'Only alpha numeric characters are allowed';
  }
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="field" type="text"
               component={renderField} label="Please enter some text"
               validate={[ required, maxLength10, alphanumeric ]}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting || (props.valid == false)}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'form', // a unique identifier for this form
})(Form);

