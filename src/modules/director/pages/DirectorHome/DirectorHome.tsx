import { LayoutAsideSection } from '@/modules/core'
import { DetailsSection, FiltersAside, RecentList } from './sections'

export const DirectorHome = () => {
  return (
    <main className="flex flex-col gap-6 pt-6">
      <DetailsSection />
      <LayoutAsideSection aside={<FiltersAside />}>
        <RecentList />
      </LayoutAsideSection>
    </main>
  )
}
