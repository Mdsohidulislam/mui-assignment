import { PlusOneTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'
function Post100(props){ 

    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]) 
    // user apis
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api?results=100')
        .then(res=>res.json())
        .then(data=>setUser(data.results))
    },[]) 
    
    let count=0;
    let names=[];
    let images=[];
    user.map(res=>{
        names.push(`${res.name.title} ${res.name.first} ${res.name.last}`)
        images.push(`${res.picture.large}`)
    })

    return (
        <div> 
            {
                post.map(post=> <Card img={images[count++]} showBtn={true} id={post.id} key={post.id} name={names[count++]} title={post.title} body={post.body}></Card>  )
            }
        </div>
    );
};

export default Post100;