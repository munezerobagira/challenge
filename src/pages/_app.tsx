import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import StoreProvider from '../store/StoreProvider';

import '../styles/global.scss';
const client = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </StoreProvider>
  );
}
