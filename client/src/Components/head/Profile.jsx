import React from 'react'
import "./Header.css"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {auth,provider} from "../../config"
import { Link } from 'react-router-dom';

function Profile({name,email,photoURL}) {

    function openDialouge(){
        document.getElementById("dialouge").classList.remove("hide");

        document.getElementById("dialouge").addEventListener("mouseleave",()=>{
            document.getElementById("dialouge").classList.add("hide");
        })
    }

    function signOut(){
        auth.signOut();
        window.location.reload();
    }
    
  return (
    <>
    
        <div className='profile-div'>
            <div>
                <a onClick={openDialouge} className='profile-link'>
                    <img className='profile-image' src={photoURL} />
                </a>    
            </div>
        </div>

        <div id="dialouge" className='profile-container hide'>
             <ul>
                <li>
                    <div className='list-icons'>
                        <Person2OutlinedIcon style={{width:"35px",height:"30px",color:"rgba(0, 0, 0,0.5)",transform:"translateY(-5px)"}}/>
                    </div>
                    <div className='ellipes-div'>
                        <a className='icon-link'>{name}</a>
                    </div>

                </li>
                <li>
                    <div className='list-icons'>
                        <BookmarkAddOutlinedIcon style={{width:"35px",height:"30px",color:"rgba(0, 0, 0,0.5)",transform:"translateY(-5px)"}}/>
                    </div>
                    <div className='ellipes-div'>
                        <a className='icon-link'>Library</a>
                    </div>
                </li>
                <li>
                    <Link to="/mystories" style={{display:"flex"}}>
                        <div className='list-icons'>
                            <LibraryBooksOutlinedIcon style={{width:"35px",height:"30px",color:"rgba(0, 0, 0,0.5)",transform:"translateY(-5px)"}}/>
                        </div>
                        <div className='ellipes-div'>
                            <a className='icon-link'>Story</a>
                        </div>
                    </Link>
                </li>
                <li className='sign-out' onClick={signOut}>
                    <div className='list-icons'>
                        <ExitToAppOutlinedIcon style={{width:"35px",height:"30px",color:"rgba(0, 0, 0,0.5)",transform:"translateY(-5px)"}}/>
                    </div>
                    <div className='ellipes-div'>
                        <a className='icon-link'>Sign out</a>
                    </div>
                </li>
             </ul>

        </div>
    </>
  )
}

export default Profile