function Illustration(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
            }}
        >
            <img
                src="https://avatars.githubusercontent.com/u/110324769?s=400&u=b8f2acea182afe5006588c8ab58418cc16a92c94&v=4"
                alt="shanmukh"
                style={{ borderRadius: "50%", width: "80%" }} // Apply circular shape and reduce size
            />
        </div>
    );
}

export default Illustration;
