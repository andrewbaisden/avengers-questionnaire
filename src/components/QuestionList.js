import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';

class QuestionList extends Component {
	renderList() {
		// return this.props.questions.map(exam => {
		// 	return (
		// 		<div key={exam.id}>
		// 			<p>{exam.question}</p>
		// 		</div>
		// 	);
		// });
		return (
			<div>
				<QuestionForm />
			</div>
		);
	}
	render() {
		return (
			<React.Fragment>
				<div>
					<h2>Question List</h2>
				</div>
				<div>{this.renderList()}</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state);
	return { questions: state.questions };
};

export default connect(mapStateToProps)(QuestionList);
