import Button from "./components/button";
import Card from "./components/card";
import PageTitle from "./components/pageTitle";
import type { Trip } from "./utils/types.d.ts"
import TripRow from "./components/tripRow";
import { useState } from "react";

const trips: Trip[] = [
  {
    id: "1",
    origin: "Porto",
    destination: "Lisboa",
    departureDate: "2026-11-01T09:00:00.000Z",
    arrivalDate: "2026-11-01T11:30:00.000Z",
    price: 25,
    hasWifi: true,
    hasOutlets: true,
    almostFull: true,
    status: "on-time",
  },
  {
    id: "2",
    origin: "Porto",
    destination: "Faro",
    departureDate: "2026-11-01T13:00:00.000Z",
    arrivalDate: "2026-11-01T17:15:00.000Z",
    price: 32.5,
    hasWifi: false,
    hasOutlets: true,
    almostFull: false,
    status: "cancelled",
  },
];

export default function App() {
  
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleSelect(id: string) {
    setSelectedId((current) => (current === id ? null : id));
  }

  return (
    <main className="mx-auto max-w-3xl space-y-4 p-4">
      <PageTitle title="Travel - Panel" />
      <Card>
        <div className="p-2.5 bg-stone-300 rounded-md">
          {trips.map((trip) => (
            <TripRow
              key={trip.id}
              trip={trip}
              selected={selectedId === trip.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Card>
    </main>
  )
}
