import React from 'react';
import Profile from '../Profile';
import user from '../../user.json';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Profile user={user} />
        </div>
    );
};

export default App;
