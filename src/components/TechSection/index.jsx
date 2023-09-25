import styles from './styles.module.css'
import { Title } from '../Title'
import { List } from '../List'



export const TechSection = () => {
    return(
        <section className={styles.techSection}>
            <Title>Tecnologias</Title>
            <List />
        </section>
        
        
    )
}