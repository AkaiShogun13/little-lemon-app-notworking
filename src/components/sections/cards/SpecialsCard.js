export default function SpecialsCard(props) {
    return (
        <article>
            <img src={props.image}
                 alt="specials img">
            </img>
            <section className="specials-content">
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <button className="specials-btn">Order for delivery</button>
            </section>
        </article>
    )
}