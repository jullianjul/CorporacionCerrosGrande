import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
// Importamos las imágenes directamente
import Duro1 from '../assets/Duro1.jpg';
import Duro3 from '../assets/Duro3.jpg';

const heroData = [
  {
    id: 1,
    image: Duro1,
    title: 'The perfect design for your website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.google.com',
  },
  {
    id: 2,
    image: Duro1,
    title: 'Start Your Future Financial Plan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    image: Duro3,
    title: 'Enjoy the Difference',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com',
  },
];

function CarouselSlides() {
  return (
    <div className='Main_carousel_container'>
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={'slide ' + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
    </div>
  );
}

export default CarouselSlides;
