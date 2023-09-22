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
                <Title text={'Bem vindo ao meu portfolio'}/>
                <Paragraph text={"O conhecimento é como uma moeda: para ter valor, deve circular, ser gasto e usado para algo mais do que simplesmente guardá-lo."}/>
                <Button text={'Saiba mais'}/>
            </div>
            <img className={styles.BannerImg} src={banner} alt="banner do portfolio" />
        </section>
    )
}
