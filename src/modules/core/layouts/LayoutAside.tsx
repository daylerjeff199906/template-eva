import { LayoutAside } from '@/types'

export const LayoutAsideSection = (props: LayoutAside.ILayoutAsideProps) => {
  const { aside, children, asidePosition = 'left' } = props

  return (
    <main className="w-full flex gap-6 container py-4 sm:py-6 md:py-8 lg:py-10 p-0">
      {asidePosition === 'left' && <aside className="w-72">{aside}</aside>}
      <article className="w-full max-w-[calc(100%-288px)]">{children}</article>
      {asidePosition === 'right' && <aside className="w-72">{aside}</aside>}
    </main>
  )
}
