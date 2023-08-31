import { AblyProvider, useChannel, usePresence } from '@ably-labs/react-hooks'
import { useState } from 'react';

function App() {

  return (
    <AblyProvider options= { { authUrl: '/api/token'} } >
      <AblyPubSubChannels />
    </AblyProvider>
    )
}
export default App;

function AblyPubSubChannels() {

  const [isOnline, setIsOnline] = useState<boolean>(true);

  function presence() {
    return (isOnline) ? <Presence /> : <></>
  }

  return (
    <>
      <Messages />
      { presence() }
      <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => { setIsOnline(!isOnline)}}>Toggle Presence</button>
    </>
  )
}
function Messages() {
  const { channel } = useChannel("ably-demo", (message) => {
    console.log(message)
  });
  return (
    <div>
      <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => { channel.publish('world', 'hello world!')}}>Publish</button>
    </div>
  )
}

function Presence() {
  const { presenceData, updateStatus } = usePresence<string>("ably-demo", 'current status');
  const peers = presenceData.map((msg, index) => <li key={index}>{msg.clientId}: {msg.data}</li>);

  return (
    <div>
      <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => { updateStatus('new status') }}>Update Presence</button>
      <ul>
        {peers}
      </ul>
    </div>
  )
}

// Simplest Ably subscribe code
// function App() {
//   return (
//     <AblyProvider options= { { authUrl: '/api/v1'} } >
//       <Messages />
//     </AblyProvider>
//     )
// }
// export default App;

// function Messages() {
//   useChannel("foobar", (message) => {
//     console.log(message)
//   });
//   return (<div></div>)
// }



//import * as Ably from 'ably';

// const client = new Ably.Realtime.Promise({
//   key: "fqOR-g.V8I2qw:Xfy4MTKbVqFDE4oKjDuV2SyCxAKrQcdJC3GrO1cmwFg", 
//   clientId: "me"
// });


// import './App.css'

// <AblyProvider client = { client } >
// <Messages />
// </AblyProvider>