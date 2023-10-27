import React , {useEffect} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchAPI } from '../redux/users/usersAction';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user);

    useEffect(()=>{
        dispatch(fetchAPI())
    },[])


    return (
        <div>
            Users
        
            {users.loading ? <h1>LOADING...</h1> : users.users.map((item)=><h1  key={item.id}>{item.name}</h1>)}
            
        </div>
    );
};

export default Users;