import React, { useState,useEffect,useContext} from 'react'
import "./SignIn.css"
import {auth,provider} from "../../config"
import {signInWithPopup} from "firebase/auth"
import googleOneTap from "google-one-tap";
import FacebookLogin from "react-facebook-login"



const options={
    client_id:process.env.REACT_APP_GOOGLE_CLIENT_ID,
    auto_select:false,
    cancel_on_tap_outside:false,
    context:"signin"
}




function Media({GoogleIcon, FacebookIcon, MailIcon,openEmailOptions,user,setUser,closeSignInBox}) {


    
    useEffect(() => {
        auth.onAuthStateChanged((currUser)=>{
            if(currUser!==null){
                setUser({
                    'name':(currUser.displayName)?currUser.displayName:"",
                    'email':(currUser.email)?currUser.email:"",
                    "photoURL":(currUser.photoURL)?currUser.photoURL:"",
                })
            }
            else{
                googleOneTap(options, async (res) => {
                    const response=await fetch("/api/google-onetap-login",{
                        method:"POST",
                        body:JSON.stringify({
                            token:res.credential,
                        }),
                        headers:{
                            "Content-Type": "application/json",
                        }
                    });
                    const data=await response.json();
                    setUser({
                        'name':data.name,
                        'email':data.email,
                        "photoURL":data.picture,
                    })
                });
            }
        })
    }, []);
    
    function handleGoogleSignIn(){
            signInWithPopup(auth,provider).then((data)=>{

                setUser({
                    "name":data.user.displayName,
                    "email":data.user.email,
                    "photoURL":data.user.photoURL
                });
                closeSignInBox();
                fetch("/api/google-popup-login",{
                    method:"POST",
                    body:JSON.stringify({name:data.user.displayName,email:data.user.email,photoURL:data.user.photoURL}),
                    headers:{
                        "Content-Type": "application/json",
                    }
                }).then((response)=>{
                    const data=response.json();
                })
            }).catch((err)=>{
                console.error(err);
            });
    }
    function handleFacebookSignIn(data){
        // console.log(data);
    }

  

  return (
    <>
        <div className='login-media'>
            <center>
                <button onClick={handleGoogleSignIn} className='login-media-button'>
                    <div className='login-first'>
                        <img className="media-image" src={GoogleIcon}/> 
                    </div>
                    <div className='login-second'>
                        Sign in with Google
                    </div>
                </button>
            </center>
            <center>
                <button onClick={()=>document.getElementsByClassName("metro")[0].click()} className='login-media-button'>
                    <div className='login-first'>
                        <img className="media-image" src={FacebookIcon}/>
                    </div>
                    <div className='login-second'>
                        Sign in with Facebook
                    </div>
                    <div hidden>
                        <FacebookLogin id="facebook-login" appId={process.env.REACT_APP_FACEBOOK_APP_ID} autoLoad={false} callback={handleFacebookSignIn}/>
                    </div>
                </button>
            </center>
            <center>
                <button onClick={openEmailOptions} className='login-media-button'>
                    <div className='login-first'>
                        <img className="media-image" src={MailIcon}/> 
                    </div>
                    <div className='login-second'>
                        Sign in with Mail
                    </div>
                </button>
            </center>
        </div>
        
    </>
  )
}

export default Media