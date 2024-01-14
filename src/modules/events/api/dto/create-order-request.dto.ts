export interface CreateOrderRequestDto {
  rate: number;
  quantity: number;
  card: Card;
  user: User;
}

interface Card {
  nameOnCard: string;
  expires: string;
  number: string;
  cvv: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
