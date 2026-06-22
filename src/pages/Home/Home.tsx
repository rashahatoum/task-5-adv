import './Home.css'
import ShadowCircle from "../../components/ShadowCircle/ShadowCircle"
import NavBar from "../../components/NavBar/NavBar"
import Section from '../../components/Section/Section'
import TrustedBy from '../../components/TrustedBy/TrustedBy'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownLongLine } from "react-icons/ri";
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'

const CardsData = [
    { img: "/task-5-adv/assets/imgs/Mark Smith.png", name: "Alex Jones", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { img: "/task-5-adv/assets/imgs/Andrew Rathore.png", name: "Andrew Rathore", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel." },
    { img: "/task-5-adv/assets/imgs/Vera Duncan.png", name: "Vera Duncan", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel." },
    { img: "/task-5-adv/assets/imgs/Mark Smith.png", name: "Mark Smith", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel." },
    { img: "/task-5-adv/assets/imgs/rasha hat.png", name: "rasha hat", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
];

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <header className="position-relative" id="home">
                <ShadowCircle className="top-0 Left-0 translate-middle" />
                <NavBar
                    items={["home", "about", "testimonials", "contact"]}
                    brand="Digital Agency" />
            </header>
            <main className="myContainer">
                <Section
                    sectionName="home"
                    title="Building digital products, brands & experience"
                    description="Digital Agency is your online team mangement tool that easy and prompt"
                    imageSrc="/task-5-adv/assets/imgs/business-people.png"
                    btnText="Contact Us"
                    className='hero'
                    titleClass="hero-title"
                    descClass="hero-desc"
                />
                <TrustedBy
                    desc="Trusted by 4,000+ companies"
                    companies={["/task-5-adv/assets/imgs/spotify.svg", "/task-5-adv/assets/imgs/slack.svg", "/task-5-adv/assets/imgs/dropbox.svg", "/task-5-adv/assets/imgs/zoom.svg"]}
                />
                <div className="position-relative" id="about">
                    <Section
                    sectionName="about"
                        title="Branding & Design system"
                        description="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
                        imageSrc="/task-5-adv/assets/imgs/designer-team.png"
                        icon={
                            <>
                                <RiArrowDownLongLine className="fs-4 mt-4 d-lg-none" />
                                <FaArrowRightLong className="fs-4 mt-3 d-none d-lg-inline-block" />
                            </>
                        }
                        directionClass="flex-row-reverse"
                        className="section"
                        titleClass="section-title"
                        descClass="section-desc"
                    />

                    <ShadowCircle className="top-50 start-100 section-shadow" />
                    <Section
                        sectionName="about-2"
                        title="Custome & Plugin Development"
                        description="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
                        imageSrc="/task-5-adv/assets/imgs/businessman.png"
                        icon={
                            <>
                                <RiArrowDownLongLine className="fs-4 mt-4 d-lg-none" />
                                <FaArrowRightLong className="fs-4 mt-3 d-none d-lg-inline-block" />
                            </>
                        }
                        className="section"
                        titleClass="section-title"
                        descClass="section-desc"
                    />
                </div>
                <Slider
                sectionName="testimonials"
                title='Read What Other have to Say'
                cards={CardsData}/>
                <Section
                    sectionName="contact"
                    title="Be a part of the next big thing"
                    description="We work with Brans, Startups, to SMEs. Colaborate for more impact and growt"
                    imageSrc="/task-5-adv/assets/imgs/customer-support.png"
                    btnText="Contact Us"
                    className="section"
                    titleClass="section-title"
                    descClass="section-desc"
                    bgClass="sectionWbg"
                    directionClass="flex-row-reverse"
                />
            </main>
            <footer>
                <Footer
                    lists={[
                        {
                            title: "Digital Agency",
                            items: ["Building digital products, brands & experience"]
                        },
                        {
                            title: "Resources",
                            items: ["Guides", "Blog", "Customer Stories", "Glossary"]
                        },
                        {
                            title: "Company",
                            items: ["About Us", "Careers", "Partners", "Contact Us"]
                        },
                        {
                            title: "Social Media",
                            items: ["LinkedIn", "Facebook", "Instagram", "Twitter"]
                        }
                    ]}
                    Copyright="© Matheus. Todos os direitos reservados"
                    className='myContainer'
                />
            </footer>
        </div>
    )
}

export default Home