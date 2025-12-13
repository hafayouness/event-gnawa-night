export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  price?: number;
  // location: string;
  image: string;
}

export interface Artist {
  id: number;
  name: string;
  bio: string;
  photo_url: string;
}

export interface Booking {
  id: number;
  bookingId: string;
  ticketId: string;
  eventId: number;
  name: string;
  email: string;
  phone: string;
  code: string;
  tickets: number;
}
