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
						<legend>{this.props.examQuestions[0].question}:</legend>
						Thor: <Field name="strongestAvenger" value="Thor" type="radio" component={this.renderInput} />
						Captain Marvel:
						<Field name="strongestAvenger" value="Captain Marvel" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[1].question}:</legend>
						New York: <Field name="spidermanHome" value="New York" type="radio" component={this.renderInput} />
						California: <Field name="spidermanHome" value="California" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[2].question}:</legend>
						Edward Connor: <Field name="hulkName" value="Edward Connor" type="radio" component={this.renderInput} />
						Bruce Banner: <Field name="hulkName" value="Bruce Banner" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[3].question}:</legend>
						3: <Field name="ironManMovies" value="3" type="radio" component={this.renderInput} />
						4: <Field name="ironManMovies" value="4" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[4].question}:</legend>
						7: <Field name="infinityStones" value="7" type="radio" component={this.renderInput} />
						6: <Field name="infinityStones" value="6" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[5].question}:</legend>
						Mandalore: <Field name="thanosWorld" value="Mandalore" type="radio" component={this.renderInput} />
						Titan: <Field name="thanosWorld" value="Titan" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[6].question}:</legend>
						Hawkman: <Field name="bows" value="Hawkman" type="radio" component={this.renderInput} />
						Hawkeye: <Field name="bows" value="Hawkeye" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[7].question}:</legend>
						Jarvis: <Field name="starkFamily" value="Jarvis" type="radio" component={this.renderInput} />
						Alfred: <Field name="starkFamily" value="Alfred" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[8].question}:</legend>
						Apex Legends: <Field name="computerGame" value="Apex Legends" type="radio" component={this.renderInput} />
						Fortnite: <Field name="computerGame" value="Fortnite" type="radio" component={this.renderInput} />
					</fieldset>
					<fieldset>
						<legend>{this.props.examQuestions[9].question}:</legend>
						Jean Grey: <Field name="elizabethOlsen" value="Jean Grey" type="radio" component={this.renderInput} />
						Scarlet Witch:{' '}
						<Field name="elizabethOlsen" value="Scarlet Witch" type="radio" component={this.renderInput} />
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
