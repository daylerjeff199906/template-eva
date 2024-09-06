import { HeaderSection } from '@/modules/core'
import { EvaluationTable } from '../../components'

interface IProps {
  //next change type data
  title: string
}

export const EvaluacionRender = (props: IProps) => {
  const { title } = props
  return (
    <form>
      <HeaderSection
        title={`Evaluación - ${title}`}
        subtitle="Turno: Mañana"
        disableAddButton
        showBackButton
        renderLeftSection={<RenderLeftSection />}
      />
      <section className="py-4 bg-gable-green-100">
        <main className="container">
          <div>
            <h2 className="text-sm font-semibold">Acciones</h2>
          </div>
          <div></div>
        </main>
      </section>
      <section className="h-full">
        <EvaluationTable />
      </section>
    </form>
  )
}

const RenderLeftSection = () => {
  return (
    <section className="flex flex-col gap-1 border-l-2 px-4">
      <h3 className="text-sm text-gray-500">
        Institución Educativa: Nombre completo de colegio
      </h3>
      <h3 className="text-sm text-gray-500">
        Director: Juan Piero Pancracio Herrera
      </h3>
    </section>
  )
}
