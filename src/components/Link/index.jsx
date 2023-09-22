import styles from './styles.module.css'


export const Link = ({link, text}) => {
    return(
        <a  className={styles.MainLink} href={link}>{text}</a>
    )
}