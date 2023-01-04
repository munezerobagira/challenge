import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../../src/pages/index';

describe('Home', () => {
  it('render link to profile the about page', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: /Hello from Hotel\&co/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
