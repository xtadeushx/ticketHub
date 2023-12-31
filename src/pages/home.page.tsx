import { FC } from "react";
import { EventList } from "../modules/events/components/event-list.component";
import { Layout } from "../components/layout.component";
import { useGetEventsQuery } from "../modules/events/api/repository";

interface HomePageProps {
  // Define your props here
}

export const HomePage: FC<HomePageProps> = () => {
  const events = useGetEventsQuery({});

  if (events.isLoading && !events.data) {
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <h4>Select an event</h4>
      <hr />
      <EventList events={events.data || []} />
    </Layout>
  );
};
