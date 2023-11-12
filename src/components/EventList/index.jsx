import React from "react";
import Event from "../Event"
import styles from "./EventList.module.css"

const EventList = ({ events }) => {
    return (
        <div className={styles.container}>
            {events.map(({ title, date, description }, index) => (
                <Event
                    key={index}
                    title={title}
                    date={date}
                    description={description}
                />
            ))}
        </div>
    )
}
export default EventList;