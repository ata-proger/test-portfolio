import Image from "next/image";
import "./projects.scss";
import Link from "next/link";

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects__inner">
                    <h2 className="content__title">Projects</h2>
                    <div className="projects__list fade-in">
                        <Link href="#" className="projects__list__item">
                            <Image
                                className="projects__list__item__image"
                                src="/01-big.jpg"
                                alt="image"
                                width="370"
                                height="278"
                            />
                            <p className="projects__list__item__title">
                                Gaming streaming portal
                            </p>
                        </Link>
                        <Link href="#" className="projects__list__item">
                            <Image
                                className="projects__list__item__image"
                                src="/02-big.jpg"
                                alt="image"
                                width="370"
                                height="278"
                            />
                            <p className="projects__list__item__title">
                                Video service
                            </p>
                        </Link>
                        <Link href="#" className="projects__list__item">
                            <Image
                                className="projects__list__item__image"
                                src="/03-big.jpg"
                                alt="image"
                                width="370"
                                height="278"
                            />
                            <p className="projects__list__item__title">
                                Video portal
                            </p>
                        </Link>
                        <Link href="#" className="projects__list__item">
                            <Image
                                className="projects__list__item__image"
                                src="/04-big.jpg"
                                alt="image"
                                width="370"
                                height="278"
                            />
                            <p className="projects__list__item__title">
                                Dating app
                            </p>
                        </Link>
                        <Link href="#" className="projects__list__item">
                            <Image
                                className="projects__list__item__image"
                                src="/05-big.jpg"
                                alt="image"
                                width="370"
                                height="278"
                            />
                            <p className="projects__list__item__title">
                                Landing
                            </p>
                        </Link>
                        <Link href="#" className="projects__list__item">
                            <Image
                                className="projects__list__item__image"
                                src="/06-big.jpg"
                                alt="image"
                                width="370"
                                height="278"
                            />
                            <p className="projects__list__item__title">
                                Gaming community
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
