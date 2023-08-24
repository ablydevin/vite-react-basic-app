//import { AblyProvider, useChannel } from '@ably-labs/react-hooks'
import { useChannel } from '@ably-labs/react-hooks'

function App() {
  // return (
  //   <AblyProvider options= {{ authUrl: '/authorize'}} >
  //     <Messages />
  //   </AblyProvider>
  //   )
  useChannel("foobar", (message) => {
    console.log(message)
  });
  return (<div></div>)
}
export default App;

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