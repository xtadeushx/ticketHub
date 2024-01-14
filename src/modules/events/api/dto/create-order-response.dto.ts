export interface CreateOrderResponseDto {
  id: number;
  quantity: number;
  confirmationCode: string;
  rate: Rate;
  user: User;
  card: Card;
  purchaseDate: string;
}

export interface Rate {
  id: number;
}

export interface User {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Card {
  nameOnCard: string;
  cvv: string;
  expires: string;
  number: string;
}
