import React from 'react';
import styles from './Statistics.module.css';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Statistics = ({ stats }) => {
    console.log('statistics = ', stats);
    return (
        <div className={styles.container}>
            <h2 className={styles.statsTitle}>Upload Stats</h2>

            <div className={styles.statsList}>
                {stats.map((item) => (
                    <div
                        style={{ backgroundColor: getRandomColor() }}
                        className={styles.statsListItem}
                        key={item.id}>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
