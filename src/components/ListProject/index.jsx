import styles from './styles.module.css'
import { CardProject } from '../CardProject'
import { projects } from '../../data/projects'

export const ListProject = () => {
    const [proj1, proj2, proj3, proj4] = projects

    return(
        <ul className={styles.mainList}>
            <CardProject name={proj1.name} description={proj1.description}/>
            <CardProject name={proj2.name} description={proj2.description}/>
            <CardProject name={proj3.name} description={proj3.description}/>
            <CardProject name={proj4.name} description={proj4.description}/>
        </ul>
    )
}