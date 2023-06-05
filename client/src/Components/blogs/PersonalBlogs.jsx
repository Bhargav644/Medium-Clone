import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios';
import { UserContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import "./PersonalBlogs.css"

function PersonalBlogs() {
  const {user,setUser}=useContext(UserContext);
  const [myBlogs,setMyBlogs]=useState({});
  const navigate = useNavigate();

  useEffect(() => {

        if(user.email===""){
            navigate("/")
        }
        else{
            axios.post("/mystories",{email:user.email}).then((response) => {
                // setMyBlogs(response)
                setMyBlogs(response.data);
            }).catch((error) => {
                console.error(error);
            })
        }
  }, [])
  
  return (
    <div className='personal-blogs'>
        <div className='pb-heading'>
            <p style={{fontWeight:"600"}}>Your Blogs</p>
            <p style={{textAlign:"right",transform:"translateY(-10px)"}}>
                <Link to="/write" >
                    <button className='button home-button' style={{backgroundColor:"green",borderColor:"green"}}>Write a story</button>
                </Link>
            </p>
        </div>

        <div className='pb-all-blogs'>
            {
                Object.keys(myBlogs).map((key,index) =>{
                    const blog=myBlogs[key];
                    return (
                        <>
                            <Link key={index} to={`/blog/${blog['_id']}`} className='pb-blog'>
                                <div  className="pb-blog-div" style={{height:"210px"}}>
                                    <p className='blog-heading'>{blog['title']}</p>
                                    <p claasName="blog-body">{blog['body']}</p>
                                </div>
                            </Link>
                            <hr/>
                        </>
                    )

                })
            }

        </div>
    </div>
  )
}

export default PersonalBlogs