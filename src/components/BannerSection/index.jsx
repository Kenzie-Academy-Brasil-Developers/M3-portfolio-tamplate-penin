import styles from './styles.module.css'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'
import banner from '../../assets/banner-img.png'
import { user } from '../../data/user'

export const BannerSection = () => {
    return(
        <section className={styles.bannerSection}>
            <div>
                <label>{user}</label>
                <Title>Bem vindo ao meu portfolio</Title>
                <Paragraph text={"uma frase interessante sobre mim "}/>
                <Button text={'Saiba mais'}/>
            </div>
            <img className={styles.BannerImg} src={banner} alt="banner do portfolio" />
        </section>
    )
}
