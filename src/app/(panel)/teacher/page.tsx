import { LayoutAsideSection } from "@/modules/core";
import { AsideTeacher } from "@/modules/teacher/components/AsideCard";
import { SearchOptions } from "@/modules/teacher/components/SelectOption";
import TeacherTable from "@/modules/teacher/components/TeacherTable";

export default function Page() {
  return (
    <div className="container">
      <SearchOptions />
      <LayoutAsideSection aside={<AsideTeacher />} asidePosition="left">
        <main>
          <TeacherTable />
        </main>
      </LayoutAsideSection>
    </div>
  );
}
