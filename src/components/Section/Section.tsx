import { Container, Row, Col } from 'react-bootstrap';
import './Section.css'
import type { SectionProps } from '../../interfaces';


const Section = ({ title, description, imageSrc, directionClass = "flex-row", bgClass = "", btnText, icon, className,titleClass,descClass,sectionName }: SectionProps) => {
    return (
        <section className={`${bgClass} ${className}`} id={sectionName}>
            <Container>
                <Row className={`align-items-center justify-content-between gap-4 ${directionClass}`}>
                    <Col xs={12} lg={6} className="text-lg-start text-center">
                        <h2 className={`fw-bold mb-4 ${titleClass} `}>{title}</h2>
                        <p className={descClass}>{description}</p>
                        {btnText && (
                            <button className="text-light text-uppercase border-0 rounded-3 btnContact">
                                {btnText}
                            </button>
                        )}                        
                        {icon && icon}
                    </Col>
                    <Col xs={12} lg={5} className="text-lg-end text-center">
                        <img src={imageSrc} alt="section-img" className='p-0 w-100'/>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Section;