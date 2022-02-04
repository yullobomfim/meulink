import { useState } from 'react';
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/menu'
import LinkItem from '../../components/link-item'
import api from '../../services/api';

export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);
      setLink('');


    } catch {
      alert(' Something went wrong please try again')
      setLink('');
    }

  }
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Link Logo" />
        <span> Paste your link to shorten</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color='#FFF' />
          <input
            placeholder='Paste your link here'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Shorten link</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem 
        closeModal={() => setShowModal(false)}
        content={data}
        />
      )}

    </div>
  )
}
