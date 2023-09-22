import styles from './styles.module.css'

export const Title = ({children}) => {
    return(
        <h2 className={styles.mainTitle}>{children}</h2>
    )
}