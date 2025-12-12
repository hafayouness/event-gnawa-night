export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

export interface Artist {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Booking {
  id: number;
  eventId: number;
  name: string;
  email: string;
  code: string;
}
