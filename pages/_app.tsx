import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Navigation from '../frontend/components/organisms/o-navigation';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <>
      <Navigation isOpen setIsOpen={() => setIsOpen(!isOpen)} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
