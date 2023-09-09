import * as Ably from 'ably';
import { AblyProvider, useChannel, usePresence } from 'ably/react'
import { useState } from 'react';

function App() {

  const client = new Ably.Realtime.Promise ({ authUrl: '/api/token' });

  return (
    <AblyProvider client={client} >
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
  const { channel } = useChannel("ably-demo", (message: Ably.Types.Message) => {
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