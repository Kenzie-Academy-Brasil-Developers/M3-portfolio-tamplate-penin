import styles from './styles.module.css'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'

export const AboutMe = () => {
    return(
        <section className={styles.container}>
            <Title text={'Sobre mim'}/>
            <Paragraph 
            text={
                "Tenho 22 anos e sou uma pessoa comunicativa, apaixonada por aprender coisas novas e também por ensinar. Adoro interagir com os outros e tenho uma mente curiosa que está sempre em busca de conhecimento. Compartilhar o que aprendo é uma das coisas que mais me entusiasmam."
            }
            />
            
        </section>
    )
}