import styles from './styles.module.css'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'

export const AboutMe = () => {
    return(
        <section className={styles.container}>
            <Title>Sobre Mim</Title>
            <Paragraph 
            text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci."
            }
            />
            
        </section>
    )
}