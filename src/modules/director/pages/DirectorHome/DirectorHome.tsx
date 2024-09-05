import { LayoutAsideSection } from '@/modules/core'
import { DetailsSection, FiltersAside, RecentList } from './sections'

export const DirectorHome = () => {
  return (
    <main>
      <DetailsSection />
      <LayoutAsideSection aside={<FiltersAside />}>
        <RecentList />
      </LayoutAsideSection>
    </main>
  )
}
