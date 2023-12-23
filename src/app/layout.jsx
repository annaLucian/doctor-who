'use client';
import StyledComponentsRegistry from './registry';
import GlobalStyle from './global.styles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lato, Montserrat } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-lato',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
