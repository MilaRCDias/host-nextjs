import '@/styles/globals.css';
import type {AppProps} from 'next/app';

import {ShellProvider} from '@medlify/platform.shell';
const theme = {color: 'red'} as any;

export default function App({Component, pageProps}: AppProps) {
  return (
    <ShellProvider
      tenantId="app-custom"
      persistOpts={{name: 'app-custom '}}
      theme={theme}
    >
      <Component {...pageProps} />
    </ShellProvider>
  );
}
