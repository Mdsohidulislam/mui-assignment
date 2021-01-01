import React from 'react';
import Navbar from './Components/Navbar/Navbar' 
import Post100 from './Components/PostComponent/Post100';
import {Switch,Route} from 'react-router-dom'
import PostDetails from './Components/PostDetails/PostDetails'; 
import Error from './Components/Error/Error';

const App = () => {
  const bgColor={
    backgroundColor:'#F0F2F5'
  }
  return (
    <div style={bgColor}>
      <Navbar></Navbar>  
      <Switch>
        <Route exact path='/'>
          <Post100></Post100>
        </Route>
        <Route path='/postDetails/:id'> 
          <PostDetails/>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
};

export default App;