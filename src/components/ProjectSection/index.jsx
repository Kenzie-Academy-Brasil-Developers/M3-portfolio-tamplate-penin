import styles from './styles.module.css'
import { Title } from '../Title'
import { ListProject } from '../ListProject'

export const ProjectSection = () => {
    return (
        <section className={styles.Section}>
            <Title text={'Projetos'}/>
            <ListProject />
        </section>
    )
}