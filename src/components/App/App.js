import React from 'react';
import Profile from '../Profile';
import Statistics from '../Statistics';
import user from '../../user.json';
import stats from '../../statistical-data.json';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.taskName}>Task-01</h2>
            <Profile user={user} />
            <hr style={{ marginTop: '20px' }} />

            <h2 className={styles.taskName}>Task-02</h2>
            <Statistics stats={stats} />
        </div>
    );
};

export default App;
