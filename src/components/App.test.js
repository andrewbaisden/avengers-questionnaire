import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from '../reducers';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={createStore(reducers)}>
			<App />
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

describe('It does a calculation', () => {
	it('sums up', () => {
		expect(2).toEqual(3);
		expect(1).toEqual(4);
		expect(2).toEqual(8);
	});
});
