import { FC } from "react";
import { SingleEvent } from "../modules/events/components/single-event.component";
import { Layout } from "../components/layout.component";

interface EventPageProps {}

export const EventPage: FC<EventPageProps> = () => {
  return (
    <div className="container">
      <Layout>
        <SingleEvent />
      </Layout>
    </div>
  );
};
