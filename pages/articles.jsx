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
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png?_=20210617123944"
                        alt="tcs"
                    />
                    <div className={styles.content}>
                        <h2>Tata Consultancy Services</h2>
                        <h3>System Engineee</h3>
                        <p>As System Engineer at Tata Consultancy Services, I work as a Data Engineer, developing scalable data pipelines and ETL solutions using Python and SQL. I collaborate with cross-functional teams to transform complex data into actionable insights and support business intelligence initiatives. I contribute to data integration, automation, and performance optimization, ensuring reliable and efficient data-driven solutions across enterprise applications.
                        </p>
                        <br />
                        <div className={styles.cta}>
                           
                        </div>
                    </div>
                </div>          
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
                            engaged with the HackerEarth community to enhance
                            their skills and foster a good learning environment.
                            Additionally, I connected students with industry
                            experts for career development, ensuring they are
                            well-prepared for dynamic tech landscape.
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
