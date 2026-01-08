import "./intro.scss";

const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h1 className="intro__title">
                        Hi, my name is <span>Ata</span>
                        <p>a frontend developer</p>
                    </h1>
                    <p>with passion for learning and creating.</p>
                    <a className="intro__btn" href="/CV.pdf" download="CV">
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;
