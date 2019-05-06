import { combineReducers } from 'redux';

const questionReducer = () => {
	return [
		{
			id: 1,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 2,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 3,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 4,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 5,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 6,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 7,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 8,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 9,
			question: 'Who is the strongest Avenger?'
		},
		{
			id: 10,
			question: 'Who is the strongest Avenger?'
		}
	];
};

const selectedQuestionReducer = (selectedQuestion = null, action) => {
	if (action.type === 'QUESTION_SELECTED') {
		return action.payload;
	}
	return selectedQuestion;
};

export default combineReducers({
	questions: questionReducer,
	selectedQuestion: selectedQuestionReducer
});
