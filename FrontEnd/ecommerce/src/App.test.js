import { render, screen } from '@testing-library/react';
import App from './App';
import mainWeb from './main';
test('renders learn react link', () => {
  render(<mainWeb />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
