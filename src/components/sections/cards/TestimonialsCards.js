import Star from "../../../assets/star.png"
export default function TestimonialsCards(props) {
    return (
        <article className="testimonial-card">
        <img src={Star} alt="testimonial icon"></img>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
    </article>
    );
}