import home from '../../assets/images/home/home.webp'

const Home = () => {
    return (
        <section className="home">
            <h2>Bienvenidos a Sensaciones Essen</h2>
            <p>
                ¿Por qué elegir Essen?
                Con nuestros productos podés preparar miles de recetas y en cada preparación, gracias a la distribución homogénea del calor, vas a ahorrar tiempo, consumo de gas y energía. Además, cocinando con un producto Essen, en cada receta resaltás el sabor de los ingredientes y mantenes sus nutrientes.
                Nuestros productos están hechos con la mejor calidad, con esmalte vitroporcenlanizado de alta resistencia y el mejor antiadherente.
                Essen es diseño, innovación y calidad.
            </p>
            <picture>
            <img className="img-home" src={home} alt= "" />
            </picture>
        </section>
    );
};

export default Home;