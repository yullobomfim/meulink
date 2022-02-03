import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/menu'

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Link Logo" />
        <h1>Home</h1>
        <span> Cole um link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color='#FFF' />
          <input placeholder='Cole seu link aqui' />
        </div>
        <button>Encurtar Link</button>
      </div>
      <Menu/>
    </div>
  )
}
