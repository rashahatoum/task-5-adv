import type { FooterProps } from "../../interfaces"
import "./Footer.css"



const Footer = ({ lists, Copyright , className}: FooterProps) => {
    return (
        <div className="footerGroup text-center text-lg-start">
            <div className={`listGroup row justify-content-between text-center text-lg-start ${className}`}>
                {lists.map((list, index) => {
                    return (
                        <div key={index} className="list col-12 col-lg-auto mb-4 mb-md-0">
                            <h2 className="list-title fw-bold">{list.title}</h2>
                            <ul className="list-unstyled mb-0 mx-auto listWidth">
                                {list.items.map((item, index) => {
                                    return (
                                        <li className="mb-4" key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <p className="copy-right text-center fw-light mx-auto mb-0">{Copyright}</p>
        </div>
    )
}

export default Footer