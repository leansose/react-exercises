import { type ReactNode } from "react";

interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
    children: ReactNode;
}

export default function Tab({ label, active, onClick, children }: TabProps) {

    return (
        <>
            <button
                type="button"
                role="tab"
                aria-selected={active}
                onClick={onClick}
                className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors ${active
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
            >
                {label}
            </button>

            {active && <div className="order-last w-full pt-4">{children}</div>}
        </>
    )
}
