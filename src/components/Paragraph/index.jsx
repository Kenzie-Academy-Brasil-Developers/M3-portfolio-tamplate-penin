import styles from './styles.module.css'

export const Paragraph = ({text}) => {
    return(
        <p className={styles.paragraph}>{text}</p>
    )
}