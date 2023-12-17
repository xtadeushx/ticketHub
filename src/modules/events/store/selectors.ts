import { RootState } from "../../../store";

export const getSelectedDate = ((state: RootState) => state.eventOrder.date)