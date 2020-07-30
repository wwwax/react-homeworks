import React from 'react';
import Profile from '../Profile';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Profile title='profile test title' />
        </div>
    );
};

export default App;
