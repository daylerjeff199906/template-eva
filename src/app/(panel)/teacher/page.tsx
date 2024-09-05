import { LayoutAsideSection } from "@/modules/core";
import { AsideTeacher, SearchOptions, TeacherTable } from "@/modules/teacher";

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
