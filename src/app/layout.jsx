'use client';
import Header from '@/components/Header';
import GlobalStyle from './global.styles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Header />
        {children}
      </body>
    </html>
  );
}
