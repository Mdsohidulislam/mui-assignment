import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='vh'>
        <div className='error'>
            <h4>Sorry page is not found !!!!!</h4>
            <Link style={{textDecoration:'none'}} to='/'><Button variant='outlined' color='secondary'>go back home</Button></Link>
        </div>
        </div>
    );
};

export default Error;