import styles from './styles.module.css'
import giticon from '../../assets/git-icon.png'
import { Span } from '../Span'
import { Link } from '../Link'
import { Paragraph } from '../Paragraph'

export const CardProject = ({name, description}) => {
    return(
        <li className={styles.card}>
            <div className={styles.HeaderCard}>                
                <Span text={name}/>
                <img src={giticon} alt="Logo do site github" />
            </div>

            <Paragraph text={description}/>
            <Link link={'#'} text={'Saiba mais'} />
        </li>
    )
}