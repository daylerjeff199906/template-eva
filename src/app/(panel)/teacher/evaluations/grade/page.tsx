import { CardGroup, HeaderSection } from "@/modules/core";
import { getCourses } from "@/utils/courses-data/get-corses";

export default async function GradePage() {
  const coursesList = await getCourses();

  return (
    <div className="flex flex-col space-y-8">
      <HeaderSection
        title="Evaluación - Etapa I - 2024"
        subtitle="Ten en cuenta que solo tienes hasta el 20 de agosto de 1999 para terminar la evaluación"
        disableAddButton
        showBackButton
      />
      <main className="grid grid-cols-4 gap-6 container">
        {coursesList.map((course) => (
          <CardGroup
            key={course.id}
            labelRef="Importar datos"
            title={course.course}
            description={course.time}
            progress={course.progress}
            states={course.progress > 1}
            href={`grade/${course.course}`}
          />
        ))}
      </main>
    </div>
  );
}
