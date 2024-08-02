import styles from "../styles/ArticlesPage.module.css";

const AboutPage = () => {
    return (
        <>
            <h2>
                <a target="_blank" rel="noopener" className={styles.underline}>
                    My Certifications
                </a>
            </h2>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img
                        src="https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                        alt="da"
                    />
                    <div className={styles.content}>
                        <h2>Developer Associate</h2>
                        <h3>Amazon Web Services</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://cp.certmetrics.com/amazon/en/public/verify/credential/eacd9999d87c4eb5a036f771432b1567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://www.w3schools.com/aws/images/awscert.png"
                        alt="cp"
                    />
                    <div className={styles.content}>
                        <h2>Certified Cloud Practitioner</h2>
                        <h3>Amazon Web Services</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://cp.certmetrics.com/amazon/en/public/verify/credential/f23c515599f8409fa53c86eb03b59c32"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQxqcv0iJtEnz7JBzZy6MKgH8Y_iuFcgo9b_D6IBNwA&s"
                        alt="cp"
                    />
                    <div className={styles.content}>
                        <h2>Azure Developer Associate(AZ-204)</h2>
                        <h3>Microsoft</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://learn.microsoft.com/en-us/users/Shanmukh-Anaparthi/credentials/328876EE42DC8DE7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://images.credly.com/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png"
                        alt="cp"
                    />
                    <div className={styles.content}>
                        <h2>Cert. Enterprise Appln. Developer</h2>
                        <h3>RedHat</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://www.credly.com/badges/6c35a5a2-6d20-44aa-af42-280893da90f9/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3cSI_Dsx2pWlonpWJpbwUC-Eg44Y-FO1wGGTZKd1Hg&s"
                        alt="cp"
                    />
                    <div className={styles.content}>
                        <h2>(AZ-900) Azure Fundamentals</h2>
                        <h3>Microsoft</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://www.credly.com/badges/470bacfb-4dd5-4a99-a51e-98abe842daac/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://images.credly.com/images/9819ade4-8c28-4f2e-8c19-eac82857b71f/1072-21_Oracle_Cloud_Infrastructure_Architect.png"
                        alt="cp"
                    />
                    <div className={styles.content}>
                        <h2>Solutions Architect Assoc.</h2>
                        <h3>Oracle Cloud</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=CEACAC5564BAEE04ECFB08F453ADDE41B838428B706BEAE12A4D28116D9DE9A9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
                        alt="cp"
                    />
                    <div className={styles.content}>
                        <h2>All Coursera Certifications</h2>
                        <h3>Coursera</h3>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://www.coursera.org/learner/shanmukh-anaparthi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "Certifications" },
    };
}

export default AboutPage;
