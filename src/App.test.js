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
  const aboutElement = screen.getAllByText(/acerca de mi/i);
  expect(aboutElement.length).toBe(2);
  const readMoreElement = screen.getAllByText(/read more/i);
  expect(readMoreElement.length).toBe(2);
});

test('renders services component in App', () => {
  render(<App />);
  const titleServiceElement = screen.getByText(/capacidad de análisis e investigación/i);
  expect(titleServiceElement).toBeInTheDocument();
  const titleCardOneElement = screen.getByText(/capacidad para tomar decisiones y resolver problemas/i);
  expect(titleCardOneElement).toBeInTheDocument();
  const titleCardTwoElement = screen.getByText(/capacidad de adaptarse a nuevos entornos de trabajo/i);
  expect(titleCardTwoElement).toBeInTheDocument();
  const titleCardThreeElement = screen.getByText(/capacidad de organización y planificación/i);
  expect(titleCardThreeElement).toBeInTheDocument();
});