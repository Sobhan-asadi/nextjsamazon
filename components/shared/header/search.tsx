import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const categories = ["men", "women", "kids", "accessories"];
export default async function Search() {
  return (
    <form
      action="/search"
      method="GET"
      className="flex h-10 items-stretch gap-x-0.5"
    >
      <Select name="category">
        <SelectTrigger className="h-full w-auto rounded-l-md rounded-r-none border-r bg-gray-100 text-black rtl:rounded-l-none rtl:rounded-r-md dark:border-gray-200">
          <SelectValue placeholder={"All"} />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">{"All"}</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className="h-9 flex-1 rounded-none bg-gray-100 text-base text-black dark:border-gray-200"
        placeholder={"Search products..."}
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="bg-primary flex h-9 items-center justify-center rounded-s-none rounded-e-md px-3 py-2 text-black"
      >
        <SearchIcon className="h-5 w-5 cursor-pointer" />
      </button>
    </form>
  );
}
