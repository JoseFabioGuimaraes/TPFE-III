import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <li><Link to='/'>Inicial</Link></li>
            <li><Link to='/a-faculdade'>Faculdade</Link></li>
            <li><Link to='/Noticias'>Notícias</Link></li>
            <li><Link to='/dpo-lgpd'>DPO/LGPD</Link></li>
        </nav>
    </div>
  )
}

export default Navbar