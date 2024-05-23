/* eslint-disable no-unused-vars */

import internetCafe from '../assets/img/internetCafe.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

    <div className="left-column">
      <img src={internetCafe} className="logo" alt="Internet Cafe" />
    </div>

    <div className="right-column">
      <nav>
        <ul>
            <Link to="/pages/login">Login</Link>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Header