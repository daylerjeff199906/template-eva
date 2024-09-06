import { DataTable, HeaderSection } from '@/modules/core'

export const EvaluacionesList = () => {
  return (
    <main className="flex flex-col gap-6">
      <HeaderSection
        title="Evaluaciones registradas"
        subtitle="Registro de evaluaciones ya registradas durante por lor docentes"
        disableAddButton
      />
      <section className="container">
        <DataTable
          columns={[]}
          data={[]}
        />
      </section>
    </main>
  )
}
