import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Explorer.module.css";

const explorerItems = [
    {
        name: "Home.jsx",
        path: "/",
        icon: "react_icon.svg",
    },
    {
        name: "Projects.js",
        path: "/projects",
        icon: "js_icon.svg",
    },
    {
        name: "Experience.json",
        path: "/articles",
        icon: "json_icon.svg",
    },
    {
        name: "Certifications.html",
        path: "/about",
        icon: "html_icon.svg",
    },
    {
        name: "Contact.css",
        path: "/contact",
        icon: "css_icon.svg",
    },
    {
        name: "About.md",
        path: "/github",
        icon: "markdown_icon.svg",
    },
    {
        name: "Themes.txt",
        path: "/settings",
        icon: "txt_icon.svg",
    },
];

const Explorer = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(true);

    return (
        <div className={styles.explorer}>
            <h2 className={styles.title}>Shanmukh Anaparthi</h2>
            <div>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    id="portfolio-checkbox"
                    checked={portfolioOpen}
                    onChange={() => setPortfolioOpen(!portfolioOpen)}
                />
                <label htmlFor="portfolio-checkbox" className={styles.heading}>
                    <ChevronRight
                        className={styles.chevron}
                        style={
                            portfolioOpen ? { transform: "rotate(90deg)" } : {}
                        }
                    />
                    Portfolio
                </label>
                <div
                    className={styles.files}
                    style={
                        portfolioOpen
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    {explorerItems.map((item) => (
                        <Link href={item.path} key={item.name}>
                            <div className={styles.file}>
                                <Image
                                    src={`/${item.icon}`}
                                    alt={item.name}
                                    height={18}
                                    width={18}
                                />{" "}
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explorer;
