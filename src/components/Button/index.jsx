import styles from './styles.module.css'

export const Button = ({text}) => {
    return(
        <button className={styles.mainButton}>{text}</button>
    )
}