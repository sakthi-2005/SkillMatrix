import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';

export function Login(){

    let user = useSelector((state)=>state.user_id);
    let [userId,setUserId] = useState(user);

    function handleLogin(){

    }

    return (
    <>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
            <h2>{userId}</h2>
            <input
                placeholder="Email"
                required
            />
            <input
                type="password"
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
            </form>
    </>
    );
}