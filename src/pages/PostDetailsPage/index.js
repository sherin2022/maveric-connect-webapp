import React from 'react';
import {useState} from 'react'
import FooterLogo from '../../images/maveric-logo-white.png'
import ProfileLogo from '../../images/default-profile-pic.jpg'
import { ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const PostDetailsPage = (props) => {

  const[likeCount,setLikeCount] = useState(0);

  const handleLikeClick = () =>{

    setLikeCount(likeCount+1);

  }
        return(  
          <div className="card">
            <div className='card-body'>
          <ListGroup.Item as="li" >  
          <div className='card-img-top'>
          <img src={ProfileLogo} width="50" height="50"></img>
           {props.post} 
           </div>
           <div>
           {likeCount} Likes
          {/* <FormControlLabel
           control={<Checkbox onClick={handleLikeClick} icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
           name="checkedH" />}
           label="like"
           /> */}
           
           </div>
           
          </ListGroup.Item>
      </div>
      </div>
        );
    }


export default PostDetailsPage;

