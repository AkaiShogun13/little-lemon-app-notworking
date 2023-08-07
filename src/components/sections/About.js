export default function About() {
    return (
        <article className="about-us">
            <section className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </section>
            <section className="about-img">
                <img className="chefs-1" src={require("../../assets/chefs1.jpg")} alt="Little lemon chefs"></img>
                <img className="chefs-2" src={require("../../assets/chefs2.jpg")} alt="Little lemon chefs"></img>
            </section>
        </article>
    )
}