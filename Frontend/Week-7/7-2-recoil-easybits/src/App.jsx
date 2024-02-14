
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState} from 'recoil'
import { jobsAtom, messagingAtom,networkAtom, notificationAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
 const networkNotificationCount = useRecoilValue(networkAtom)
 const jobsAtomCount = useRecoilValue(jobsAtom)
 const notificationAtomCount = useRecoilValue(notificationAtom)
 const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom)

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>

      <button onClick={() => {
        setMessagingAtomCount(messagingAtomCount + 1);
      }}>Me</button>
    
    </>
  )
}

export default App


// just add this to test git