import styles from './styles.module.css'
import { Card } from '../Card'
import { technologies } from '../../data/technologies'

export const List = () => {
    const [tech1, tech2, tech3, tech4] = technologies

    return(
        <ul className={styles.mainList}>
            <Card img={tech1.img} name={tech1.name}/>
            <Card img={tech2.img} name={tech2.name}/>
            <Card img={tech3.img} name={tech3.name}/>
            <Card img={tech4.img} name={tech4.name}/>
        </ul>
    )
}