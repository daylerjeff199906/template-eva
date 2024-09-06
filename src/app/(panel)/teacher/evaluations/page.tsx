import { HeaderSection, LayoutAsideSection } from "@/modules/core";
import { AsideTeacher, TeacherTable } from "@/modules/teacher";

export default function Page() {

  return (
    <div>
      <HeaderSection
        title="Evaluaciones"
        subtitle="Registro de evaluaciones ya registradas durante diferentes periodos"
        labelAddButton="Comenzar evaluación"
        hrefAddButton="/teacher/evaluations/grade"
      />
      <LayoutAsideSection aside={<AsideTeacher hasSearch />} asidePosition="left">
        <main>
          <TeacherTable />
        </main>
      </LayoutAsideSection>
    </div>
  );
}
