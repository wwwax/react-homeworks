import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ title }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
        </div>
    );
};

export default Profile;
