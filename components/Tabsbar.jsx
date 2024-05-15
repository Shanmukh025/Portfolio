import styles from "../styles/Tabsbar.module.css";
import Tab from "./Tab";

const Tabsbar = () => {
    return (
        <div className={styles.tabs}>
            <Tab icon="/react_icon.svg" filename="Home.jsx" path="/" />
            <Tab icon="/js_icon.svg" filename="Projects.js" path="/projects" />
            <Tab
                icon="/json_icon.svg"
                filename="Experience.json"
                path="/articles"
            />
            <Tab
                icon="/html_icon.svg"
                filename="Certifications.html"
                path="/about"
            />
            <Tab icon="/css_icon.svg" filename="Contact.css" path="/contact" />
            <Tab icon="/markdown_icon.svg" filename="About.md" path="/github" />
            <Tab icon="/txt_icon.svg" filename="Themes.txt" path="/settings" />
        </div>
    );
};

export default Tabsbar;
