import React,{useContext} from 'react';
import './Header.css';
import logo from "../../images/medium.png"
import { UserContext } from '../../App';
import Profile from './Profile';

function Header() {
  const {user,setUser}=useContext(UserContext);
  function openSignInBox(){
    const ele=document.getElementById("login");
    ele.classList.remove('hide');
    const website=document.getElementById('website-section');
    website.classList.add('fade')
  }
  return (
    <div className='header-div'>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Medium Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a className="hidden" href="/our_story">Our Story</a></li>
            <li><a className="hidden" href="/membership">Membership</a></li>
            <li><a className="hidden" href="/write">Write</a></li>
            
            {(user.name==="")?
            (<li>
              <button className='button head-button' onClick={openSignInBox}>Sign In</button>
            </li>):<Profile  name={user["name"]} email={user["email"]} photoURL={user["photoURL"]}/>}
          
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;