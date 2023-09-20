import * as Ably from 'ably';
import { AblyProvider, useChannel, usePresence } from 'ably/react'
import { useState } from 'react';

function App() {

  const client = new Ably.Realtime.Promise ({ authUrl: '/api/token' });

  const [isOnline, setIsOnline] = useState<boolean>(true);

  return (
    <AblyProvider client={client} >
      <Messages />
      { isOnline && <Presence /> }
      <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => { setIsOnline(!isOnline)}}>Toggle Presence</button>
    </AblyProvider>
    )
}
export default App;

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
  const peers = presenceData.map((msg, index) => <li key={msg.id}>{msg.clientId}: {msg.data}</li>);

  return (
    <div>
      <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => { updateStatus('new status') }}>Update Presence</button>
      <ul>
        {peers}
      </ul>
    </div>
  )
}