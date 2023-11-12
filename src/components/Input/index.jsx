import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <input
            className={styles.input}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.changeInput}
        />
    )
}

export default Input;