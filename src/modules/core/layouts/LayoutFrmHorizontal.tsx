interface IProps {
    title: string
    subtitle: string
    children: React.ReactNode
}

export const LayoutFrmHorizontal = (props: IProps) => {
    const { children, subtitle, title } = props
    return (
        <article className="flex flex-col sm:flex-row gap-4 sm:items-start w-full">
            <header className="w-full sm:max-w-sm">
                <h1 className="title-form font-bold">{title}</h1>
                <p className="description-form text-xs">{subtitle}</p>
            </header>
            <main className="w-full flex flex-col gap-3">{children}</main>
        </article>
    )
}