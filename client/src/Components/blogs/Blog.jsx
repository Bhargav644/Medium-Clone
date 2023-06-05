import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PersonalBlogs.css"
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Blog() {
  
  const {user,setUser}=useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const[blog,setBlog]=useState({});

  useEffect(() => {
    if(user.email===""){
        navigate("/")
    }
}, [])
  
  useEffect(() => {
    axios.get("/blog/"+id).then((res)=>{
      setBlog(res.data[0]);
    });
  }, [id])


  

  return (
    <div className='write-content'>
        <div className='blog-profile'>
            <p><img className='profile-image' src={user.photoURL} /></p>
            <p className='blog-profile-text'>{user.name}</p>
        </div>
        <div className='blog-box'>
            <div class="vl"></div>
            <div className="blog-container">
              <div className='write-title'>
                <p type="text" className='input-heading'>{blog['title']}</p>
              </div>
              <div className="write-body">
                <p type="text" className='input-body'>{blog.body}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Blog