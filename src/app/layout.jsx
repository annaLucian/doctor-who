'use client';
import StyledComponentsRegistry from './registry';
import GlobalStyle from './global.styles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="'https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap'"
        /> */}
      </head>
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
