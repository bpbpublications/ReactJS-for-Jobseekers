import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import { fetchUserList } from '../../redux/actions';
import classes from './Homepage.module.css';

const Homepage = () => {
    const dispatch = useDispatch();
    const users = useSelector(globalState => globalState.userList);

    useEffect(() => {
        dispatch(fetchUserList())
    }, []);

    return(
        <div className={classes.MainContainer}>
            <div className={classes.UserGrid}>
                {users && users.map(item => <UserCard key={item.id} firstName={item.first_name} lastName={item.last_name} />)}
            </div>
        </div>
    );
}

export default Homepage;