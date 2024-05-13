import styles from "../styles/Bottombar.module.css";
import CheckIcon from "./icons/CheckIcon";
import ErrorIcon from "./icons/ErrorIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
import WarningIcon from "./icons/WarningIcon";

const Bottombar = () => {
    return (
        <footer className={styles.bottomBar}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <SourceControlIcon className={styles.icon} />
                    <p>main</p>
                </div>
                <div className={styles.section}>
                    <ErrorIcon className={styles.icon} />
                    <p className={styles.errorText}>0</p>&nbsp;&nbsp;
                    <WarningIcon className={styles.icon} />
                    <p>0</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.section}>
                    <a
                        href="https://github.com/Shanmukh025/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.section}
                    >
                        <p>Developed by Shanmukh</p>
                    </a>
                </div>
                <div className={styles.section}>
                    <CheckIcon className={styles.icon} />
                </div>
            </div>
        </footer>
    );
};

export default Bottombar;
