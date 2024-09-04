interface ILayoutAsideProps {
  aside: React.ReactNode
  children: React.ReactNode
  asidePosition?: 'left' | 'right'
}

export const LayoutAsideSection = (props: ILayoutAsideProps) => {
  const { aside, children, asidePosition = 'left' } = props

  return (
    <main className="w-full flex gap-6 container py-4 sm:py-6 md:py-8 lg:py-10">
      {asidePosition === 'left' && <aside className="w-72">{aside}</aside>}
      <article className="w-full max-w-[calc(100%-288px)]">{children}</article>
      {asidePosition === 'right' && <aside className="w-72">{aside}</aside>}
    </main>
  )
}
