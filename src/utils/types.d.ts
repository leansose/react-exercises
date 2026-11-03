export type TripStatus = "on-time" | "delayed" | "cancelled";

export type TabLabels = "Compradas" | "Esgotadas" | "Canceladas" | "Favoritas";

export interface Trip {
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