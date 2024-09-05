import { HeaderSection, LayoutAsideSection } from "@/modules/core";
import { AsideTeacher } from "@/modules/teacher/components/AsideCard";
import TeacherTable from "@/modules/teacher/components/TeacherTable";

export default function Page() {

  return (
    <div>
      <HeaderSection
        title="Evaluaciones"
        subtitle="Registro de evaluaciones ya registradas durante diferentes periodos"
        labelAddButton="Comenzar evaluación"
        hrefAddButton="/teacher/evaluations/new"
      />
      <LayoutAsideSection aside={<AsideTeacher hasSearch />} asidePosition="left">
        <main>
          <TeacherTable />
        </main>
      </LayoutAsideSection>
    </div>
  );
}
