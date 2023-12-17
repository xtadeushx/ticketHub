import { FC } from 'react';
import { EventCard } from './event-card.component';
import { Event } from '../api/dto/get-events-response.dto';

interface EventListProps {
    events: Event[]
}

export const EventList: FC<EventListProps> = ({events}) => {
  

    return (
        <div className="row">
            {events.map(event => (
                <EventCard
                    key={event.id}
                    eventId={event.id}
                    thumb={event.thumb}
                />

            ))}
        </div>
    );
}