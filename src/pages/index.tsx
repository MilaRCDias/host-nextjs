import dynamic from 'next/dynamic';
import Head from 'next/head';
import {Suspense} from 'react';
import styled, {css} from 'styled-components';

import {useShellStore} from '@medlify/platform.shell';


const RemoteNxApp = dynamic(() => import('remoteNx/remoteNx'), {
  suspense: true,
});
/* const RemoteRCTApp = dynamic(() => import('RemoteRCT/App'), {
  suspense: true,
});
 */

const StyledBtn = styled.button`
  ${({theme}: any) => css`
    background-color: ${theme.color};
    padding: 16px;
    width: 80px;
  `}
`;

export default function Home() {
    const tenantId = useShellStore((state) => state.tenantId);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '40px',
            color: 'lightgreen',
            border: '1px dashed green',
            padding: '60px',
          }}
        >
          <h1>Host next.js</h1>
          <StyledBtn /* onClick={() => setTenantId('Another ID')} */>style button host</StyledBtn>

          <span>Host global store: {tenantId}</span>
        </div>
        <div>
          <p>------------below--remote------</p>
        </div>
        <div>
          <Suspense>
            <RemoteNxApp />
          </Suspense>
        </div>
        {/*      <div>
          <Suspense>
          <RemoteRCTApp />
          </Suspense>
        </div> */}
      </main>
    </>
  );
}
