import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
    return (
        <>
            <h2>
                <a target="_blank" rel="noopener" className={styles.underline}>
                    Where I've Worked?
                </a>
            </h2>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "Experience" },
    };
}

export default ArticlesPage;
