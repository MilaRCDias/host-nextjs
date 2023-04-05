import dynamic from 'next/dynamic';
import Head from 'next/head'
import {Suspense} from 'react';
const RemoteNxApp = dynamic(() => import('remoteNx/remoteNx'), {
  suspense: true,
});

export default function Home() {
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
        </div>
        <div>
          <p>------------below--remote------</p>
        </div>
        <div>
          <Suspense>
            <RemoteNxApp />
          </Suspense>
        </div>
      </main>
    </>
  );
}