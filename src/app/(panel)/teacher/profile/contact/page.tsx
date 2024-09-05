import { HeaderSection, UserContact } from '@/modules/core'

export default function Page() {
  return (
    <main>
      <HeaderSection
        title="Perfil de usuario"
        subtitle="Registrar, actualizar datos relevantes de mi usuario"
        disableAddButton
      />
      <UserContact/>
    </main>
  )
}
