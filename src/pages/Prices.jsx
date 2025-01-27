import List from "../components/List";
import Text from "../components/Text";
import Card from "../components/Card";
import { MembershipPlans } from "../services/membership";

const Membership = () => {
    return (
        <section className="membership-section">
            {/* Section Header */}
            <div className="section-header">
                {/* <Text as="p" className="section-text">{MembershipPlans.firstText}</Text> */}
                <Text as="h1" className="section-title">MEMBERSHIP <span>PLANS</span></Text>
                {/* <Text as="h1" className="section-number">03</Text> */}
            </div>

            {/* Membership Cards */}
            <main className="cards-container">
                {MembershipPlans.cards.map((card, index) => (
                    <Card className={`card ${index === 1 ? "highlighted-card" : ""}`} key={index}>
                        {/* Price Section */}
                        <Text as="h2" className="price-section">
                            <span className="price-symbol">$</span>
                            <span className={`price-amount ${card.amount === 49 ? "large-price" : ""}`}>{card.amount}</span>
                            <span className="price-duration">/{card.duration}</span>
                        </Text>

                        {/* Caption */}
                        <Text as="h3" className={`caption ${card.caption.includes("12") ? "highlight-caption" : ""}`}>
                            {card.caption}
                        </Text>

                        {/* Benefits List */}
                        <ul className="benefits-list">
                            {card.benefits.map((benefit, idx) => (
                                <List className="benefit" key={idx}>
                                    {benefit}
                                </List>
                            ))}
                        </ul>
                    </Card>
                ))}
            </main>
        </section>
    );
};

export default Membership;
