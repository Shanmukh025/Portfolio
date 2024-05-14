import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
    return (
        <>
            <h2>
                <a target="_blank" rel="noopener" className={styles.underline}>
                    Where I've Worked?
                </a>
            </h2>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkF3mBXDJY_IztI_AidsDJin2Dw_3tZWbKr35-7Tnnw&s"
                        alt="gdsc"
                    />
                    <div className={styles.content}>
                        <h2>Google Developer Student Clubs</h2>
                        <h3>Android Development Leader</h3>
                        <p>
                            As the Leader of the Google Developer Student Club,
                            I organized workshops, hackathons to enhance
                            technical skills. Organized hands on projects,
                            collaborated with industry experts on google
                            technologies. I Also developed the club's website.
                        </p>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://gdsc.community.dev/k-l-deemed-to-be-university-vijayawada/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                About
                            </a>
                            <a
                                href="https://gdscklef.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Website
                            </a>
                            <a
                                href="https://gdsc.community.dev/u/m8n65a/#/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Profile
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2021/07/16/HackerEarthFeatureImage.png"
                        alt="heca"
                    />
                    <div className={styles.content}>
                        <h2>HackerEarth</h2>
                        <h3>Campus Ambassador</h3>
                        <p>
                            As a HackerEarth Campus Ambassador, I spearheaded
                            coding competitions, hackathons, and workshops to
                            promote a culture of innovation and coding. I also
                            engaged with the hackerearth community to enhance
                            their skills and good learning environment.connected
                            students with industry experts for career
                            development.
                        </p>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://www.hackerearth.com/campus-ambassador-program/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://media.licdn.com/dms/image/D4D12AQEyYaW9huG9FQ/article-cover_image-shrink_720_1280/0/1714116933229?e=2147483647&v=beta&t=PUvg9WmwXrShbZbdgOkMzVjTysJvZprq_lhBvuwYcJM"
                        alt="aws"
                    />
                    <div className={styles.content}>
                        <h2>Amazon Web Services</h2>
                        <h3>Cloud Virtual Intern</h3>
                        <p>
                            As a Cloud Virtual Intern at AWS, I gained hands-on
                            experience with cloud technologies, working on
                            real-world projects to enhance my understanding of
                            AWS services. I developed and deployed scalable
                            applications, optimized cloud infrastructure, and
                            collaborated with a team to solve complex technical
                            challenges.
                        </p>
                        <br />
                        <div className={styles.cta}>
                            <a
                                href="https://shanmukhanaparthi.pythonanywhere.com/static/images/aicte.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Certificate
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
        props: { title: "Experience" },
    };
}

export default ArticlesPage;
