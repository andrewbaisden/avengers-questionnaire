import { selectQuestion } from '../index';

describe('Function Select Question', () => {
	it('returns a payload', () => {
		expect(selectQuestion()).toBeTruthy();
	});
});
