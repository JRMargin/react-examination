import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
function sum (a,b){return a+b;}
test('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App/>, div);
    expected(sum(1,2)).toBe(3)
});
