import './menu.css';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' href='https://www.instagram.com/yullobomfim/'>
                <BsInstagram color='#FFF' size={24} />
            </a>
            <a className='social' href='https://www.facebook.com/yullo.bomfim/'>
                <BsFacebook color='#FFF' size={24} />
            </a>
            <a className='social' href='https://www.youtube.com/channel/UCV5EGDnKEC3SDEU1Um6h1xQ'>
                <BsYoutube color='#FFF' size={24} />
            </a>
            <Link className="menu-item" to="/links">
                My Links
            </Link>
        </div>
    )
}