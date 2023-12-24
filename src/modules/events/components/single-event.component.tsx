import { FC } from "react";
import { useGetSingleEventQuery } from "../api/repository";
import { useParams } from "react-router-dom";
import { Layout } from "../../../components/layout.component";
import { EventForm } from "./event-form.component";
import { EventList } from "./event-list.component";

interface SingleEventProps {
  // Define your props here
}

export const SingleEvent: FC<SingleEventProps> = () => {
  const params = useParams();
  const event = useGetSingleEventQuery(Number(params.id));

  if (event.isLoading) {
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  }

  return (
    <>
      <h4>{event.data?.name}</h4>
      <hr />
      <img src={event.data?.image} width="100%" />
      <hr />
      <h5>
        <strong>Buy Tickets</strong>
      </h5>
      <EventForm />
      <hr />
      <div className="row">
        <div className="col-sm-7">
          <h4>
            <strong>Event Description</strong>
          </h4>
          <p>{event?.data?.description}</p>
        </div>
        <div className="col-sm-offset-1 col-sm-4">
          <h4>
            <strong>Where</strong>
          </h4>
          <p>
            <strong>{event.data?.venue.name}</strong>
            <br />
            {event.data?.venue.address}
          </p>
        </div>
      </div>
      <hr />
      <h4>Similar Events</h4>
      <hr />

      <EventList events={event.data?.similarEvents || []} />
    </>
  );
};
