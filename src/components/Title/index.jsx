import styles from './styles.module.css'

export const Title = ({text}) => {
    return(
        <h2 className={styles.mainTitle}>{text}</h2>
    )
}