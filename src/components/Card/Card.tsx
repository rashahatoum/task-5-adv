
import type { CardProps } from '../../interfaces'
import './Card.css'



const Card = ({ img, name, desc }: CardProps) => {
    return (
        <div className="card mx-auto border-0 text-center">
            <img
                className="card-img"
                src={img}
                alt={name}
            />
            <p className="card-name">{name}</p>
            <p className="card-desc pb-4 mb-0 fw-light">
                <i className="fas fa-quote-left pe-2"></i>
                {desc}
            </p>
        </div>
    )
}

export default Card