import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class QuestionForm extends Component {
	renderInput({ input, label }) {
		// console.log(input);
		return (
			<div>
				<input type="radio" {...input} />
			</div>
		);
	}
	onSubmit(formValues) {
		console.log(formValues);
	}
	render() {
		return (
			<div>
				<h3>Question Form Exam</h3>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<fieldset>
						<legend>Personalia eewfewfwfewfew:</legend>
						Yes: <Field name="gender" value="male" type="radio" component={this.renderInput} />
						No: <Field name="gender" value="female" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>Personalia eewfewfwfewfew:</legend>
						Yes: <Field name="dbz" value="goku" type="radio" component={this.renderInput} />
						No: <Field name="dbz" value="vegeta" type="radio" component={this.renderInput} />
					</fieldset>

					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'questionForm'
})(QuestionForm);
