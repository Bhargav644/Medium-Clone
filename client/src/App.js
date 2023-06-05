import React,{useEffect,createContext,useState} from 'react';
import Header from './Components/head/Header';
import MainContent from './Components/main/MainContent';
import Footer from './Components/foot/Footer';
import './App.css';
import Home from './Components/home/Home';
import SignIn from './Components/signin/SignIn';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Write from './Components/write/Write';
import PersonalBlogs from './Components/blogs/PersonalBlogs';
import Blog from './Components/blogs/Blog';


export const UserContext = createContext({});
function App() {
  const [user,setUser]=useState({
      'name':"",
      'email':"",
      "photoURL":""
  });


  return (
    <Router>
            <Routes>
            <Route path="/" exact element={
                    <>
                      <div className="app">
                        <UserContext.Provider value={{user,setUser}}>
                          <SignIn user={user} />

                          <section id="website-section">
                            <div className="head ycolor">
                              <div className='middle'>
                                  <Header  user={user} />
                              </div>
                              <hr className='line'/>
                              <div className='middle'>
                                  <Home/>
                              </div>


                            </div>

                            <div className='middle'>
                                <MainContent />
                                <Footer />
                            </div>
                          </section>

                        </UserContext.Provider>
                      </div>
                    </>
                }/>

                <Route path="/write" exact element={

                    <div className="app">
                        <UserContext.Provider value={{user,setUser}}>
                          <SignIn user={user} />

                          <section id="website-section">
                              <div className='middle'>
                                  <Header  user={user} />
                              </div>

                            <div className='middle'>
                                <Write user={user}/>
                            </div>
                          </section>

                        </UserContext.Provider>
                      </div>
                }/>
                
                  <Route path="/mystories" exact element={

                      <div className="app">
                          <UserContext.Provider value={{user,setUser}}>

                            <section id="website-section">
                                <div className='middle'>
                                    <Header  user={user} />
                                </div>

                              <div className='middle'>
                                  <PersonalBlogs user={user}/>
                              </div>
                            </section>

                          </UserContext.Provider>
                        </div>
                  }/>
                  <Route path="/blog/:id" exact element={
                      <div className="app">
                          <UserContext.Provider value={{user,setUser}}>

                            <section id="website-section">
                                <div className='middle'>
                                    <Header  user={user} />
                                </div>

                              <div className='middle'>
                                  <Blog user={user}/>
                              </div>
                            </section>

                          </UserContext.Provider>
                        </div>
                  }/>
            </Routes>
    </Router>
  );
}

export default App;