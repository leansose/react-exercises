import { useState } from "react";
import type { TabLabels, Trip } from "../utils/types";
import Tab from "./tab";
import TripList from "./tripList";

const TAB_LABELS: TabLabels[] = ["Compradas", "Esgotadas", "Canceladas", "Favoritas"];

interface TripTabsProps {
    trips: Trip[];
    selectedTripId: string | null;
    onSelect: (id: string) => void;
}

export default function TripTabs({ trips, selectedTripId, onSelect }: TripTabsProps) {

  const [activeTab, setActiveTab] = useState<TabLabels>(TAB_LABELS[0]);
  const visibleTrips = trips;

  return (
    <div role="tablist" className="flex flex-wrap gap-2">
      {TAB_LABELS.map((label) => (
        <Tab
          key={label}
          label={label}
          active={activeTab === label}
          onClick={() => setActiveTab(label)}
        >
          <TripList trips={visibleTrips} selectedTripId={selectedTripId} onSelect={onSelect} />
        </Tab>
      ))}
    </div>
  );
}