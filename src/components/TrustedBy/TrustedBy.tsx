import type { TrustedByProps } from "../../interfaces"
import "./TrustedBy.css"

const TrustedBy = ({ desc, companies }: TrustedByProps) => {
    return (
        <section className="TrustedBy mx-auto">
            <p className="text-center">{desc}</p>
            <div className="companies d-flex align-items-center justify-content-between p-4 rounded-3 gap-2 flex-wrap">
                {companies.map((company, index) => {
                    return (
                        <img src={company} key={index} />
                    )
                })}
            </div>
        </section>
    )
}

export default TrustedBy