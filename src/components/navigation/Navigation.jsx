"use client";
// import { motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import "./navigation.scss";

const Navigation = () => {
    const [isActive, setIsActive] = useState();

    return (
        <nav className="nav">
            <div className={`nav__list ${isActive ? "active" : ""}`}>
                <Link href="/" className="nav__item">
                    Projects
                </Link>
                <Link href="/skills" className="nav__item">
                    Skills
                </Link>
                <Link href="/contacts" className="nav__item">
                    Contacts
                </Link>
            </div>
            <button
                className={`nav__btn ${isActive ? "active" : ""}`}
                onClick={() => setIsActive(!isActive)}
            ></button>
        </nav>
    );
};

export default Navigation;
