import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex items-center border rounded-sm space-x-2 px-3 bg-white w-full">
      <SearchIcon />
      <input
        type="text"
        placeholder="Buscar curso"
        className={
          "flex h-10 w-full rounded-md bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        }
      />
    </div>
  );
};
