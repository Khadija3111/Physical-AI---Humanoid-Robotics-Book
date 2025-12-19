import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chatbot from '../index';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ response: 'Hello there!' }),
    ok: true,
  })
);

describe('Chatbot', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders without crashing', () => {
    render(<Chatbot />);
    expect(screen.getByPlaceholderText('Ask a question...')).toBeInTheDocument();
  });

  test('allows user to type and send a message', async () => {
    render(<Chatbot />);
    const input = screen.getByPlaceholderText('Ask a question...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');

    fireEvent.click(sendButton);

    // Check that the user message appears
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(input.value).toBe('');

    // Wait for the bot response
    await waitFor(() => expect(screen.getByText('Hello there!')).toBeInTheDocument());
    
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
