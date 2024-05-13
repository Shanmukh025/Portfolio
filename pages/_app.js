import { useEffect } from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (localStorage.getItem("theme")) {
            document.documentElement.setAttribute(
                "data-theme",
                localStorage.getItem("theme")
            );
        }
    }, []);

    return (
        <Layout>
            <Head title={`A. Shanmukh | ${pageProps.title}`} />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
