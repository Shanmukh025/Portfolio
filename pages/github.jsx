import styles from "../styles/GithubPage.module.css";

const GithubPage = ({ repos, user }) => {
    const theme = {
        level0: "#161B22",
        level1: "#0e4429",
        level2: "#006d32",
        level3: "#26a641",
        level4: "#39d353",
    };

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
                This is <a>A.Shanmukh</a>, a DevOps Engineer and an upcoming
                Software Engineer, dedicated in developing Products.
            </div>
            <br />
            <div className={styles.bgpara}>
                <div className={styles.bgparaheading}>
                    Background
                    <img
                        src="https://em-content.zobj.net/source/apple/391/graduation-cap_1f393.png"
                        height={25}
                        width={25}
                        style={{ marginLeft: "4px" }}
                    />
                </div>
                I'm currently Computer Science student @ <a>KL University</a>,
                building things for the web. I worked as an Android Development
                Lead at <a>Google Developer Student Club</a>, of my college
                after organising some awesome technical bootcamps. I'm also
                selected as a <a>HackerEarth Campus Ambassador</a>. As a
                software engineer, I enjoy bridging the gap between my
                engineering and a problem — combining my technical skills with a
                comprising solution to create a beautiful product.
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
                Frameworks: <a>MERN, Django, Next, .NET, Springboot, Flutter</a>
                .<br />
                DevOps : <a>Jenkins, Ansible, Terraform, Docker, Kubernetes</a>.
                <br />
                Tools:{" "}
                <a>Git, Bash, AWS, Azure, Postman, Selenium, Photoshop</a>.
            </div>
            <br />
            <div className={styles.skills}>
                <div className={styles.bgparaheading}>
                    Achievements
                    <img
                        src="https://em-content.zobj.net/source/apple/391/sports-medal_1f3c5.png"
                        height={20}
                        width={25}
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
