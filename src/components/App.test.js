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
		expect(3).toEqual(9);
		expect(4).toEqual(6);
		expect(8).toEqual(1);
	});
});
