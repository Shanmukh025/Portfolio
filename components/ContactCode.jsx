import React from "react";
import styles from "../styles/ContactCode.module.css";

const contactItems = [
    {
        social: "mail",
        link: "shanmukh2564@gmail.com",
        href: "mailto:shanmukh2564@gmail.com",
    },
    {
        social: "github",
        link: "Shanmukh025",
        href: "https://github.com/Shanmukh025",
    },
    {
        social: "linkedin",
        link: "Shanmukh Anaparthi",
        href: "https://www.linkedin.com/in/shanmukhanaparthi/",
    },
    {
        social: "leetcode",
        link: "shanmukh25",
        href: "https://leetcode.com/shanmukh25",
    },
    {
        social: "codechef",
        link: "klu2100032087",
        href: "https://codechef.com/users/klu2100032087",
    },
    {
        social: "hackerrank",
        link: "KLU2100032087",
        href: "https://www.hackerrank.com/profile/KLU_2100032087",
    },
    {
        social: "codeforces",
        link: "shanmukh_25",
        href: "https://codeforces.com/profile/shanmukh_25",
    },
    {
        social: "telegram",
        link: "shanmukhx",
        href: "https://t.me/shanmukhx",
    },
    // {
    //     social: "instagram",
    //     link: "shanmukhx",
    //     href: "https://www.instagram.com/shanmukhx",
    // },
    // {
    //     social: "twitter",
    //     link: "shanmukh_X",
    //     href: "https://www.twitter.com/shanmukh_X",
    // },
];

const ContactCode = () => {
    return (
        <div className={styles.code}>
            <p className={styles.line}>
                <span className={styles.className}>.socials</span> &#123;
            </p>
            {contactItems.map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;&nbsp;"{item.social}":{" "}
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.underline}
                    >
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            <p className={styles.line}>&#125;</p>
        </div>
    );
};

export default ContactCode;
