import imagem1 from '../../images/cogumelo-simples-js.jpg'
import imagem2 from '../../images/cogumelo-simples-js.jpg'
import imagem3 from '../../images/cogumelo-simples-js.jpg'
import styles from '../styles.module.css'


import Itens from '../uteis/Itens';

const Body = () => {
    return (
        <div >
            <div className={styles.titulos}>
                <h1>Aprendendo as seguintes linguagens com o melhor professor de todos!</h1>
            </div>
            <div className={styles.itens}>
                <Itens texto='HTML 5' img={imagem1} detalhe='Linguagem de marcação'/>
                <Itens texto='CSS3' img={imagem2} detalhe='Linguagem de estilo'/>
                <Itens texto='JavaScript' img={imagem3} detalhe='Linguagem de programação'/>
            </div>
            <div className={styles.titulos}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium quibusdam odit recusandae officiis? Natus nemo consequuntur veniam, debitis dolor, temporibus magnam deleniti ipsa numquam, facilis tempora rerum minima amet aspernatur incidunt distinctio repellat officiis placeat voluptatum quaerat nesciunt perferendis exercitationem. Eum suscipit id totam consequatur commodi nobis atque magnam, neque tempora nam mollitia, ipsa dolor exercitationem perspiciatis provident quisquam cumque ipsum harum numquam ratione! Similique ratione animi totam sed quam quos iure incidunt voluptatum porro perspiciatis est velit doloremque reiciendis dolore, asperiores quae. Sit quae neque unde asperiores enim soluta. Magnam, itaque aut quia dicta cum odit maxime accusamus hic mollitia est accusantium unde cumque deleniti nesciunt, at eum id! Eveniet earum, omnis animi veniam enim, repellendus nesciunt sit voluptatum voluptas sequi quidem ipsam nostrum id quaerat error. Iure tempora ipsum ad. Dicta doloribus amet eum similique velit perspiciatis qui quo, incidunt harum ipsa? Distinctio consequuntur vero laboriosam, dolore vel error est. Molestias consectetur voluptatum delectus eius. Ratione perspiciatis itaque debitis quasi! Exercitationem eius cupiditate ratione odio non quis, provident eveniet perspiciatis? Nobis, aliquam. Veritatis aliquam voluptatem culpa quaerat saepe consectetur mollitia dolore incidunt alias accusamus provident sapiente omnis vitae, fuga voluptate harum labore inventore distinctio quibusdam sit quod. Necessitatibus labore accusantium maiores tempora molestiae incidunt voluptate! Provident totam aliquid quo necessitatibus reiciendis debitis quisquam, nemo accusantium illo excepturi sunt esse iure iusto obcaecati! Consectetur doloremque ad earum quae ea totam nam aliquid quasi facere doloribus voluptates, quia dignissimos ratione voluptatem accusantium. Aspernatur, vero. Quod id magni asperiores ducimus.</p>
            </div>
            <div className={styles.titulos}>
                <h1>Endereço da DBC</h1>
                <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.408912048391!2d-51.20348518481931!3d-29.996412836004843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1645473038413!5m2!1spt-BR!2sbr"></iframe>
            </div>
        </div>
    )
}

export default Body;