import { questionReducer } from '../index';

describe('Question Reducer', () => {
	it('returns an array of objects', () => {
		expect(questionReducer()).toBeTruthy();
	});
});
