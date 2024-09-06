import { CardGroup, HeaderSection } from '@/modules/core'

export default function NewEvaluation() {
  const courses = [
    {
      id: 1,
      name: 'Mathematics',
      time: 'Mañana',
      status: 20,
    },
    {
      id: 2,
      name: 'Physics',
      time: 'Tarde',
      status: 25,
    },
    {
      id: 3,
      name: 'Chemistry',
      time: 'Noche',
      status: 59,
    },
  ]

  return (
    <div className="flex flex-col space-y-8">
      <HeaderSection
        title="Evaluación - Etapa I - 2024"
        subtitle="Ten en cuenta que solo tienes hasta el 20 de agosto de 1999 para terminar la evaluación"
        disableAddButton
        showBackButton
      />
      <main className="grid grid-cols-4 gap-6 container">
        {courses.map((course) => (
          <CardGroup
            key={course.id}
            labelRef="Importar datos"
            title={course.name}
            description={course.time}
            progress={course.status}
            states={course.status > 0}
            href={`/teacher/evaluations/new/${course.id}`}
          />
        ))}
      </main>
    </div>
  )
}
