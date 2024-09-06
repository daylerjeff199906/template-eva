'use client'

import { HeaderSection } from '@/modules/core'
import { FrmDocenteEditorPersonal } from '@/modules/director'

export default function Create() {
  return (
    <main>
      <HeaderSection
        title="Agregar docente"
        subtitle="Complete los campos para añadir un nuevo docente"
        disableAddButton
      />
      <FrmDocenteEditorPersonal />
    </main>
  )
}
