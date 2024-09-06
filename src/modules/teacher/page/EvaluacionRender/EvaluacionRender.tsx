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
      />
    </main>
  )
}
