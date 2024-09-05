import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { SearchInput } from "./SearchInput";

export const SearchOptions = () => {
  return (
    <div className="flex justify-between items-center pt-6 gap-6">
      <SearchInput />
      <div>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="completo">Completo</SelectItem>
            <SelectItem value="pendiente">Pendiente</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
