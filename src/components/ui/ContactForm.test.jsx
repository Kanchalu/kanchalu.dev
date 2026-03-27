/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactForm from './ContactForm';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('ContactForm Component', () => {
  
  it('should show validation errors when submitting an empty form', async () => {
    render(
      <BrowserRouter>
        <ContactForm />
      </BrowserRouter>
    );

    const submitBtns = screen.getAllByRole('button', { name: /submit/i });
    fireEvent.click(submitBtns[0]);

    const errorMessages = await screen.findAllByText(/required/i);
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  it('should display the loading state when a valid form is submitted', async () => {
    render(
      <BrowserRouter>
        <ContactForm />
      </BrowserRouter>
    );

    // 1. Fill the form (using [0] to handle Framer Motion ghosts)
    const nameInputs = screen.getAllByPlaceholderText(/full name/i);
    fireEvent.change(nameInputs[0], { target: { value: 'Given Kanchalu' } });
    
    const emailInputs = screen.getAllByPlaceholderText(/professional email/i);
    fireEvent.change(emailInputs[0], { target: { value: 'test@kalu.com' } });

    const select = screen.getAllByRole('combobox');
    fireEvent.change(select[0], { target: { value: 'Technical ICT Consultation' } });

    const messageInputs = screen.getAllByPlaceholderText(/describe your project/i);
    fireEvent.change(messageInputs[0], { target: { value: 'Hex Softwares Project' } });

    // 2. Click Submit
    const submitBtns = screen.getAllByRole('button', { name: /submit/i });
    fireEvent.click(submitBtns[0]);

    // 3. FIX: Specifically look for the "Processing..." text 
    // This ignores the "Submit" text on the button itself
    const loadingText = await screen.findByText(/processing/i);
    expect(loadingText).toBeInTheDocument();
  });
});