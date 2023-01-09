import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../../src/pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
const Wrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Home', () => {
  it('render link to profile the about page', () => {
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    // const heading = screen.getByRole('heading', {
    //   name: /Hello from Hotel\&co/i,
    // });
    // expect(heading).toBeInTheDocument();
  });
});
