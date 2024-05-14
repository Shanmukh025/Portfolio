import Head from "next/head";

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Shanmukh Anaparthi is an inspireds full stack web developer building websites and applications you'd love to use"
            />
            <meta
                name="keywords"
                content="shanmukh anaparthi, shanmukh, anaparthi, developer portfolio, shanmukh web developer, shanmukh devops, devops, mern stack,  portfolio, vscode-portfolio"
            />
            <meta
                property="og:title"
                content="Shanmukh Anaparthi's Portfolio"
            />
            <meta
                property="og:description"
                content="A full-stack developer building websites that you'd like to use."
            />
            <meta property="og:image" content="https://imgur.com/GGUtyUS.png" />
            <meta property="og:url" content="https://shanmukh25.vercel.app" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    title: "Shanmukh Anaparthi",
};
