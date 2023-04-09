import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders list Items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3); 
});
test('sum should be 15', () => {
  render(<App />);
  const sum = screen.getByTitle('sum');
  expect(sum.textContent).toBe("15"); 
});
