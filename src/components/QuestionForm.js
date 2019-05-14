import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
:root {
  --primary-colour: #343436; 
}
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
}
.hide {
    display: none;
}
.container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
}
.container h1, h2 {
    text-align: center;
    margin-bottom: 2rem;
}
.question-container {
    margin-bottom: 2rem;
    padding: 1rem;
    
}
legend {
    font-weight: bold;
    padding: 1rem;
}
.error {
    color: green;
    padding: 1rem;
}
.submit-btn {
    padding: 1rem;
    border: 0;
    text-align: center;
    font-weight: 400;
    background: green;
    border-radius: 1rem;
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    cursor: pointer;
}
.exam-results {
margin: 0 auto;
border: 1px solid black;
}
.results p {
padding: 1rem;
}
.container-retry {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
}
.retry-btn {
    padding: 1rem;
    border: 0;
    text-align: center;
    font-weight: 400;
    background: green;
    border-radius: 1rem;
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    max-width: 500px;
}
`;

class QuestionForm extends Component {
	constructor(props) {
		super(props);
		this.form = React.createRef();
		this.examQuestions = React.createRef();
		this.retryExam = React.createRef();
	}
	renderInput({ input, label, meta }) {
		// console.log(input);
		return (
			<div>
				<input type="radio" {...input} />
				<div className="error">{meta.error}</div>
			</div>
		);
	}
	onSubmit = formValues => {
		console.log(formValues);

		let total = 0;

		const calcValues = (name, answer) => {
			if (`${name}` === answer) {
				total += 1;
			}
		};

		calcValues(`${formValues.strongestAvenger}`, `${this.props.examQuestions[0].answers.answerOne.answer}`);
		calcValues(`${formValues.spidermanHome}`, `${this.props.examQuestions[1].answers.answerOne.answer}`);
		calcValues(`${formValues.hulkName}`, `${this.props.examQuestions[2].answers.answerTwo.answer}`);
		calcValues(`${formValues.ironManMovies}`, `${this.props.examQuestions[3].answers.answerOne.answer}`);
		calcValues(`${formValues.infinityStones}`, `${this.props.examQuestions[4].answers.answerOne.answer}`);
		calcValues(`${formValues.thanosWorld}`, `${this.props.examQuestions[5].answers.answerTwo.answer}`);
		calcValues(`${formValues.bows}`, `${this.props.examQuestions[6].answers.answerTwo.answer}`);
		calcValues(`${formValues.starkFamily}`, `${this.props.examQuestions[7].answers.answerOne.answer}`);
		calcValues(`${formValues.computerGame}`, `${this.props.examQuestions[8].answers.answerTwo.answer}`);
		calcValues(`${formValues.elizabethOlsen}`, `${this.props.examQuestions[9].answers.answerTwo.answer}`);

		console.log(total);

		this.form.current.classList.add('hide');
		this.retryExam.current.classList.remove('hide');

		let output = '';
		output += `
            <div class="container-results">
            <div><h2>Exam Results</h2></div>
            <div class="results">
                <p>Question 1 Answer: ${formValues.strongestAvenger}</p>
                <p>Question 2 Answer: ${formValues.spidermanHome}</p>
                <p>Question 3 Answer: ${formValues.hulkName}</p>
                <p>Question 4 Answer: ${formValues.ironManMovies}</p>
                <p>Question 5 Answer: ${formValues.infinityStones}</p>
                <p>Question 6 Answer: ${formValues.thanosWorld}</p>
                <p>Question 7 Answer: ${formValues.bows}</p>
                <p>Question 8 Answer: ${formValues.starkFamily}</p>
                <p>Question 9 Answer: ${formValues.computerGame}</p>
                <p>Question 10 Answer: ${formValues.elizabethOlsen}</p>
            </div>
            <div><h1>Total Score: ${total}/10</h1></div>
            </div>
        `;

		this.examQuestions.current.innerHTML = output;
	};
	reloadExam() {
		document.location.href = 'http://localhost:3000/';
		console.log('Retry Exam');
	}

	render() {
		return (
			<div>
				<GlobalStyle />
				<div className="container">
					<h1>Avengers: Endgame Exam</h1>
					<form ref={this.form} onSubmit={this.props.handleSubmit(this.onSubmit)}>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[0].question}:</legend>
							{this.props.examQuestions[0].answers.answerOne.answer}
							<Field
								name="strongestAvenger"
								value={this.props.examQuestions[0].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[0].answers.answerTwo.answer}:
							<Field
								name="strongestAvenger"
								value={this.props.examQuestions[0].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[1].question}:</legend>
							{this.props.examQuestions[1].answers.answerOne.answer}{' '}
							<Field
								name="spidermanHome"
								value={this.props.examQuestions[1].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[1].answers.answerTwo.answer}:
							<Field
								name="spidermanHome"
								value={this.props.examQuestions[1].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[2].question}:</legend>
							{this.props.examQuestions[2].answers.answerOne.answer}:
							<Field
								name="hulkName"
								value={this.props.examQuestions[2].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[2].answers.answerTwo.answer}:{' '}
							<Field
								name="hulkName"
								value={this.props.examQuestions[2].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[3].question}:</legend>
							{this.props.examQuestions[3].answers.answerOne.answer}:{' '}
							<Field
								name="ironManMovies"
								value={this.props.examQuestions[3].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[3].answers.answerTwo.answer}:{' '}
							<Field
								name="ironManMovies"
								value={this.props.examQuestions[3].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[4].question}:</legend>
							{this.props.examQuestions[4].answers.answerOne.answer}:{' '}
							<Field
								name="infinityStones"
								value={this.props.examQuestions[4].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[4].answers.answerTwo.answer}:{' '}
							<Field
								name="infinityStones"
								value={this.props.examQuestions[4].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[5].question}:</legend>
							{this.props.examQuestions[5].answers.answerOne.answer}:{' '}
							<Field
								name="thanosWorld"
								value={this.props.examQuestions[5].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[5].answers.answerTwo.answer}:{' '}
							<Field
								name="thanosWorld"
								value={this.props.examQuestions[5].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[6].question}:</legend>
							{this.props.examQuestions[6].answers.answerOne.answer}:{' '}
							<Field
								name="bows"
								value={this.props.examQuestions[6].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[6].answers.answerTwo.answer}:{' '}
							<Field
								name="bows"
								value={this.props.examQuestions[6].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[7].question}:</legend>
							{this.props.examQuestions[7].answers.answerOne.answer}:{' '}
							<Field
								name="starkFamily"
								value={this.props.examQuestions[7].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[7].answers.answerTwo.answer}:{' '}
							<Field
								name="starkFamily"
								value={this.props.examQuestions[7].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[8].question}:</legend>
							{this.props.examQuestions[8].answers.answerOne.answer}:{' '}
							<Field
								name="computerGame"
								value={this.props.examQuestions[8].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[8].answers.answerTwo.answer}:{' '}
							<Field
								name="computerGame"
								value={this.props.examQuestions[8].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>
						<fieldset className="question-container">
							<legend>{this.props.examQuestions[9].question}:</legend>
							{this.props.examQuestions[9].answers.answerOne.answer}:{' '}
							<Field
								name="elizabethOlsen"
								value={this.props.examQuestions[9].answers.answerOne.answer}
								type="radio"
								component={this.renderInput}
							/>
							{this.props.examQuestions[9].answers.answerTwo.answer}:
							<Field
								name="elizabethOlsen"
								value={this.props.examQuestions[9].answers.answerTwo.answer}
								type="radio"
								component={this.renderInput}
							/>
						</fieldset>

						<button className="submit-btn">Submit</button>
					</form>
					<div ref={this.examQuestions} className="exam-results" />
					<div className="container-retry">
						<button ref={this.retryExam} className="retry-btn hide" onClick={this.reloadExam}>
							Try Again
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const validate = formValues => {
	const errors = {};

	const errorMessage = 'You must enter a value';

	if (!formValues.strongestAvenger) {
		errors.strongestAvenger = errorMessage;
	}

	if (!formValues.spidermanHome) {
		errors.spidermanHome = errorMessage;
	}

	if (!formValues.hulkName) {
		errors.hulkName = errorMessage;
	}

	if (!formValues.ironManMovies) {
		errors.ironManMovies = errorMessage;
	}

	if (!formValues.infinityStones) {
		errors.infinityStones = errorMessage;
	}

	if (!formValues.thanosWorld) {
		errors.thanosWorld = errorMessage;
	}

	if (!formValues.bows) {
		errors.bows = errorMessage;
	}
	if (!formValues.starkFamily) {
		errors.starkFamily = errorMessage;
	}

	if (!formValues.computerGame) {
		errors.computerGame = errorMessage;
	}

	if (!formValues.elizabethOlsen) {
		errors.elizabethOlsen = errorMessage;
	}

	return errors;
};

export default reduxForm({
	form: 'questionForm',
	validate
})(QuestionForm);
