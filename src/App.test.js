import { render, screen } from '@testing-library/react';
import Home from './containers/Home/Home'

test('renders home container', () => {
  render(<Home />);
  const welcome = screen.getByText(/TRIVIA TRAINER!/i);
  expect(welcome).toBeInTheDocument();
});
