import React from 'react';
import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import user from '../../user.json';
import stats from '../../statistical-data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
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
            <hr style={{ marginTop: '20px' }} />

            <h2 className={styles.taskName}>Task-04</h2>
            <TransactionHistory transactions={transactions} />
        </div>
    );
};

export default App;
