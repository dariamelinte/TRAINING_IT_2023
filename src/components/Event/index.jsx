import React from 'react';

import styles from './Event.module.css'

const Event = ({ title, date, description }) => {
    return (
        <div className={styles.container}>
            <div className={styles.eventHeader}>
                <div>{title}</div>
                <div>{date}</div>
            </div>
            <div className={styles.eventDesc}>
                {description}
            </div>
        </div>
    )
}

export default Event