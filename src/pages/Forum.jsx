import React, { useEffect, useState } from 'react'
import './forum.css'
import forum from '../images/forum.png'
import { FaHeart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../Firebase-config'

const Forum = ()=> {
    const [posts,setPost] = useState([]);
    const userdbRef = collection(db,"users")

    // const [input,setInput] = useState('');
    // const [currentPost,setCurrentPost] = useState('')

    useEffect(()=>{
        const getUsersPost = async () => {
            const data = await getDocs(userdbRef)
            console.log("data "+data);
        }
    },[])
    

    // const handleInput = (e) => {
    //     e.preventDefault();
    //     setInput(e.target.value);
    // }

    // const handlePost = (e) => {
    //     e.preventDefault();
    //     setCurrentPost(e.target.value);
    // }
    //  const handlepost = (e)=>{
    //     e.preventDefault();
    //     setPost([...posts,{posterName:input , postdata:currentPost}])
    //     setInput("")
    //     setCurrentPost("")
    //  }

     

    // useEffect(()=>{
            
    //  "" && setPost([...post,{posterName:input , postdata:currentPost}]) 
        
    // },[input,currentPost])
    
    
  return (
    <div className='main-forum' id='Post'>
          <div className='posts'>
           <h3>All Posts</h3>
           <div className='boxes'>
           {/* {
               posts.map((post,index)=>{
                   return(
                       <div className='box' key={index}>
                           <div className="part">
                              <div>
                              <span className='user'><FaUser/></span>
                              </div>
                              <div className='data'>
                            <h4>{post.posterName}</h4>
                             <p>{post.postdata} </p>
                             </div>
                            </div>
                       </div>
                   )
               })
           } */}
           </div>
       </div>
       <div className='forum'>
       <img src={forum} alt="" />
       {/* <form className='post-form'>
           <h3>Majiran arin halis aad la kulantay</h3>
           <label>Name:</label>
           <input 
           type='text'
           value={input}
           onChange={handleInput}
           
           />
           <div className='post'>
           <textarea 
           placeholder='Post'
           value={currentPost}
           onChange={handlePost}
           />
           </div>
           <button 
           className='btn btn-post'
           onClick={handlepost}
           >Post</button>
       </form> */}
     
       </div>
    </div>
  )
}

export default Forum