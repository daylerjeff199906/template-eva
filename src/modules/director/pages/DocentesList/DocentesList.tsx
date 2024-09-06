'use client'
import { usePathname } from 'next/navigation'
import { DataTable, HeaderSection } from '@/modules/core'

export const DocentesList = () => {
  const pathname = usePathname()
  const urlAdd = `${pathname}/create`
  return (
    <main className="flex flex-col gap-6">
      <HeaderSection
        title="Gestionar docentes"
        subtitle="Añada los docentes que están disponibles para realizar las evaluaciones"
        labelAddButton="Agregar docente"
        hrefAddButton={urlAdd}
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
