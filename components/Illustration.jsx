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
            width: "80%",
            marginTop: "10px",
            marginLeft: "20px",
        },
        body: {
            display: "grid",
            placeContent: "center",
        },
    };

    return (
        <div style={styles.body}>
            <img
                style={styles.img}
                src="https://media.licdn.com/dms/image/D5603AQGDzJDzl-kQiA/profile-displayphoto-shrink_400_400/0/1715671118705?e=1721260800&v=beta&t=RD5BX15CAaADQz3xTfdheHP52wmmeWZybodM6DixgDw"
                alt="Avatar"
            />
        </div>
    );
}

export default Illustration;
