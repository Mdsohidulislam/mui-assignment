import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import DetailsCard from '../DetailsCard/DetailsCard'

const PostDetails = () => {
    const {id}=useParams()  
    const [post, setPost]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    const [comments,setComments]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[]) ;
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api?results=6')
        .then(res=>res.json())
        .then(data=>setUser(data.results))
    },[])
    let names=[];
    let emails=[];
    let images=[]
    user.map(res=>{
        emails.push(res.email)
        names.push(`${res.name.title} ${res.name.first} ${res.name.last}`)
        images.push(`${res.picture.large}`)
    })
    const usersInfo={names,emails,images} 
    return (
        <div>  
            <DetailsCard usersInfo={usersInfo} comments={comments} post={post}></DetailsCard>
        </div>
    );
};

export default PostDetails;