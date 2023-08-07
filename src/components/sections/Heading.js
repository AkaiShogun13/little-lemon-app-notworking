export default function Heading() {
    return (
        <hero>
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <br></br>
                <button>Reserve a table</button>
            </section>
            <section className="hero-img">
                <img src={require("../../assets/hero-img.jpg")}
                     alt="Little lemon hero img">
                </img>
            </section>
        </hero>
    )
}