import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";
import AccountIcon from "./icons/AccountIcon";
import CodeIcon from "./icons/CodeIcon";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import PencilIcon from "./icons/PencilIcon";
import SettingsIcon from "./icons/SettingsIcon";

const sidebarTopItems = [
    {
        Icon: FilesIcon,
        path: "/",
    },
    {
        Icon: CodeIcon,
        path: "/projects",
    },
    {
        Icon: GithubIcon,
        path: "/articles",
    },
    {
        Icon: PencilIcon,
        path: "/about",
    },
    {
        Icon: MailIcon,
        path: "/contact",
    },
];

const sidebarBottomItems = [
    {
        Icon: AccountIcon,
        path: "/github",
    },
    {
        Icon: SettingsIcon,
        path: "/settings",
    },
];

const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                {sidebarTopItems.map(({ Icon, path }) => (
                    <Link href={path} key={path}>
                        <div
                            className={`${styles.iconContainer} ${
                                router.pathname === path && styles.active
                            }`}
                        >
                            <Icon
                                fill={
                                    router.pathname === path
                                        ? "rgb(225, 228, 232)"
                                        : "rgb(106, 115, 125)"
                                }
                                className={styles.icon}
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.sidebarBottom}>
                {sidebarBottomItems.map(({ Icon, path }) => (
                    <div className={styles.iconContainer}>
                        <Link href={path} key={path}>
                            <Icon
                                fill={
                                    router.pathname === path
                                        ? "rgb(225, 228, 232)"
                                        : "rgb(106, 115, 125)"
                                }
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
