import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'
//import { AblyProvider } from '@ably-labs/react-hooks'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <AblyProvider options={ { authUrl:'/api/v1' } }>
  <App />
  // </AblyProvider>
  
  // I'd prefer to be able to use StrictMode, but right now it fails.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  )

  // This is the template default
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // This does not work correctly - the Ably connection drops
  // <React.StrictMode>
  // <AblyProvider options={ { key: 'my-key', clientId: 'me' } }>
  //   <App />
  // </AblyProvider>
  // </React.StrictMode>

  // This seems to work correctly
  //<React.StrictMode>
  // <AblyProvider client={ client } }>
  //   <App />
  // </AblyProvider>
  //</React.StrictMode>

  //import * as Ably from 'ably';
//import { AblyProvider } from '@ably-labs/react-hooks'

// const options = { 
//   key: "fqOR-g.V8I2qw:Xfy4MTKbVqFDE4oKjDuV2SyCxAKrQcdJC3GrO1cmwFg", 
//   clientId: "me"
// }

// const client = new Ably.Realtime.Promise({
//   key: "fqOR-g.V8I2qw:Xfy4MTKbVqFDE4oKjDuV2SyCxAKrQcdJC3GrO1cmwFg", 
//   clientId: "me"
// });

// const options = {
//   authUrl:'/api/authentication/token-auth'
// }

