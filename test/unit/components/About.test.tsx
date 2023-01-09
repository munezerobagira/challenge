import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../../src/components/About/About';

describe('Home', () => {
  it('render link to profile the about page', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: /Implemented by/i,
    });
    const linkToProfile = screen.getByRole('link', {
      name: /munezerobagira/,
    });

    expect(heading).toBeInTheDocument();
    expect(linkToProfile).toBeInTheDocument();
  });
});
