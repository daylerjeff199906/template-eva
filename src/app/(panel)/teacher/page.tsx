import { LayoutAsideSection } from "@/modules/core";
import { AsideTeacher, HeaderSearch, TeacherTable } from "@/modules/teacher";

export default function Page() {
  return (
    <div className="container">
      <HeaderSearch />
      <LayoutAsideSection aside={<AsideTeacher />} asidePosition="left">
        <main>
          <TeacherTable />
        </main>
      </LayoutAsideSection>
    </div>
  );
}
