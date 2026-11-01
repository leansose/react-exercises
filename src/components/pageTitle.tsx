interface PageTitleProps {
    title: string
}

export default function PageTitle({title}: PageTitleProps) {
    return (
    
            <h1 className="text-center mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
                {title}
            </h1>
    )
}