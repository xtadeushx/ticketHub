import { FC } from 'react';
import { useGetSingleEventQuery } from '../api/events';
import { useParams } from 'react-router-dom';
import { Layout } from '../../../components/layout.component';

interface SingleEventProps {
    // Define your props here
}

export const SingleEvent: FC<SingleEventProps> = () => {
    const params = useParams();
    const event = useGetSingleEventQuery(Number(params.id))
    if (event.isLoading) {
        return (
            <Layout>
                <h2>Loading...</h2>
            </Layout>
        )
    }

    return (
        <>
            <h4>{event.data?.name}</h4>
            <hr />
            <img src={event.data?.image} width="100%" />
            <hr />
            <h5><strong>Buy Tickets</strong></h5>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <select name="" id="" className="form-control">
                            <option value="">date</option>
                            {event.data?.dates.map(date => (
                                <option
                                    key={date.id}
                                    value={date.date}>
                                    {date.date}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <select name="" id="" className="form-control" disabled>
                            <option value="">Sector</option>
                           
                        </select>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="form-group">
                        <select name="" id="" className="form-control" disabled>
                            <option value="">Rate</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="form-group">
                        <select name="" id="" className="form-control" disabled>
                            <option value="">Quantity</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-primary btn-block" disabled>BUY</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-7">
                    <h4><strong>Event Description</strong></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in elit sit amet ligula faucibus semper. In aliquet sit amet purus non luctus. Quisque sit amet velit mattis, aliquam orci nec, tristique ipsum. Nulla ultrices odio neque, non venenatis ex eleifend vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin faucibus dui at lacus pretium, sit amet vestibulum ligula vehicula. Morbi turpis urna, facilisis vitae elit imperdiet, molestie volutpat dolor. Nulla facilisi. Aliquam erat volutpat. Suspendisse potenti. Duis id porta dolor.</p>
                    <p>Suspendisse ante mi, consectetur ac lectus nec, suscipit condimentum libero. Nullam malesuada urna ut dolor tincidunt sollicitudin. Morbi quis diam a felis eleifend mollis. Nam quis tempus quam. Proin consequat sapien sed felis fermentum, vel dapibus sem dapibus. Nullam molestie, justo eu egestas venenatis, felis ligula bibendum mi, et facilisis felis sapien non metus. Vivamus sit amet lectus quis turpis tempor mattis.</p>
                    <p>Curabitur mi felis, lacinia at erat quis, placerat rhoncus dui. Pellentesque efficitur dui varius neque fermentum, commodo consequat metus porta. Donec congue fringilla metus, laoreet mattis ligula pulvinar eget. Aenean et sollicitudin libero. Praesent consequat orci libero, in finibus quam volutpat placerat. Donec vulputate felis et metus tristique, in congue sapien porttitor. Morbi a nulla velit. Integer nec tempor metus. Vestibulum ut est quis augue pretium lacinia. Donec at sollicitudin arcu, a convallis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui mauris, dictum et diam ac, condimentum porta augue. Quisque consequat risus nec neque maximus, in ultricies sem mollis.</p>
                </div>
                <div className="col-sm-offset-1 col-sm-4">
                    <h4><strong>Where</strong></h4>
                    <p><strong>Venue Name</strong><br />
                        Venue Address</p>
                </div>
            </div>
            <hr />
            <h4>Similar Events</h4>
            <hr />
            <div className="row">
                <div className="col-sm-3 event-list">
                    <a href="event.html">
                        <img src="https://cdn.boletius.com/images/1521202649764-test-pos-DA32F77A-C542-41B7-81C4-43091924255B.jpeg" width="100%" />
                    </a>
                </div>
                <div className="col-sm-3 event-list">
                    <a href="event.html">
                        <img src="https://cdn.boletius.com/images/1520277905667-test-pos-All_access_640x640-min.jpg" width="100%" />
                    </a>
                </div>
                <div className="col-sm-3 event-list">
                    <a href="event.html">
                        <img src="https://cdn.boletius.com/images/1519768708978-test-pos-rompiendo-cabezas-640-min.jpg" width="100%" />
                    </a>
                </div>
                <div className="col-sm-3 event-list">
                    <a href="event.html">
                        <img src="https://cdn.boletius.com/images/1519139052461-test-pos-BANN.jpg" width="100%" />
                    </a>
                </div>
            </div>
        </>
    );
}