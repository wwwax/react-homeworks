import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Statistics = ({ title, stats }) => {
    return (
        <div className={styles.container}>
            {title && <h2 className={styles.statsTitle}>{title}</h2>}
            <div className={styles.statsList}>
                {stats.map((item) => (
                    <div
                        className={styles.statsListItem}
                        style={{ backgroundColor: getRandomColor() }}
                        key={item.id}>
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Statistics;
