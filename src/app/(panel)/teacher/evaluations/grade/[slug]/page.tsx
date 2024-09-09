import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/modules/core"
import { IParams } from "@/types"
import { getCourses } from "@/utils/courses-data/get-corses";
import Link from "next/link";


export default async function page (props: IParams) {
  const { params } = props

  const coursesList = await getCourses();

  const course = coursesList.find((course) => course.course === params.slug);

  return (
    <div className="flex flex-col">
      <HeaderSection
        title={course?.course}
        subtitle={course?.time}
        labelAddButton="Guardar cambios"
        showBackButton
      />
      <section className="container flex justify-end">
        <Link href={`/teacher/evaluations/grade/${course?.course}/import`}>
          <Button variant="outline">Importar lista</Button>
        </Link>
      </section>
      <main className="flex flex-col container">
        My Post: {course?.course}
      </main>
    </div>
  )
}
