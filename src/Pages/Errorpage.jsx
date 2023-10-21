import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='text-center my-10'>
            <h1 className='font-semibold'>Oops!</h1>
            <i>Sorry, an unexpected error has occurred.</i><br></br>
            <Link to='/'>
                <button className='btn mt-10'>Go Home</button>
            </Link>

        </div>
    );
};

export default Errorpage;