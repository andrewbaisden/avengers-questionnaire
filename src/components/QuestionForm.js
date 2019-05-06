import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class QuestionForm extends Component {
	renderInput({ input, label }) {
		return (
			<div>
				<label>{label}</label>
				<input {...input} />
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
					<Field name="title" component={this.renderInput} label="Enter Title" />

					<Field name="description" component={this.renderInput} label="Enter Description" />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'questionForm'
})(QuestionForm);
