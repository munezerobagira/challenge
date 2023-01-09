import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { FC } from 'react';
import { act } from 'react-test-renderer';
import { useHotelInfiniteScroll } from '../../../src/hooks';
const client = new QueryClient();
type wrapperProps = {
  children: JSX.Element | JSX.Element[];
};
const Wrapper = ({ children }: wrapperProps) => (
  <>
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  </>
);
jest.mock('IntersectionObserver', () => {
  return jest.fn().mockImplementation(() => {
    return {
      observe: jest.fn(),
      disconnect: jest.fn(),
    };
  });
});
describe('useHotelInfiniteScroll hook', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should make a network request and update the store when isVisible is true', async () => {
    // Create a mock ref object
    const ref = { current: null };

    // Mock the fetch API's response
    fetchMock.mockResponseOnce(JSON.stringify({ pages: [[{ id: 1 }, { id: 2 }], [{ id: 3 }]] }));

    // Render the hook and pass the mock ref object as an argument
    const { result } = renderHook(() => useHotelInfiniteScroll(ref), { wrapper: Wrapper });

    // Simulate the hook's isVisible state being set to true
    act(() => {
      result.current.setIsVisible(true);
    });

    // Wait for the hook to make a network request and update the store
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    // Assert that the hook has updated the store's hotels state and is no longer isFetching
    expect(result.current.hotels).toHaveLength(3);
    expect(result.current.isFetching).toBe(false);
  });
});
