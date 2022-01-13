import { render, screen } from '@testing-library/react';
import App from './views/App';

test('renders header component in App', () => {
  render(<App />);
  const nameElement = screen.getByText(/salim vazquez solis/i);
  expect(nameElement).toBeInTheDocument();
  const jobElement = screen.getByText(/backend dev/i);
  expect(jobElement).toBeInTheDocument();
});


test('renders about section in App', () => {
  render(<App />);
  const aboutElement = screen.getAllByText(/acerca de mi/i);
  expect(aboutElement.length).toBe(1);
});