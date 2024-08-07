import styles from "../styles/GithubPage.module.css";

const GithubPage = ({ repos, user }) => {
    return (
        <>
            <div className={styles.user}>
                <div>
                    {/* <img
                        src="https://userpic.codeforces.org/2419769/title/51e36fd8a782a23e.jpg"
                        className={styles.avatar}
                        width={50}
                        height={50}
                    /> */}
                </div>
                <div className={styles.title}>
                    <h3>A Little Bit About Myself.</h3>
                </div>
            </div>
            <div className={styles.para1}>
                <a>Hello!</a>
                <img
                    src="https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113"
                    height={20}
                    width={20}
                />
            </div>
            <div className={styles.para1}>
                This is <a>A.Shanmukh</a>, a DevOps Engineer and Software
                Engineer, dedicated to developing Products. As a Software
                Engineer, I enjoy bridging the gap between engineering & the
                problem — combining my technical skills with a comprehensive
                solution to build efficient products.
            </div>
            <div className={styles.bgpara}>
                Get In Touch{" "}
                <img
                    src="https://raw.githubusercontent.com/bchiang7/bchiang7.github.io/master/img/emojis/pointright.png"
                    height={25}
                    width={25}
                    style={{ verticalAlign: "middle" }}
                />{" "}
                <a
                    target="_blank"
                    rel="noopener"
                    className={styles.underline}
                    href="mailto:shanmukh2564@gmail.com"
                >
                    shanmukh2564@gmail.com
                </a>{" "}
                <br />
                <br />
                or Checkout my{" "}
                <a
                    target="_blank"
                    rel="noopener"
                    className={styles.underline}
                    href="https://drive.google.com/file/d/1ZZzYznzResGznkz3G64F-Cn8bT0S6dcX/view?usp=sharing"
                >
                    Resume
                </a>
                .
            </div>

            <br />
            <div className={styles.bgpara}>
                <div className={styles.bgparaheading}>
                    Background
                    <img
                        src="https://em-content.zobj.net/source/apple/391/graduation-cap_1f393.png"
                        height={25}
                        width={25}
                        style={{ marginLeft: "6px" }}
                    />
                </div>
                I'm currently a Computer Science student at <a>KL University</a>
                , specialized in Software Modelling and DevOps. I worked as
                Android Development Lead at <a>Google Developer Student Club</a>
                . I organized some awesome technical sessions & bootcamps. I'm
                also selected as a<a> HackerEarth Campus Ambassador</a> of my
                college.
            </div>
            <br />
            <div className={styles.skills}>
                <div className={styles.bgparaheading}>
                    Skills
                    <img
                        src="https://imgur.com/aDM9Roc.png"
                        height={25}
                        width={25}
                        style={{ marginLeft: "4px" }}
                    />
                </div>
                Languages:{" "}
                <a>Python, Java, SQL, JavaScript, C#, Kotlin, Dart</a>.
                <br />
                Frameworks: <a>MERN, Django, Springboot, Next, .NET, Flutter</a>
                .<br />
                DevOps: <a>Jenkins, Ansible, Terraform, Docker, Kubernetes</a>.
                <br />
                More Tools: <a>Git, Linux, AWS, Postman, Selenium, Photoshop</a>
                .
            </div>
            <br />
            <div className={styles.skills}>
                <div className={styles.bgparaheading}>
                    Achievements
                    <img
                        src="https://em-content.zobj.net/source/apple/391/sports-medal_1f3c5.png"
                        height={25}
                        width={27}
                        style={{ verticalAlign: "middle" }}
                    />
                </div>
                <ul>
                    <li>3-Star CodeChef</li>
                    <li>5-Star Hackerrank</li>
                </ul>
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "About" },
    };
}

export default GithubPage;
