import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
    return (
        <div className={styles.container}>
            <img className={styles.userAvatar} src={user.avatar} alt='user avatar' />
            <div className={styles.userName}>{user.name}</div>
            <div className={styles.userTag}>{`@${user.tag}`}</div>
            <div className={styles.userLocation}>{user.location}</div>

            <div className={styles.stats}>
                <div className={styles.statsItem}>
                    <div className={styles.statsName}>Followers</div>
                    <div className={styles.statsQuantity}>{user.stats.followers}</div>
                </div>

                <div className={styles.statsItem}>
                    <div className={styles.statsName}>Views</div>
                    <div className={styles.statsQuantity}>{user.stats.views}</div>
                </div>

                <div className={styles.statsItem}>
                    <div className={styles.statsName}>Likes</div>
                    <div className={styles.statsQuantity}>{user.stats.likes}</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
