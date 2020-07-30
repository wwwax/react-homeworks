import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
    console.log('user = ', user);

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={user.avatar} alt='user avatar' />
            <div>{user.name}</div>
            <div>{`@${user.tag}`}</div>
            <div>{user.location}</div>
        </div>
    );
};

export default Profile;
