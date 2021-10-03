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
  const aboutElement = screen.getByText(/acerca de mi/i);
  expect(aboutElement).toBeInTheDocument();
  const readMoreElement = screen.getAllByText(/read more/i);
  expect(readMoreElement.length).toBe(2);
});

test('renders services component in App', () => {
  render(<App />);
  const titleServiceElement = screen.getByText(/what is lorem ipsum/i);
  expect(titleServiceElement).toBeInTheDocument();
  const titleCardOneElement = screen.queryAllByText(/where does it come from/i);
  expect(titleCardOneElement.length).toBe(2);
  const titleCardTwoElement = screen.getAllByText(/why do we use it/i);
  expect(titleCardTwoElement.length).toBe(2);
  const titleCardThreeElement = screen.getByText(/where can i get some/i);
  expect(titleCardThreeElement).toBeInTheDocument();
  const titleCardFourElement = screen.getByText(/the standard lorem ipsum/i);
  expect(titleCardFourElement).toBeInTheDocument();
});