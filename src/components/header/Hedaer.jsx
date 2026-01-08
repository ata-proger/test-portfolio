import Link from "next/link";
import "./header.scss";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link href="/" className="header__logo">
                        <b>Freelancer</b> portfolio
                    </Link>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
