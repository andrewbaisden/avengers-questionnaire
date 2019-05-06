import React, { Component } from 'react';
import QuestionList from './QuestionList';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Hello from React.js</h1>
				<QuestionList />
			</React.Fragment>
		);
	}
}

export default App;
