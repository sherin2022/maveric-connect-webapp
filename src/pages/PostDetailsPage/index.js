import React from 'react';
import { useState,useEffect } from 'react';
import FooterLogo from '../../images/maveric-logo-white.png'
import ProfileLogo from '../../images/default-profile-pic.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const PostDetailsPage = (props) => {
  console.log(props)

  const[likeCount,setLikeCount] = useState(0);
  const[data,setData] = useState(props || {});
    const[error,setError] = useState(null);

    let id = "62423c4af2dcd650597fb177"
    console.log(props);

  useEffect(() => {

    debugger
    axios
    
    .get(`http://localhost:8000/posts/${id}`)
    
    .then((response) => {
    debugger
    setData(response.data);
      setError(null);
    })
    
    .catch((error) => {
    
    console.log(error);
    setError(error.message);
    
    });
    
    },[id]);

  const handleLikeClick = () =>{

    setLikeCount(likeCount+1);

  }

  //  const handlePostClick =(postId)=>{
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8000/posts?_limit=10`
  //     );
  //     //  console.log(response);
  //     //  console.log("response:",response);
  //     //  console.log("fawwrtrwttrtt");

  //     setData(response.data);
  //     setError(null);
  //   } catch (err) {
  //     setError(err.message);
  //     setData(null);
  //   } finally {
  //     setLoading(false);
  //   }

  // }
        return(  
          <div>
          <div className=" ,card w-75">
            <div  className='card-body'>
          <ListGroup.Item as="li" >  
          
          <div className='card-img-top'>
          <div class="d-flex justify-content-between">
          <div>
          <img src={ProfileLogo} width="50" height="50"></img>
           {data.post} 
           <h6 class ="card-title"> {(data.postedBy || {}).firstName} </h6>
           </div>
           <div>
           <div>{data.commentsCount} Comment </div>
          <div> {data.likesCount} Likes</div>   
          </div> 
          </div>
          </div>
          </ListGroup.Item>
      </div>  
      </div>
      </div>
        );
    }


export default PostDetailsPage;

