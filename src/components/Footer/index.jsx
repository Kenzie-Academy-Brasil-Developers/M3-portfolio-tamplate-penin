import styles from './styles.module.css'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'
import WhatsAppLogo from '../../assets/whatsapp-icon.png'
import LinkedinLogo from '../../assets/linkedin-icon.png'
import GitLogo from '../../assets/github-icon.png'


export const Footer = () => {
    return(
        <footer className={styles.Footer}>
            <hr className={styles.Hr}/>
            <div>
                <div className={styles.Container}>
                    <Title>Contato</Title>

                    <div className={styles.ImgContainer}>
                        <img src={WhatsAppLogo} alt="Logo marca do whatsapp" />
                        <img src={LinkedinLogo} alt="Logo marca do site linkedin" />
                        <img src={GitLogo} alt="Logo marca do site github" />
                    </div>
                </div>
                <Paragraph text={'Todos os direitos reservados - gabriel penin'}/>
            </div>
            <hr className={styles.Hr}/>
        </footer>
    )
}