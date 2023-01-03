import { Inter } from '@next/font/google';
import Header from '../components/Header/Header';
import HTMLHead from '../components/HTMLHead';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HTMLHead title="Hotel&co" description="Hotel reservation website" />
      <Header title="Show total prices" link="/totalprice" />
      <main className="">
        <h1>Hello from Hotel&co</h1>
      </main>
    </>
  );
}
