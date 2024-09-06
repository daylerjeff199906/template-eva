import { HeaderSection } from '@/modules/core'

interface IProps {
  //next change type data
  title: string
}

export const EvaluacionRender = (props: IProps) => {
  const { title } = props
  return (
    <main>
      <HeaderSection
        title={`Evaluación - ${title}`}
        subtitle="Turno: Mañana"
        disableAddButton
        showBackButton
        renderLeftSection={<RenderLeftSection />}
      />
    </main>
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
