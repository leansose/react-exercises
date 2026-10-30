import type { ReactNode } from "react"

interface CardProps {
    children: ReactNode
}

export default function Card({children }: CardProps) {
    return (
        <section className="p-4 flex flex-col justify-center content-center text-center items-center w-full text-2xl text-white bg-red-500 rounded-2xl">
            <div className="p-2 rounded-2xl border-2 border-dashed">{children}</div>
        </section>
    )
}