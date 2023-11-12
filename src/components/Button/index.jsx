import cx from 'classnames'

import styles from './Button.module.css'

const Button = ({ className, onClick, children }) => {
    return (
        <button className={cx(styles.button, className)} onClick={onClick}>
            { children }
        </button>
    )
}

export default Button