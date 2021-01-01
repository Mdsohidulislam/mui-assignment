import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import './Details.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const DetailsCard = (props) => {
  // import post
  const {title,body}=props.post;
  // import commnets 
  const comments=props.comments;
  // import userInfo
  let count=1;
  let count2=1;
  let count3=1;
  const {names,emails,images}=props.usersInfo; 
  console.log(names);

  const dCardStyle={
    backgroundColor:'#F0F2F5'
  }
  const avatar= {
    backgroundColor:'red'
  }
  
  return (

    <div className='details_card'> 
       <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={avatar}>
            <img style={{height:'40px',width:'40px'}} src={images[0]} alt=""/>
          </Avatar>
        }
        title={names[0]}
        subheader="September 14, 2016"
      />
      <p><b style={{fontStyle:'italic'}}>{title}....</b></p>
      <p>{body}</p>
      <div className="border"></div>
      {/* create comments div using map */}
      <h3 style={{fontStyle:'italic'}}>Comments here.........</h3>
        {
          comments.map(res=>{
            return(
              <div key={res.id} className="comments-div">
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={avatar}>
                    <img style={{height:'40px',width:'40px'}} src={images[count++]} alt=""/>
                  </Avatar>
                }
                title={names[count2++]}
                subheader={emails[count3++]}  
              />
              <p className='comment'>{res.body}</p>
              <br/>
              </div>
            )
          })
        }
        <Link style={{textDecoration:'none'}} to='/'><Button style={{margin:'20px 130px'}} variant='outlined' color="secondary">go back home</Button></Link>
    </div>
  );
};

export default DetailsCard;