import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <div className={styles.friendListItem}>
            <div
                className={styles.isOnline}
                style={{
                    backgroundColor: isOnline ? 'red' : 'green',
                }}></div>
            <img className={styles.avatar} src={avatar} alt='avatar' />
            <div className={styles.name}>{name}</div>
        </div>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;
