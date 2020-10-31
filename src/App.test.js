import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';
import Home from './containers/Home/Home'

test('renders home container', () => {
  render(<Home />);
  const text = screen.getByText(/TRIVIA TRAINER!/i);
  expect(text).toBeInTheDocument();
});
