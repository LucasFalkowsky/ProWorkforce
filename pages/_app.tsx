import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Navigation from '../frontend/components/organisms/o-navigation';
import variables from '../frontend/styles/variables.module.scss';
import { getAntDesignColor } from '@/frontend/styles/colors';
import { Colors } from '@prisma/client';
import { useTranslation } from 'react-i18next';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const bg = getAntDesignColor(Colors.NEUTRAL)[0];

  return (
    <div style={{ display: 'block', width: '100vw', minHeight: '100vh', overflow: 'hidden', backgroundColor: bg }}>
      <Navigation isOpen={isOpen} setIsOpen={() => { setIsOpen(!isOpen) }} />
      <div style={{ marginLeft: `${isOpen ? t("o-navigation-width") : '47px'}`, padding: `${variables.paddingXXHuge} ${variables.paddingLarge}`, minHeight: '100vh' }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
