function Illustration(props) {
    const styles = {
        img: {
            "--s": "10px", // control the size
            padding: "var(--s)",
            border: "calc(2*var(--s)) solid #0000",
            outline: "1px solid #000",
            outlineOffset: "calc(-1*var(--s))",
            background:
                "conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0)",
            width: "90%", // decreased image width
        },
        body: {
            height: "100vh",
            display: "grid",
            placeContent: "center",
        },
    };

    return (
        <div style={styles.body}>
            <img
                style={styles.img}
                src="https://avatars.githubusercontent.com/u/110324769?s=400&u=b8f2acea182afe5006588c8ab58418cc16a92c94&v=4"
                alt="Avatar"
            />
        </div>
    );
}

export default Illustration;
