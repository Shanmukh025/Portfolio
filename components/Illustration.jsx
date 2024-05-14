function Illustration(props) {
    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                backgroundColor: "bisque",
            }}
        >
            <img
                className="framed"
                src="https://avatars.githubusercontent.com/u/110324769?s=400&u=b8f2acea182afe5006588c8ab58418cc16a92c94&v=4"
                alt="random image"
                style={{
                    boxShadow:
                        "-50px -50px 0 -40px tomato, 50px 50px 0 -40px tomato",
                    width: "320px",
                }}
            />
        </div>
    );
}

export default Illustration;
