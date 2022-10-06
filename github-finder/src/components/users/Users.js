import axios from 'axios';
import User from './User';
import Spinner from '../spinner/Spinner';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getusers = async () => {
    //     const res = await axios.get('https://api.github.com/users');
    //     setUsers(res.data);
    // }

    useEffect(() => {
        setLoading(true);
        async function fetdata() {
            const res = await axios.get('https://api.github.com/users');
            setUsers(res.data);
        }
        fetdata();
        setLoading(false);
    }, [loading]);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='row m-auto'>
                {users.map(user => {
                    return (
                        <User image={user.avatar_url} name={user.login} account={user.html_url} />
                    )
                })}
            </div>
        );
    }
}

export default Users;
