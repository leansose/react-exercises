import type { Trip } from "../utils/types.d.ts"
import Button from "./button"
import { WiFiIcon } from '@solar-icons/react/bold-duotone/wi-fi'
import { PlugCircleIcon } from '@solar-icons/react/bold-duotone/plug-circle'
import { DangerTriangleIcon } from '@solar-icons/react/bold-duotone/danger-triangle'

interface TripRowProps {
    trip: Trip;
    selected: boolean;
    onSelect: (id: string) => void;
}

const priceFormat = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
});

const dateTimeFormat = new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
});

function estimatedTime(trip: Trip): string {
    const departure = new Date(trip.departureDate).getTime();
    const arrival = new Date(trip.arrivalDate).getTime();
    const totalMin = Math.round((arrival - departure) / 60000); // minutos
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;
    return `${hours} hora e ${minutes} minutos`; // ex.: 1h30min -> 130    
}

export default function TripRow({ trip, selected, onSelect }: TripRowProps) {

    const soldOut = trip.status === "cancelled" && trip.almostFull === false;

    return (
        <div
            className={`flex items-center gap-4 rounded-lg border-2 p-4 transition-colors ${selected
                    ? "border-blue-600 bg-blue-50 text-blue-900"
                    : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                }`}
        >
            
            <button
                type="button"
                aria-pressed={selected}
                onClick={() => onSelect(trip.id)}
                className="flex flex-1 cursor-pointer flex-col gap-1 text-left"
            >
                <span className="flex items-center gap-2 text-lg font-semibold">
                    {trip.origin} → {trip.destination}
                    {selected ? (
                        <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
                            Selecionada
                        </span>
                    ) : null}
                </span>

                <span className="text-sm text-gray-600">
                    Partida: {dateTimeFormat.format(new Date(trip.departureDate))} · Chegada:{" "}
                    {dateTimeFormat.format(new Date(trip.arrivalDate))}
                </span>

                <span className="text-sm text-gray-500">Duração: {estimatedTime(trip)}</span>

                <span className="mt-1 flex items-center gap-2">
                    {trip.hasWifi ? <WiFiIcon size={24} /> : null}
                    {trip.hasOutlets ? <PlugCircleIcon size={24} /> : null}
                    {trip.almostFull ? <DangerTriangleIcon size={24} className="text-amber-500" /> : null}
                </span>
            </button>

            <div className="flex items-center gap-4">
                <span className="text-xl font-bold">{priceFormat.format(trip.price)}</span>
                <Button variant={soldOut ? "danger" : "success"}>
                    {soldOut ? "Esgotado" : "Comprar"}
                </Button>
            </div>
        </div>
    );
}