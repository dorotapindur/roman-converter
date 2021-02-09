import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// TDD = TEST DRIVEN DEVELOPMENT
// 1. Failing test - red
// 2. Code - red
// 3. Passing test - green
//   3.5 Refactor - green
// 4. Failing test - red
// ...

// NO TEST = NO CODE

// DESIGN WHILE TESTING
// WRITE ENOUGH TO PASS THE TEST

/*
while (!done()) {
  red()
  green()
  refactor()
}
*/