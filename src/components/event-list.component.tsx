import { FC } from 'react';
import { useGetEventsQuery } from '../api/events';
import { EventCard } from './event-card.component';

interface EventListProps {
    // Define your props here
}

export const EventList: FC<EventListProps> = () => {
    const events = useGetEventsQuery({});

    if (events.isLoading) {
        return <h2>Loading</h2>
    }

    return (
        <div className="row">
            {events.data?.map(event => (
                <EventCard
                    key={event.id}
                    eventId={event.id}
                    thumb={event.thumb}
                />

            ))}
        </div>
    );
}