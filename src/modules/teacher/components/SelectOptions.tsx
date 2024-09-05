import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchOptions = () => {
  return (
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
  );
};
