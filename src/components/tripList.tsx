import type { Trip } from "../utils/types.d.ts";
import TripRow from "./tripRow";


interface TripListProps {
    trips: Trip[];
    selectedTripId: string | null;
    onSelect: (id: string) => void;
}

export default function TripList({ trips, selectedTripId, onSelect }: TripListProps) {
    if (trips.length === 0) {
        return (
            <p className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-500">
                Não há viagens disponíveis.
            </p>
        );
    }

    return (
        <div className="p-2.5 bg-stone-300 rounded-md">
            {trips.map((trip) => (
                <TripRow
                    key={trip.id}
                    trip={trip}
                    selected={selectedTripId === trip.id}
                    onSelect={onSelect}
                />
            ))}
        </div>
    )
}
