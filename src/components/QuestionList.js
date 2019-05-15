import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';

class QuestionList extends Component {
	renderList() {
		return (
			<div>
				<QuestionForm examQuestions={this.props.questions} />
			</div>
		);
	}
	render() {
		return (
			<React.Fragment>
				<div />
				<div>{this.renderList()}</div>
			</React.Fragment>
		);
	}
}

export const mapStateToProps = state => {
	// console.log(state);
	return { questions: state.questions };
};

export default connect(mapStateToProps)(QuestionList);
