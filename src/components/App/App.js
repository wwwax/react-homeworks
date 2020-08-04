import React from 'react';
import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
import user from '../../user.json';
import stats from '../../statistical-data.json';
import friends from '../../friends.json';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.taskName}>Task-01</h2>
            <Profile user={user} />
            <hr style={{ marginTop: '20px' }} />

            <h2 className={styles.taskName}>Task-02</h2>
            <Statistics stats={stats} />
            <hr style={{ marginTop: '20px' }} />

            <h2 className={styles.taskName}>Task-03</h2>
            <FriendList friends={friends} />
        </div>
    );
};

export default App;
