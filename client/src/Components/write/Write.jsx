import React,{useContext,useEffect,useState} from 'react'
import { UserContext } from '../../App';
import "./Write.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Write() {
  const {user,setUser}=useContext(UserContext);
  const navigate = useNavigate();
    
  useEffect(() => {
        if(user.email===""){
            const ele=document.getElementById("login");
            const website=document.getElementById('website-section');
            ele.classList.remove('hide');
            website.classList.add('fade');
        }
        else{
          const ele=document.getElementById("login");
          const website=document.getElementById('website-section');
          ele.classList.add('hide');
          website.classList.remove('fade');
        }
  }, [user]);

  const [article,setArticle]=useState({
    "title":"",
    "body":"",
  });


  const writeArticle=async()=>{
    if(article.title=="" || article.body==""){
      alert("Empty fields are not allowed")
    }
    else{
      const res=await axios.post("/write",{...article,...user});
      if(res.message=="Success"){
        navigate("//mystories")
      }
    }
  }

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setArticle(prev=>({...prev,[name]:value}));
  }
  function autoResize1() {
    const textarea = document.getElementById('myTextarea1');
    textarea.style.height = 'auto'; // Reset the height to auto to calculate the new height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the new height
  }
  function autoResize2() {
    const textarea = document.getElementById('myTextarea2');
    textarea.style.height = 'auto'; // Reset the height to auto to calculate the new height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the new height
  }

  
  return (
    <div className='write-content'>
        <div className='write-publish'>
          <button className='button head-button publish-button' style={{float:"right",backgroundColor:"green",borderColor:"green"}} onClick={writeArticle}>Publish</button>
        </div>


        <div className="write-container">
          <div className="write-title">
            <textarea id="myTextarea1" type="text" className='input-heading' onInput={autoResize1} onChange={handleChange} data-gramm="false" data-gramm_editor="false" required autoComplete='off' name="title" placeholder='Title'data-enable-grammarly="false"/>
          </div>
          <div className="write-body">
            <textarea id="myTextarea2" type="text" className='input-body' onInput={autoResize2} onChange={handleChange} data-gramm="false" data-gramm_editor="false" required autoComplete='off' name="body" placeholder='Tell your story...'/>
          </div>
        </div>
    </div>
  )
}

export default Write