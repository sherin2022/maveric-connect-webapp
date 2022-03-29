import React from 'react';
import { useState,useEffect } from 'react';
import PostListPage from '../PostListPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';

const PostListContainer = (props) =>{

    const[data,setData] = useState([]);
    const[error,setError] = useState([]);
    const[loading,setLoading] = useState([]);

    useEffect(() => {

        axios
        
        .get(`http://localhost:8000/posts?_limit=10`)
        
        .then((response) => {
        
        setData(response.data);
          setError(null);
        })
        
        .catch((error) => {
        
        console.log(error);
        setError(error.message);
        
        });
        
        },[]);
    
    

      return(
             
          
            (data || []).map(function(postItem){
                return (
                <PostListPage
                key = {postItem.id}
                postId = {postItem.postId}
                post =  {postItem.post}
                postedBy = {postItem.postedBy}
                likesCount = {postItem.likesCount}
                commentsCount = {postItem.commentsCount}
                {...props}
                
                />
                )
            })

          
      )


}

export default PostListContainer;
