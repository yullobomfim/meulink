import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/menu'
import { useState} from 'react';


export default function Home() {
const [link, setLink] = useState('');

  function handleShortLink(){
    alert( "My link is "+ link)
  }
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Link Logo" />
        <h1>Home</h1>
        <span> Paste your link to shorten</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color='#FFF' />
          <input 
          placeholder='Paste your link here' 
          value={link}
          onChange={ (e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Shorten link</button>
      </div>
      <Menu/>
    </div>
  )
}
