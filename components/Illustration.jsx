import React, { useEffect, useState } from "react";

function Illustration(props) {
    const [imgMarginBottom, setImgMarginBottom] = useState("0");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setImgMarginBottom("100%");
            } else {
                setImgMarginBottom("-20px");
            }
        };

        // Set the margin bottom on initial render
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        img: {
            boxShadow: `
                -50px -50px 0 -40px var(--accent-color),
                50px 50px 0 -40px var(--accent-color)
            `,
            height: "45%",
            width: "90%",
            marginBottom: imgMarginBottom,
        },
        body: {
            display: "grid",
            placeItems: "center",
            height: "100vh",
        },
    };

    return (
        <div style={styles.body}>
            <img
                style={styles.img}
                src="https://res.cloudinary.com/da94inqw8/image/upload/v1743943940/speaker_rpm6cx.jpg"
                alt="Avatar"
            />
        </div>
    );
}

export default Illustration;
