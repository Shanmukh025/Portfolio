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
                    <img
                        src="https://userpic.codeforces.org/2419769/title/51e36fd8a782a23e.jpg"
                        className={styles.avatar}
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <h3>A Little Bit About Myself.</h3>
                </div>
            </div>
            <div className={styles.para1}>
                Hello!
                <img
                    src="https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113"
                    height={20}
                    width={20}
                />
            </div>
            <div className={styles.para1}>
                This is <a>Shanmukh</a>
                , an upcoming software engineer dedicated in creating innovative
                software, studying Computer Science and Engineering @ KL
                University.
                <img
                    src="https://imgur.com/aDM9Roc.png"
                    height={25}
                    width={25}
                />
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
