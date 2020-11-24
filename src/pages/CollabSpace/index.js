import React, {useEffect, useState} from 'react'
import './CollabSpace.css'
import { useParams , Redirect , useHistory } from 'react-router-dom'
import styled from "styled-components"
import Sidebar from '../../comps/Sidebar'
import Authenticate from '../../comps/Authenticate/Authenticate'
import getSesion from '../../api/session/getSession'
import { useToken } from '../../hooks/useToken'
import CodeJar from '../../comps/CodeJar'
import createCodejar from '../../api/session/createCodejar'


const CollabSpacePage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #F5F5FB;
`

const CollabContent = styled.div`
  margin:20px 20px 20px 260px;
  width:calc(100% - 300px);
`

const Webcam1 = styled.div``;

const Webcam2 = styled.div``;

const Webcams = styled.div`
  width:100%;
  height:150px;
  display:flex;
  justify-content:center;
  align-items:center;
`;



export default function CollabSpace() {

  const {role , uuid} = useParams()

  const [session , setSession] = useState({})
  
  const [token] = useToken()

  const createWorkspace = async () => {
    return await createCodejar(token , session.uuid)
  }


  useEffect(() => {
    const fetch = async () => {
        const data = await getSesion(token , uuid)
        setSession(data)
    }
    fetch()
  } , [token])



  if(role === 'user'){
    return (
      <Authenticate>
        <CollabSpacePage>
          <Sidebar />
          <CollabContent>
            <Webcams>
                <Webcam1>
                  <video height="190px" src="https://r1---sn-nx5s7n7s.googlevideo.com/videoplayback?expire=1606208664&ei=OHi8X8DoM5nP1wLQ357wAw&ip=37.252.8.185&id=e08910daf9bd19c6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=qdkUAGsEhnj88J8cah79ScIF&gir=yes&clen=9540125&ratebypass=yes&dur=183.205&lmt=1606160203685199&fvip=1&c=WEB&txp=5510222&n=ER8G2wMsNdfbFsZ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMj7q9XMXU0GOmzwlusbHM8AehgvP9n_ybIKY4s3GujACIHLFgvgQXm21s7pULcXJghBhDw1dnsoOzGklHA4iYFMu&redirect_counter=1&rm=sn-5goll7e&req_id=79a7229ba8dfa3ee&cms_redirect=yes&ipbypass=yes&mh=Ng&mip=66.115.147.200&mm=31&mn=sn-nx5s7n7s&ms=au&mt=1606199798&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZqJOcXIN6tsW0aX1DcyR4BYt9mHbKhnHb-COhQAhg-8CIB8tqT5NtG9p5mJmJahvOP1NOBmbI6FIA4WHlBA3D8rI"/>
                </Webcam1>
                <Webcam2>
                  <video height="190px" src="https://r1---sn-nx5s7n7s.googlevideo.com/videoplayback?expire=1606208664&ei=OHi8X8DoM5nP1wLQ357wAw&ip=37.252.8.185&id=e08910daf9bd19c6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=qdkUAGsEhnj88J8cah79ScIF&gir=yes&clen=9540125&ratebypass=yes&dur=183.205&lmt=1606160203685199&fvip=1&c=WEB&txp=5510222&n=ER8G2wMsNdfbFsZ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMj7q9XMXU0GOmzwlusbHM8AehgvP9n_ybIKY4s3GujACIHLFgvgQXm21s7pULcXJghBhDw1dnsoOzGklHA4iYFMu&redirect_counter=1&rm=sn-5goll7e&req_id=79a7229ba8dfa3ee&cms_redirect=yes&ipbypass=yes&mh=Ng&mip=66.115.147.200&mm=31&mn=sn-nx5s7n7s&ms=au&mt=1606199798&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZqJOcXIN6tsW0aX1DcyR4BYt9mHbKhnHb-COhQAhg-8CIB8tqT5NtG9p5mJmJahvOP1NOBmbI6FIA4WHlBA3D8rI"/>
                </Webcam2>
            </Webcams>
            <CodeJar isTutor={session.isTutor} url={session.codejarPublicUrl} />
          </CollabContent>
        </CollabSpacePage>
      </Authenticate>
    )
  }else if(role === 'tutor'){

    return (
      <Authenticate>
        <CollabSpacePage>
          <Sidebar />
          <CollabContent>
            <Webcams>
                <Webcam1>
                  <video height="190px" src="https://r1---sn-nx5s7n7s.googlevideo.com/videoplayback?expire=1606208664&ei=OHi8X8DoM5nP1wLQ357wAw&ip=37.252.8.185&id=e08910daf9bd19c6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=qdkUAGsEhnj88J8cah79ScIF&gir=yes&clen=9540125&ratebypass=yes&dur=183.205&lmt=1606160203685199&fvip=1&c=WEB&txp=5510222&n=ER8G2wMsNdfbFsZ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMj7q9XMXU0GOmzwlusbHM8AehgvP9n_ybIKY4s3GujACIHLFgvgQXm21s7pULcXJghBhDw1dnsoOzGklHA4iYFMu&redirect_counter=1&rm=sn-5goll7e&req_id=79a7229ba8dfa3ee&cms_redirect=yes&ipbypass=yes&mh=Ng&mip=66.115.147.200&mm=31&mn=sn-nx5s7n7s&ms=au&mt=1606199798&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZqJOcXIN6tsW0aX1DcyR4BYt9mHbKhnHb-COhQAhg-8CIB8tqT5NtG9p5mJmJahvOP1NOBmbI6FIA4WHlBA3D8rI"/>
                </Webcam1>
                <Webcam2>
                  <video height="190px" src="https://r1---sn-nx5s7n7s.googlevideo.com/videoplayback?expire=1606208664&ei=OHi8X8DoM5nP1wLQ357wAw&ip=37.252.8.185&id=e08910daf9bd19c6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=qdkUAGsEhnj88J8cah79ScIF&gir=yes&clen=9540125&ratebypass=yes&dur=183.205&lmt=1606160203685199&fvip=1&c=WEB&txp=5510222&n=ER8G2wMsNdfbFsZ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMj7q9XMXU0GOmzwlusbHM8AehgvP9n_ybIKY4s3GujACIHLFgvgQXm21s7pULcXJghBhDw1dnsoOzGklHA4iYFMu&redirect_counter=1&rm=sn-5goll7e&req_id=79a7229ba8dfa3ee&cms_redirect=yes&ipbypass=yes&mh=Ng&mip=66.115.147.200&mm=31&mn=sn-nx5s7n7s&ms=au&mt=1606199798&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZqJOcXIN6tsW0aX1DcyR4BYt9mHbKhnHb-COhQAhg-8CIB8tqT5NtG9p5mJmJahvOP1NOBmbI6FIA4WHlBA3D8rI"/>
                </Webcam2>
            </Webcams>
            <CodeJar isTutor={session.isTutor} url={session.codejarAdminUrl} createWorkspace={createWorkspace} />
          </CollabContent>
        </CollabSpacePage>
      </Authenticate>
    )
  }else{
    return <Redirect to="/explore" />
  }
  
}
