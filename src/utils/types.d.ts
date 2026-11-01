type TripStatus = "on-time" | "delayed" | "cancelled";

interface Trip {
  id: string;
  origin: string;
  destination: string;
  departureDate: string; // ISO 8601, ex.: "2026-10-31T09:30:00.000Z"
  arrivalDate: string;
  price: number;
  hasWifi: boolean;
  hasOutlets: boolean;
  almostFull: boolean;
  status: TripStatus;
}

export function estimatedTime(trip: Trip): number {
  const departure = new Date(trip.departureDate).getTime();
  const arrival = new Date(trip.arrivalDate).getTime();
  return Math.round((arrival - departure) / 60000); // minutos
}