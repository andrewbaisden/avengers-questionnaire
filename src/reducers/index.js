import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const questionReducer = () => {
	return [
		{
			id: 1,
			question: 'Who is the strongest Avenger?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Thor',
					correct: true
				},
				answerTwo: {
					id: 2,
					answer: 'Captain Marvel',
					correct: false
				}
			}
		},
		{
			id: 2,
			question: 'What city is Spiderman from?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'New York',
					correct: true
				},
				answerTwo: {
					id: 2,
					answer: 'California',
					correct: false
				}
			}
		},
		{
			id: 3,
			question: 'What is the Hulks real name?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Edward Connor',
					correct: false
				},
				answerTwo: {
					id: 2,
					answer: 'Bruce Banner',
					correct: true
				}
			}
		},
		{
			id: 4,
			question: 'How many Iron Man Movies have there been?',
			answers: {
				answerOne: {
					id: 1,
					answer: '3',
					correct: true
				},
				answerTwo: {
					id: 2,
					answer: '4',
					correct: false
				}
			}
		},
		{
			id: 5,
			question: 'How many infinity stones are there?',
			answers: {
				answerOne: {
					id: 1,
					answer: '7',
					correct: true
				},
				answerTwo: {
					id: 2,
					answer: '6',
					correct: false
				}
			}
		},
		{
			id: 6,
			question: 'What planet is thanos from?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Mandalore',
					correct: false
				},
				answerTwo: {
					id: 2,
					answer: 'Titan',
					correct: true
				}
			}
		},
		{
			id: 7,
			question: 'What is the name of the character, played by the actor Jeremy Renner?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Hawkman',
					correct: false
				},
				answerTwo: {
					id: 2,
					answer: 'Hawkeye',
					correct: true
				}
			}
		},
		{
			id: 8,
			question: 'What is the name of the, Stark Family butler?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Jarvis',
					correct: true
				},
				answerTwo: {
					id: 2,
					answer: 'Alfred',
					correct: false
				}
			}
		},
		{
			id: 9,
			question: 'What computer game was Thor, playing in Avengers: Endgame?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Apex Legends',
					correct: false
				},
				answerTwo: {
					id: 2,
					answer: 'Fortnie',
					correct: true
				}
			}
		},
		{
			id: 10,
			question: 'What is the name of the character, played by the actress Elizabeth Olsen?',
			answers: {
				answerOne: {
					id: 1,
					answer: 'Jean Grey',
					correct: false
				},
				answerTwo: {
					id: 2,
					answer: 'Scarlet Witch',
					correct: true
				}
			}
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
	selectedQuestion: selectedQuestionReducer,
	form: formReducer
});
