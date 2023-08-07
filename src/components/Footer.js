export default function Footer() {
    return (
        <footer>
            <img src={require ("../assets/footer-logo.png")}
                 className="footer-logo"
                 alt="Little lemon logo">
            </img>
            <ul>
                <h3>Doormat Navigation</h3>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <h3>Connect</h3>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Join Us!</li>
            </ul>
        </footer>
    );
}

