export type GetRatesResponseDto = Rate[];

export interface Rate {
  id: number;
  max: number;
  price: number;
  name: string;
}
