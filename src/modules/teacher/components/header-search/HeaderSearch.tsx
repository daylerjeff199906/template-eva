import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchInput } from "../search-input/SearchInput";
import { SearchOptions } from "../SelectOptions";

export const HeaderSearch = () => {
  return (
    <div className="flex justify-between items-center pt-6 gap-6">
        <SearchInput />
      <div>
        <SearchOptions />
      </div>
    </div>
  );
};
