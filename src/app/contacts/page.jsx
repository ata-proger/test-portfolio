const ContactsPage = () => {
    return (
        <section className="somepage">
            <h2 className="content__title">Contacts</h2>
            <ul className="somepage__list">
                <li className="somepage__list__item">
                    <h3 className="somepage__list__item__title">Location</h3>
                    <p>Moscow, Russia</p>
                </li>
                <li className="somepage__list__item">
                    <h3 className="somepage__list__item__title">
                        Telegram / WhatsApp
                    </h3>
                    <a href="tel:+99361851881">+993 (61) 85-18-81</a>
                </li>
                <li className="somepage__list__item">
                    <h3 className="somepage__list__item__title">Email</h3>
                    <a
                        className="somepage__mailto"
                        href="mailto:tmadekvat@gmail.com?subject=tema"
                        body="tekst soobsheniya"
                    >
                        tmadekvat@gmail.com
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default ContactsPage;
