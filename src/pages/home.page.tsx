import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EventCard } from '../components/event-card.component';

interface HomePageProps {
    // Define your props here
}

export const HomePage: FC<HomePageProps> = () => {
    return (
        <div className="container">
            <h3>
                <strong>
                    <Link to="/">Challenge Tickets</Link>
                </strong>
            </h3>
            <hr />
            <h4>Select an event</h4>
            <hr />
            <div className="row">
                <EventCard
                    eventId={1}
                    thumb='https://cdn.boletius.com/images/1519139052461-test-pos-BANN.jpg'
                />
            </div>
        </div>
    );
}