import Input from "../Input";
import { useState } from 'react'
import Button from "../Button"

import styles from "./Form.module.css"

const Form = ({ setEvents }) => {
    const [date, setDate] = useState(new Date())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const event = { date, title, description }
        setEvents(events => [...events, event])
        clearInput()
    }
    const onClear = (e) => {
        e.preventDefault()
        clearInput()
    }
    const clearInput=()=>{
        setDate(new Date());
        setTitle("");
        setDescription("");
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <Input
                    type="date"
                    changeInput={(e) => {
                        console.log(e.target.value)
                        setDate(e.target.value)
                    }}
                    value={date}
                />
                <Input
                    type="text"
                    placeholder="Title"
                    changeInput={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <Input
                    type="text"
                    placeholder="Description"
                    changeInput={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <div className={styles.button}>
                    <Button className={styles.cancel}
                            onClick={onClear}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit}>
                        Submit
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default Form;