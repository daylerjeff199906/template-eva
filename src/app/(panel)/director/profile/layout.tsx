import { HeaderSection, LayoutAsideSection } from '@/modules/core'
import { MenuUser } from '@/modules/core/components/UserProfile/MenuUser'

export default function LayoutProfile({children}: {children: React.ReactNode}) {

  return (
    <main>
      <HeaderSection
        title="Perfil de usuario"
        subtitle="Registrar, actualizar datos relevantes de mi usuario"
        disableAddButton
      />
      <LayoutAsideSection aside={<MenuUser/>}>
        {children}
      </LayoutAsideSection>
    </main>
  )
}
