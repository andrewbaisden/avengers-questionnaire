// Action creator
export const selectQuestion = question => {
	// Return an action
	return {
		type: 'QUESTION_SELECTED',
		payload: question
	};
};
