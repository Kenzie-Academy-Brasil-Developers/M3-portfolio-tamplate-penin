import styles from './styles.module.css'
import logo from '../../assets/portfolio.png'
import { Button } from '../Button'

export const Header = () => {
    return(
        <header className={styles.mainHeader}>
            <img 
            src={logo}
            alt="Logo do portfolio com o nome do desenvolvedor" 
            className={styles.headerImg}/>

            <nav className={styles.headerNav}>
                <a href="#">Sobre</a>
                <a href="#">Stack</a>
                <a href="#">Projetos</a>
            </nav>

            <Button text={'Contato'}/>
        </header>
    )
}