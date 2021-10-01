import { render, screen } from '@testing-library/react';
import App from './views/landing/App';

test('renders sidebar component in App', () => {
  render(<App />);
  const nameElement = screen.getByText(/salim vazquez solis/i);
  expect(nameElement).toBeInTheDocument();
  const jobElement = screen.getByText(/backend dev/i);
  expect(jobElement).toBeInTheDocument();
});


test('renders about component in App', () => {
  render(<App />);
  const aboutElement = screen.getByText(/this is a bootstrap v4.2.1 CSS Template/i);
  expect(aboutElement).toBeInTheDocument();
});