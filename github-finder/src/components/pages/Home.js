import React from 'react';
import Users from '../users/Users';

const Home = () => {
    return (
        <div className='container-fluid d-grid'>
            <form>
                <input className='form-control mb-3 mt-3' type="text" name='username' placeholder='Search Users...' />
                <div className='d-grid'>
                    <button type='submit' className='btn btn-dark btn-lg'>Search</button>
                </div>
            </form>
            <div className='container-fluid text-center'>
                <Users />
            </div>
        </div>
    );
}

export default Home;
