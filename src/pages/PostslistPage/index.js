import React,{Component} from 'react';
import posts from "../../data"
import { useState, useEffect} from 'react';
import PostDetailsPage from '../PostDetailsPage/index.js';
import { ListGroup } from 'react-bootstrap';
import axios from "axios"


const PostlistPage = ()=>  {


const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
 
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/posts?_limit=10`
      );
       console.log(response);
       console.log("response:",response);
       console.log("fawwrtrwttrtt");

      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);

//console.log(data);

       return (
          <ListGroup as="ul">
          <ListGroup.Item as="li" >
          { (data || []).map((post) => (
          <PostDetailsPage
            key={'post-' + post.id}
            id={post.id}
            img = {post.img}
            post={post.post}
            postedBy={post.postedBy}
          />
            ))}
          </ListGroup.Item>
          </ListGroup>
          
        );  
      }
    

export default PostlistPage;


