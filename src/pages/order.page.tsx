import { FC, useEffect } from "react";
import { Layout } from "../components/layout.component";
import { getSelectedEventId } from "../modules/events/store/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetSingleEventQuery } from "../modules/events/api/repository";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/input.component";

interface OrderPageProps {
  // Define your props here
}

export const OrderPage: FC<OrderPageProps> = ({}) => {
  const navigate = useNavigate();
  const chosenEventId = useSelector(getSelectedEventId);

  const detailsSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(10),
    address: z.string().min(10),
    cardHolderName: z.string().min(3),
    cardNumber: z.string().min(13).max(16),
    cardExpiration: z.string().min(5).max(5),
    cardCw: z.string().min(3).max(3),
  });

  type DetailSchemaValues = z.infer<typeof detailsSchema>;

  useEffect(() => {
    if (!chosenEventId) {
      navigate("/", { replace: true });
    }
  }, []);

  const event = useGetSingleEventQuery(chosenEventId || 0, {
    skip: !chosenEventId,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailSchemaValues>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      cardHolderName: "",
      cardNumber: "",
      cardExpiration: "",
      cardCw: "",
    },
    resolver: zodResolver(detailsSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Layout>
      <h4>Buying tickets for {event.data?.name.toLocaleUpperCase()}</h4>
      <hr />
      <form onSubmit={onSubmit} noValidate>
        <div className="row">
          <div className="col-sm-offset-1 col-sm-10">
            <h4>
              <strong>Your Details</strong>
            </h4>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <Input
                  label="Name"
                  {...register("name")}
                  error={errors.name?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Email"
                  {...register("email")}
                  type="email"
                  error={errors.email?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Phone"
                  {...register("phone")}
                  error={errors.phone?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Address"
                  {...register("address")}
                  error={errors.address?.message}
                />
              </div>
            </div>
            <hr />
            <h4>
              <strong>Payment Details</strong>
            </h4>
            <hr />
            <div className="row">
              <div className="col-xs-12">
                <Input
                  label="Cardholder Name"
                  {...register("cardHolderName")}
                  error={errors.cardHolderName?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Card Number"
                  {...register("cardNumber")}
                  error={errors.cardNumber?.message}
                />
              </div>
              <div className="col-sm-4">
                <Input
                  label="Card Expiration"
                  {...register("cardExpiration")}
                  error={errors.cardExpiration?.message}
                />
              </div>
              <div className="col-sm-2">
                <Input
                  label="CW"
                  {...register("cardCw")}
                  error={errors.cardCw?.message}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-default btn-block btn-lg"
            >
              Back
            </button>
          </div>
          <div className="col-xs-6">
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Pay
            </button>
          </div>
        </div>
      </form>
      <hr />
    </Layout>
  );
};
