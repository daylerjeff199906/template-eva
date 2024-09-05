import { DataTable, HeaderSection } from '@/modules/core'

export const DocentesList = () => {
  return (
    <main className="flex flex-col gap-6">
      <HeaderSection
        title="Gestionar docentes"
        subtitle="Añada los docentes que están disponibles para realizar las evaluaciones"
        labelAddButton="Agregar docente"
      />
      <DataTable
        columns={[]}
        data={[]}
      />
    </main>
  )
}
