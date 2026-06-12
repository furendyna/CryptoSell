// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoSell title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoSell/i);
    expect(titleElement).toBeInTheDocument();
});
