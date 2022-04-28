import { useState } from 'react'
import QRCode from 'qrcode'


function App() {
  const [url, setUrl] = useState('')
  const [qr, setQr] = useState('')

  const GenerateQrCode = () => {
    QRCode.toDataURL(url,{
      width: 800,  
      margin:2,
      color: {
        dark: '#335383FF',
        light: 'EEEEEEFF'
      }
    }, (err, url) => {
      if(err) return console.error(err)

      setQr(url)
    })
  }

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input 
         type="text" 
         placeholder='e.g. https://google.com'
         value={url}
         onChange={evt => setUrl(evt.target.value)}/>
      <button onClick={GenerateQrCode}>Generate</button>   
      {  qr && <>
         <img src={qr}  />
         <a href={qr} download="qrcode.png">Download</a>
         </>}
    </div>
  )
}

export default App
