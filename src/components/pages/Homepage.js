import Heading from "../sections/Heading";
import Specials from "../sections/Specials";
import Testimonial from "../sections/Testimonial";
import About from "../sections/About"


export default function Homepage() {
    return (
        <>
        <Heading />
        <main>
            <Specials />
            <Testimonial />
            <About />
        </main>
        </>
    )
}