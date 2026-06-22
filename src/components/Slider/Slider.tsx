import { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Card from '../Card/Card';
import './Slider.css';
import type { SliderProps } from '../../interfaces';



function Slider({ sectionName, title, cards }: SliderProps) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
    const [index, setIndex] = useState(window.innerWidth >= 992 ? 1 : 2);

    useEffect(() => {
        const handleResize = () => {
            const desktop = window.innerWidth >= 992;
            setIsDesktop(desktop);
            setIndex(desktop ? 1 : 2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const transformOffset = isDesktop
        ? index * 33.333333
        : index * 100;

    const dotsCount = isDesktop ? cards.length - 2 : cards.length;

    return (
        <Container className="section overflow-hidden text-center position-relative" id={sectionName}>
            <p className="fs-6 text-center mx-auto fw-normal text-uppercase">{sectionName}</p>
            <h1 className="testimonials-title fw-bold text-center mx-auto">
                {title}
            </h1>

            <Carousel
                activeIndex={index}
                onSelect={(selectedIndex) => setIndex(selectedIndex)}
                controls={false}
                indicators={true}
                interval={null}
                slide={false}
                className="custom-carousel"
            >
                <Carousel.Item className="active">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${transformOffset}%)` }}
                    >
                        {cards.map((card, idx) => (
                            <div className="card-wrapper" key={idx}>
                                <Card img={card.img} name={card.name} desc={card.desc} />
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
                {Array.from({ length: dotsCount - 1 }).map((_, i) => (
                    <Carousel.Item key={i} className="d-none"></Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Slider;