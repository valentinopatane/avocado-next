import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "../../public/images/avoLogo.png";
import Image from "next/image";
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Image
                src={logo}
                alt={"avocadoLogo"}
                className={styles.navbar__logo}
            />
            <ul className={styles.navbar__list}>
                <Link className={styles.navbar__item} href="/">
                    Home
                </Link>
                <Link className={styles.navbar__item} href="/about">
                    About
                </Link>
            </ul>
        </nav>
    );
}
