import styles from "../styles/ArticlesPage.module.css";

const AboutPage = () => {
    return (
        <>
            <h2>
                <a target="_blank" rel="noopener" className={styles.underline}>
                    Some Certifications
                </a>
            </h2>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "Certifications" },
    };
}

export default AboutPage;
