import { render, screen } from '@testing-library/react';
import DefaultHeader from './components/Headers/DefaultHeader';
import ButtonContact from './components/ButtonContact/ButtonContact';
import TabPaneOne from './components/TabPanels/TabPaneOne';
import TabPaneTwo from './components/TabPanels/TabPaneTwo';
import DefaultFooter from './components/Footers/DefaultFooter';

describe('Testing components in App view', () => {
  test('render header component', () => {
    render(<DefaultHeader />);
    expect(screen.getByText(/salim vazquez solis/i)).toBeInTheDocument();
    expect(screen.getByText(/backend dev/i)).toBeInTheDocument();
    expect(screen.queryByText('frontend dev')).toBeNull();
  });
  
  test('render contact button component', () => {
    render(<ButtonContact />);
    expect(screen.getByText(/CV/)).toBeInTheDocument();
  });

  test('render tabpane one component', () => {
    render(<TabPaneOne />);
    expect(screen.getByText(/Aptitudes/i)).toBeInTheDocument();
    expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
    expect(screen.getAllByText(/tecnología/i).length).toBe(2);
  });

  test('render tabpane two component', async () => {
    const apiMedium = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@salimvzqz';
    const response = await fetch(apiMedium)
    const responseJSON = await response.json()
    render(TabPaneTwo(responseJSON.items));
    expect(screen.getByText(/Blog/i)).toBeInTheDocument();
    expect(responseJSON.items.length).toBe(1);
  })

  test('render footer component', () => {
    render(<DefaultFooter />);
    expect(screen.getByText(/Código de esta página/i)).toBeInTheDocument();
    expect(screen.getByText(/Invision/i)).toBeInTheDocument();
    expect(screen.getByText(/Creative Tim/i)).toBeInTheDocument();
  });
});