import styles from './styles.module.css'
import { Span } from '../Span'

export const Card = ({img, name}) => {
    return(
        <li className={styles.card}>
            <img src={img} alt={name} />
            <Span text={name}/>
        </li>
    )
}