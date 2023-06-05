import React,{useContext, useState} from 'react'
import "./SignIn.css"
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '../../images/google.png';
import FacebookIcon from '../../images/facebook.png';
import MailIcon from '../../images/mail.png';
import Media from './Media';
import { UserContext } from '../../App';

function SignIn() {

    const {user,setUser}=useContext(UserContext);


    function closeSignInBox(){
        const ele=document.getElementById("login");
        ele.classList.add('hide');
        const website=document.getElementById('website-section');
        website.classList.remove('fade');
    }
    function alreadyUser(){
        document.getElementById("login-heading").innerHTML="Welcome Back."
        document.getElementById("extra2").classList.remove('hide');
        document.getElementById("extra1").classList.add('hide');
        
    }
    function notAUser(){
        document.getElementById("login-heading").innerHTML="Join Medium."
        document.getElementById("extra2").classList.add('hide');
        document.getElementById("extra1").classList.remove('hide');

    }
    function openMediaOptions(){
        document.getElementById("media-options").classList.remove('hide');
        document.getElementById("email-options").classList.add('hide');
    }

    function openEmailOptions(){
        document.getElementById("media-options").classList.add('hide');
        document.getElementById("email-options").classList.remove('hide');
    }

  return (
    <center>
        <div id="login" className='login login-design hide'>
            <p className='cross' onClick={closeSignInBox}>
                <CloseIcon />
            </p>

            <div id="media-options" className='login-content'>
                <center>
                    <p id="login-heading" className='login-heading'>Join Medium.</p>
                </center>
                
                <Media GoogleIcon={GoogleIcon} FacebookIcon={FacebookIcon} MailIcon={MailIcon} openEmailOptions={openEmailOptions} user={user} setUser={setUser} closeSignInBox={closeSignInBox}/>

                <center>
                    <p id="extra1" className='login-txt'>Already have an account? <a onClick={alreadyUser} style={{color:"green",cursor:"pointer"}} >Sign in</a></p>
                    <p id="extra2" className='login-txt hide'>Don't have an account? <a onClick={notAUser} style={{color:"green",cursor:"pointer"}} >Sign up</a></p>
                </center>

                <center>
                    <p className='login-foot'>Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
                </center>

            </div>

            <div id="email-options"className='login-email hide'>
                <center>
                    <p id="login-heading" className='login-heading'>Sign up with email.</p>
                </center>
                
                <p className='email-heading-text'>Enter your email address to create an account.</p>
                <br/>
                <center>
                    <p style={{fontSize:"13px"}}>Your Email</p>
                    <input className='email-text-box' type='email' required/>
                </center>

                <br/>

                <center>
                    <button className='button home-button'>Continue</button>
                </center>

                <br/>
                <br/>
                <center>
                    <a onClick={openMediaOptions} style={{cursor:"pointer",color:"green",fontSize:"13px"}}>&lt; All sign up options</a>
                </center>

            </div>
        </div>
    </center>
  )
}

export default SignIn;