import Link from "next/link";
import React, { useEffect, useState } from "react";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
    const [professionIndex, setProfessionIndex] = useState(0);
    const professions = [
        "Full Stack Developer",
        "DevOps Engineer",
        "Hackerearth Campus Ambassador",
        "Google Developer Club Leader",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProfessionIndex(
                (prevIndex) => (prevIndex + 1) % professions.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <h1>DEVOPS</h1>
                    <h1>ENGINEER</h1>
                </div>
                <div className={styles.foreground}>
                    <div className={styles.content}>
                        <h1 className={styles.name}>Shanmukh Anaparthi</h1>
                        <h6 className={styles.bio}>
                            {professions[professionIndex]}
                        </h6>
                        <Link href="/projects">
                            <button className={styles.button}>View Work</button>
                        </Link>
                        <Link href="/contact">
                            <button className={styles.outlined}>
                                Contact Me
                            </button>
                        </Link>
                    </div>
                    <Illustration className={styles.illustration} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: { title: "Home" },
    };
}