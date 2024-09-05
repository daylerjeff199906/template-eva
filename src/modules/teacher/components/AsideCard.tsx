import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchInput } from "./SearchInput";

interface IAsideTeacherProps {
  hasSearch?: boolean;
}

export const AsideTeacher = (props: IAsideTeacherProps) => {
  const { hasSearch = false } = props;

  return (
    <div className="flex flex-col gap-6">
      {
        hasSearch && (
          <SearchInput />
        )
      }
      <div className="bg-white w-full px-4 pb-8">
        <h2 className="font-medium text-base py-4">Movimientos recientes</h2>
        <div className="flex flex-col space-y-3">
          <section className="space-y-2">
            <span className="text-sm text-gray-800">Fecha de evaluación</span>
            <Input type="date" className="w-full" />
          </section>
          <section className="space-y-2">
            <span className="text-sm text-gray-800 w-full">Estado</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="completo">Completo</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
              </SelectContent>
            </Select>
          </section>
        </div>
      </div>
    </div>
  );
};
