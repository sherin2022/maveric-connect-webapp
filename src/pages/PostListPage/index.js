import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import FooterLogo from '../../images/maveric-logo-white.png'
import ProfileLogo from '../../images/default-profile-pic.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const PostListPage = (props) => {
  console.log(props)

  const[likeCount,setLikeCount] = useState(0);
  const[data,setData] = useState(props || {});
    const[error,setError] = useState(null);
    let navigate = useNavigate();

  useEffect(() => {

    axios
    
    .get(`http://localhost:8000/posts/${props.postId}`)
    
    .then((response) => {
    debugger
    setData(response.data);
      setError(null);
    })
    
    .catch((error) => {
    
    console.log(error);
    setError(error.message);
    
    });
    
    },[props.postId]);

   const handlePostClick =(e,postId)=>{
     e.preventDefault();
      navigate(`/post-details/${postId}`)
    
  }
        return(  
        
          <div>
          <div className="card w-75">
            <div  className='card-body' onClick={e=>handlePostClick(e,data.postId)}>
            <ListGroup.Item as="li" >  
          <div className='card-img-top'>
          <div class="d-flex justify-content-between">
            <div>
          <img src={ProfileLogo} width="50" height="50"></img>
           {data.post} 
           <div> {data.postedBy.firstName}  </div>   
           <div/>
           <div>
          <div>{data.commentsCount} Comment </div>
          <div> {data.likesCount} Likes</div>    
          </div>
          </div>
          </div>
          </div>
          </ListGroup.Item>
         </div>
         </div>
         </div>
        
        );
    }


export default PostListPage;

