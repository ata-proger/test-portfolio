import Image from "next/image";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="#">
                    <Image
                        className="footer__links__item"
                        src="/icon-vk-white.svg"
                        alt="VK"
                        width="38"
                        height="38"
                    />
                </a>
                <a
                    href="https://www.instagram.com/ata70532"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="footer__links__item"
                        src="/icon-instagram-white.svg"
                        alt="VK"
                        width="38"
                        height="38"
                    />
                </a>
                <a href="#">
                    <Image
                        className="footer__links__item"
                        src="/icon-twitter-white.svg"
                        alt="VK"
                        width="38"
                        height="38"
                    />
                </a>
                <a href="#">
                    <Image
                        className="footer__links__item"
                        src="/icon-github-white.svg"
                        alt="VK"
                        width="38"
                        height="38"
                    />
                </a>
                <a href="#">
                    <Image
                        className="footer__links__item"
                        src="/icon-linkedin-white.svg"
                        alt="VK"
                        width="38"
                        height="38"
                    />
                </a>
            </div>
            <p className="footer__text">© 2022 frontend-dev.com</p>
        </footer>
    );
};

export default Footer;
