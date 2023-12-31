import { FC, useMemo } from "react";
import {
  useGetSingleEventQuery,
  useLazyGetRatesBySectorIdQuery,
  useLazyGetSectorsByEventQuery,
} from "../api/repository";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedDate,
  getSelectedQuantity,
  getSelectedRate,
  getSelectedSector,
} from "../store/selectors";
import {
  setEventDate,
  setEventQuantity,
  setEventRate,
  setEventSector,
} from "../store/slice";
interface EventFormProps {
  // Define your props here
}

export const EventForm: FC<EventFormProps> = () => {
  const params = useParams();
  const navigate = useNavigate();

  const event = useGetSingleEventQuery(Number(params.id));
  const [triggerSectorsQuery, sectors] = useLazyGetSectorsByEventQuery();
  const [triggerRatesQuery, rates] = useLazyGetRatesBySectorIdQuery();

  const dispatch = useDispatch();
  const selectedDate = useSelector(getSelectedDate);
  const selectedSector = useSelector(getSelectedSector);
  const selectedRate = useSelector(getSelectedRate);
  const selectedQuantity = useSelector(getSelectedQuantity);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = Number(event.target.value);
    dispatch(setEventDate(eventId));
    dispatch(setEventSector(null));
    dispatch(setEventRate(null));
    dispatch(setEventQuantity(null));

    if (!eventId) {
      return;
    }

    triggerSectorsQuery(eventId);
  };

  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sectorId = Number(event.target.value);
    dispatch(setEventSector(sectorId));
    dispatch(setEventRate(null));
    dispatch(setEventQuantity(null));

    if (!sectorId) {
      return;
    }

    triggerRatesQuery(sectorId);
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rateId = Number(event.target.value);
    const maxQuantity =
      rates?.data?.find((rate) => rateId === rate.id)?.max || 0;
    dispatch(setEventRate({ id: rateId, max: maxQuantity || 0 }));
    dispatch(setEventQuantity(null));
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const quantity = Number(event.target.value);
    dispatch(setEventQuantity(quantity));
  };

  const quantityOptions = useMemo(
    () => new Array(selectedRate?.max || 0).fill(0),
    [selectedRate?.max],
  );

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleDateChange}
            value={Number(selectedDate)}
          >
            <option value="null">date</option>
            {event.data?.dates.map((date) => (
              <option key={date.id} value={date.id}>
                {date.date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleSectorChange}
            value={String(selectedSector)}
            disabled={!selectedDate}
          >
            <option value="">Sector</option>
            {sectors.data?.map((sector) => (
              <option key={`sector-${sector.id}`} value={sector.id}>
                {sector.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleRateChange}
            value={String(selectedRate?.id)}
            disabled={!selectedSector}
          >
            <option value="">Rate</option>
            {rates.data?.map((rate) => (
              <option key={`rate-${rate.id}`} value={rate.id}>
                {rate.name} | {rate.price}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleQuantityChange}
            value={String(selectedQuantity)}
            disabled={!selectedRate}
          >
            <option value="">Quantity</option>
            {quantityOptions.map((_, index) => (
              <option
                key={`quantity-${selectedRate?.id}-${index}`}
                value={index + 1}
              >
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-primary btn-block"
          onClick={() => navigate("/order")}
          disabled={
            !selectedDate ||
            !selectedSector ||
            !selectedRate ||
            !selectedQuantity
          }
        >
          BUY
        </button>
      </div>
    </div>
  );
};
